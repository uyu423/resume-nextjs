import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../common/useMediaQuery';
import { resolveActiveId } from './resolveActiveId';

interface NavItem {
  id: string;
  title: string;
}

export function FloatingNav() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const clickedIdRef = useRef<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[aria-labelledby]');
    const navItems: NavItem[] = [];
    sections.forEach((section) => {
      const labelId = section.getAttribute('aria-labelledby');
      if (labelId) {
        const heading = document.getElementById(labelId);
        if (heading) {
          navItems.push({
            id: labelId,
            title: heading.textContent || '',
          });
        }
      }
    });
    setItems(navItems);
  }, []);

  useEffect(() => {
    if (!isDesktop || items.length === 0) {
      return undefined;
    }

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => !!heading);

    let rafId = 0;
    const updateActiveId = () => {
      const isAtBottom =
        Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      const id = resolveActiveId(
        headings.map((heading) => ({ id: heading.id, top: heading.getBoundingClientRect().top })),
        window.innerHeight,
        isAtBottom,
      );
      if (id) {
        setActiveId(id);
      }
    };

    const requestUpdate = () => {
      // 메뉴 클릭으로 이동하는 동안에는 클릭한 섹션을 유지한다.
      // 페이지 끝에 걸린 섹션은 위치만으로는 클릭한 섹션과 마지막 섹션을 구분할 수 없다.
      if (clickedIdRef.current) {
        return;
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        updateActiveId();
        rafId = 0;
      });
    };

    // 이동이 끝나거나 사용자가 직접 스크롤하면 다시 위치로 판단한다
    const releaseClickedId = () => {
      clickedIdRef.current = null;
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('scrollend', releaseClickedId);
    window.addEventListener('wheel', releaseClickedId, { passive: true });
    window.addEventListener('touchmove', releaseClickedId, { passive: true });
    window.addEventListener('keydown', releaseClickedId);
    requestUpdate();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('scrollend', releaseClickedId);
      window.removeEventListener('wheel', releaseClickedId);
      window.removeEventListener('touchmove', releaseClickedId);
      window.removeEventListener('keydown', releaseClickedId);
    };
  }, [isDesktop, items]);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const heading = document.getElementById(id);
    if (heading) {
      clickedIdRef.current = id;
      setActiveId(id);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      heading.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  };

  if (!isDesktop || items.length === 0) return null;

  return (
    <nav
      className="floating-nav"
      style={{
        opacity: visible ? 1 : 0,
        // opacity만 0이면 Tab 포커스가 보이지 않는 버튼에 머문다
        visibility: visible ? 'visible' : 'hidden',
      }}
      aria-label="Section navigation"
    >
      <ul className="floating-nav-list">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="floating-nav-item">
              <button
                onClick={() => handleClick(item.id)}
                className={`floating-nav-button ${isActive ? 'is-active' : ''}`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
