import { useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import { TocStyle } from '../common/Style';
import { sectionIds } from '../../payload'; // Payload import

export const TableOfContents = {
  Component: () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null); // 활성화된 섹션
    const [hoveredItem, setHoveredItem] = useState<string | null>(null); // 호버된 항목
    const [, setVisibleSections] = useState<string[]>([]); // 보이는 섹션 목록

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          setVisibleSections((prevVisibleSections) => {
            let updatedVisibleSections = [...prevVisibleSections];

            entries.forEach(entry => {
              const sectionId = entry.target.id;

              if (entry.isIntersecting) {
                // 섹션이 화면에 나타났다면 리스트에 추가
                if (!updatedVisibleSections.includes(sectionId)) {
                  updatedVisibleSections.push(sectionId);
                }
              } else {
                // 섹션이 화면에서 사라졌다면 리스트에서 제거
                updatedVisibleSections = updatedVisibleSections.filter(id => id !== sectionId);
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

            // 리스트의 첫 번째 섹션을 활성화
            if (updatedVisibleSections.length > 0) {
              setActiveSection(updatedVisibleSections[0]);
            } else {
              setActiveSection(null); // 모든 섹션이 사라지면 비활성화
            }

            return updatedVisibleSections;
          });
        },
        { threshold: 0.4 }, // 40% 보일 때 활성화
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
      };
    }, [sectionIds]);

    return (
      <>
        <div
          style={TocStyle.tocBarContainer}
          onMouseEnter={() => setIsVisible(true)} // 마우스가 영역에 들어왔을 때 TOC 표시
        >
          {sectionIds.map((id: string) => (
            <div
              key={id}
              style={
                activeSection === id
                  ? TocStyle.progressBarActive // 활성화된 섹션 바 스타일
                  : TocStyle.progressBar
              }
            />
          ))}
        </div>
        {isVisible && (
          <div
            style={TocStyle.toc}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <Scrollspy
              items={sectionIds}
              currentClassName="is-current"
              style={{ listStyle: 'none', padding: 10 }}
            >
              {sectionIds.map((id) => (
                <li
                  style={
                    activeSection === id
                      ? { ...TocStyle.tocItem, ...TocStyle.tocItemActive }
                      : hoveredItem === id
                        ? { ...TocStyle.tocItem, ...TocStyle.tocItemHover } // 호버된 항목 스타일 적용
                        : TocStyle.tocItem
                  }
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
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>
        )}
      </>
    );
  },
};
