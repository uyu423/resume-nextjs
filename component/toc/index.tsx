import { useEffect, useRef, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import { TocStyle } from '../common/Style';
import { sectionIds } from '../../payload'; // Payload import

interface TableOfContentsProps {
  showToc: boolean; // TOC를 표시할지 여부를 props로 제어
}

export const TableOfContents = {
  Component: ({ showToc }: TableOfContentsProps) => {
    const [activeSection, setActiveSection] = useState<string | null>(null); // 활성화된 섹션
    const [isTocVisible, setIsTocVisible] = useState(false); // TODO) CSSProperties는 hover를 지원하지 않아 의사클래스 지원이 되는 라이브러리 사용시 state제거 필요
    const [hoveredItem, setHoveredItem] = useState<string | null>(null); // 호버된 항목
    const [, setVisibleSections] = useState<string[]>([]); // 보이는 섹션 목록
    const [isScreenSmall, setIsScreenSmall] = useState(false); // 작은 화면인지 여부
    const prevScrollTopRef = useRef<number>(0);
    const isManualScrollRef = useRef<boolean>(false); // 수동 스크롤(클릭) 여부
    const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 수동 스크롤 후 타이머

    const getTocItemStyle = (id: string) => {
      let style = { ...TocStyle.tocItem };

      if (activeSection === id) {
        style = { ...style, ...TocStyle.tocItemActive }; // 활성화된 항목 스타일
      } else if (hoveredItem === id) {
        style = { ...style, ...TocStyle.tocItemHover }; // 호버된 항목 스타일
      }

      return style;
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (isManualScrollRef.current) return; // 수동으로 스크롤 중일 때는 자동 스크롤 감지 비활성화

          setVisibleSections((prevVisibleSections) => {
            let updatedVisibleSections = [...prevVisibleSections];

            entries.forEach((entry) => {
              const sectionId = entry.target.id;
              if (entry.isIntersecting) {
                // 섹션이 화면에 나타났다면 리스트에 추가
                if (!updatedVisibleSections.includes(sectionId)) {
                  updatedVisibleSections.push(sectionId);
                }
              } else {
                // 섹션이 화면에서 사라졌다면 리스트에서 제거
                updatedVisibleSections = updatedVisibleSections.filter((id) => id !== sectionId);
              }
            });

            updatedVisibleSections = updatedVisibleSections.sort((a, b) => {
              const elementA = document.getElementById(a);
              const elementB = document.getElementById(b);

              if (elementA && elementB) {
                return elementA.getBoundingClientRect().top - elementB.getBoundingClientRect().top;
              }

              return 0;
            });

            if (updatedVisibleSections.length > 0) {
              const currentScrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;

              // 스크롤 방향에 따라 활성화할 섹션을 설정
              if (currentScrollTop > prevScrollTopRef.current) {
                // 스크롤을 내릴 때: 첫 번째 보이는 섹션을 활성화
                setActiveSection(updatedVisibleSections[updatedVisibleSections.length - 1]);
              } else {
                // 스크롤을 올릴 때: 마지막 보이는 섹션을 활성화
                setActiveSection(updatedVisibleSections[0]);
              }
              prevScrollTopRef.current = currentScrollTop;
            }

            return updatedVisibleSections;
          });
        },
        {
          threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0% ~ 100% 비율을 감지하도록 설정
        },
      );

      // 각 섹션에 대해 observer 적용
      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          observer.observe(sectionElement);
        }
      });

      // cleanup: 컴포넌트가 언마운트될 때 observer 해제
      return () => {
        sectionIds.forEach((id) => {
          const sectionElement = document.getElementById(id);
          if (sectionElement) {
            observer.unobserve(sectionElement);
          }
        });

        if (manualScrollTimeoutRef.current) {
          clearTimeout(manualScrollTimeoutRef.current);
        }
      };
    }, [sectionIds]);

    useEffect(() => {
      // TODO) 반응형 기준 TOC를 어떻게 처리할까에 대한 고민이 되면 좋을것 같음.
      const handleResize = () => {
        setIsScreenSmall(window.innerWidth <= 960); // 1920px / 2
      };

      // 처음 로딩 시 화면 크기 체크
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    if (!showToc || isScreenSmall) {
      return null; // TOC를 숨김
    }

    const handleClick = (id: string) => {
      setActiveSection(id); // 수동으로 활성화된 섹션 설정
      isManualScrollRef.current = true; // 수동 스크롤 상태로 설정

      // 일정 시간 동안만 수동 스크롤 상태를 유지
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
      manualScrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false; // 자동 스크롤 감지 다시 활성화
      }, 1000); // 1초 동안 수동 스크롤 상태 유지
    };

    return (
      <>
        <div style={TocStyle.tocBarContainer} onMouseEnter={() => setIsTocVisible(true)}>
          {sectionIds.map((id: string) => (
            <div
              key={id}
              style={activeSection === id ? TocStyle.progressBarActive : TocStyle.progressBar}
            />
          ))}
        </div>
        <div
          style={{
            ...TocStyle.toc,
            opacity: isTocVisible ? 1 : 0,
            pointerEvents: isTocVisible ? 'auto' : 'none',
          }}
          onMouseLeave={() => setIsTocVisible(false)}
        >
          <Scrollspy
            items={sectionIds}
            currentClassName="is-current"
            style={{ listStyle: 'none', padding: 10 }}
          >
            {sectionIds.map((id) => (
              <li
                style={getTocItemStyle(id)}
                key={`li-#${id}`}
                onMouseEnter={() => setHoveredItem(id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={`#${id}`}
                  style={
                    activeSection === id
                      ? TocStyle.tocLinkActive // 활성화된 링크는 파란색으로
                      : TocStyle.tocLink // 비활성화된 링크는 회색으로
                  }
                  onClick={() => handleClick(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </Scrollspy>
        </div>
      </>
    );
  },
};
