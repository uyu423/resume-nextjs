import { PropsWithChildren, useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import { Style } from '../common/Style';
import Payload from '../../payload'; // Payload import

export const TableOfContents = {
  Component: (props: PropsWithChildren<{ payload?: Payload }>) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null); // 활성화된 섹션
    const [hoveredItem, setHoveredItem] = useState<string | null>(null); // 호버된 항목

    const sectionIds = [
      !Payload.profile.disable && Payload.profile.sectionId,
      !Payload.introduce.disable && Payload.introduce.sectionId,
      !Payload.skill.disable && Payload.skill.sectionId,
      !Payload.experience.disable && Payload.experience.sectionId,
      !Payload.project.disable && Payload.project.sectionId,
      !Payload.openSource.disable && Payload.openSource.sectionId,
      !Payload.presentation.disable && Payload.presentation.sectionId,
      !Payload.article.disable && Payload.article.sectionId,
      !Payload.education.disable && Payload.education.sectionId,
      !Payload.etc.disable && Payload.etc.sectionId,
    ].filter(Boolean) as string[];

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting) // 뷰포트에 들어온 섹션만 필터링
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top); // 가장 먼저 보이는 섹션을 찾기 위해 정렬

          if (visibleSections.length > 0) {
            setActiveSection(visibleSections[0].target.id); // 첫 번째로 보이는 섹션을 활성화
          }
        },
        { threshold: 0.8 }, // 60% 보일 때 활성화
      );

      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          observer.observe(sectionElement);
        }
      });

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
          style={Style.tocBarContainer}
          onMouseEnter={() => setIsVisible(true)} // 마우스가 영역에 들어왔을 때 TOC 표시
        >
          {sectionIds.map((id: string) => (
            <div
              key={id}
              style={
                activeSection === id
                  ? Style.progressBarActive // 활성화된 섹션 바 스타일
                  : Style.progressBar
              }
            />
          ))}
        </div>
        {isVisible && (
          <div
            style={Style.toc}
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
                      ? { ...Style.tocItem, ...Style.tocItemActive }
                      : hoveredItem === id
                        ? { ...Style.tocItem, ...Style.tocItemHover } // 호버된 항목 스타일 적용
                        : Style.tocItem
                  }
                  key={`li-#${id}`}
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={`#${id}`}
                    style={
                      activeSection === id
                        ? Style.tocLinkActive // 활성화된 링크는 파란색으로
                        : Style.tocLink // 비활성화된 링크는 회색으로
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
