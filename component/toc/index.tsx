import { useEffect, useRef, useState } from 'react';
import { TocStyle } from '../common/Style';
import { sectionIds } from '../../payload'; // Payload import

interface TableOfContentsProps {
  showToc: boolean; // TOC를 표시할지 여부를 props로 제어
}

const useTocState = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null); // 활성화된 섹션
  const [isTocVisible, setIsTocVisible] = useState(false); // TODO) CSSProperties는 hover를 지원하지 않아 의사클래스 지원이 되는 라이브러리 사용시 state제거 필요
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [, setVisibleSections] = useState<string[]>([]);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  return {
    activeSection,
    setActiveSection,
    isTocVisible,
    setIsTocVisible,
    hoveredItem,
    setHoveredItem,
    setVisibleSections,
    isScreenSmall,
    setIsScreenSmall,
  };
};

// 윈도우 크기 감지 - 타입 추가
const useWindowResize = (setIsScreenSmall: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 960);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsScreenSmall]);
};

const updateVisibleSections = (
  entries: IntersectionObserverEntry[],
  prevVisibleSections: string[],
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>,
  prevScrollTopRef: React.MutableRefObject<number>,
): string[] => {
  let updatedVisibleSections = [...prevVisibleSections];

  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      if (!updatedVisibleSections.includes(sectionId)) {
        updatedVisibleSections.push(sectionId);
      }
    } else {
      updatedVisibleSections = updatedVisibleSections.filter((id) => id !== sectionId);
    }
  });

  updatedVisibleSections = updatedVisibleSections.sort((a, b) => {
    const elementA = document.getElementById(a);
    const elementB = document.getElementById(b);
    return (
      (elementA?.getBoundingClientRect().top || 0) - (elementB?.getBoundingClientRect().top || 0)
    );
  });

  if (updatedVisibleSections.length > 0) {
    const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScrollTop > prevScrollTopRef.current) {
      setActiveSection(updatedVisibleSections[updatedVisibleSections.length - 1]);
    } else {
      setActiveSection(updatedVisibleSections[0]);
    }
    prevScrollTopRef.current = currentScrollTop; // eslint-disable-line no-param-reassign
  }

  return updatedVisibleSections;
};

const handleIntersection = (
  entries: IntersectionObserverEntry[],
  prevScrollTopRef: React.MutableRefObject<number>,
  isManualScrollRef: React.MutableRefObject<boolean>,
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>,
  setVisibleSections: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (isManualScrollRef.current) return;
  setVisibleSections((prevVisibleSections) => {
    return updateVisibleSections(entries, prevVisibleSections, setActiveSection, prevScrollTopRef);
  });
};

export const TableOfContents = {
  Component: ({ showToc }: TableOfContentsProps) => {
    const {
      activeSection,
      setActiveSection,
      isTocVisible,
      setIsTocVisible,
      hoveredItem,
      setHoveredItem,
      setVisibleSections,
      isScreenSmall,
      setIsScreenSmall,
    } = useTocState();

    const prevScrollTopRef = useRef<number>(0);
    const isManualScrollRef = useRef<boolean>(false); // 수동 스크롤(클릭) 여부
    const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 수동 스크롤 후 타이머

    useWindowResize(setIsScreenSmall);

    const observeSections = (observer: IntersectionObserver, action: 'observe' | 'unobserve') => {
      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          if (action === 'observe') {
            observer.observe(sectionElement);
          } else {
            observer.unobserve(sectionElement);
          }
        }
      });
    };

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
          handleIntersection(
            entries,
            prevScrollTopRef,
            isManualScrollRef,
            setActiveSection,
            setVisibleSections,
          );
        },
        {
          threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0% ~ 100% 비율을 감지하도록 설정
        },
      );

      observeSections(observer, 'observe'); // 중복 제거

      // cleanup: 컴포넌트가 언마운트될 때 observer 해제
      return () => {
        observeSections(observer, 'unobserve'); // 중복 제거

        if (manualScrollTimeoutRef.current) {
          clearTimeout(manualScrollTimeoutRef.current);
        }
      };
    }, [sectionIds]);

    useEffect(() => {
      const handleResize = () => {
        setIsScreenSmall(window.innerWidth <= 960); // 화면 크기에 따라 TOC 가시성 조정
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
          <ul style={{ listStyle: 'none', padding: 10 }}>
            {sectionIds.map((id) => (
              <li
                style={getTocItemStyle(id)}
                key={`li-#${id}`}
                onMouseEnter={() => setHoveredItem(id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={`#${id}`}
                  style={activeSection === id ? TocStyle.tocLinkActive : TocStyle.tocLink}
                  onClick={() => handleClick(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  },
};
