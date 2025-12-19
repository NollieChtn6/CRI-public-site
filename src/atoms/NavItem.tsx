import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { SectionInterface } from "@/@types/types";
import { convertToSmartApostrophe } from "@/utils/formatText";

interface NavItemProps {
  item: SectionInterface;
}

export default function NavItem({ item }: NavItemProps) {
  const hasPages = item.pages && item.pages.length > 0;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleMenu(e: React.MouseEvent) {
    if (!hasPages) return;
    e.preventDefault();
    setOpen((prev) => !prev);
  }

  return (
    <div
      ref={ref}
      className="relative hover:bg-red-500 hover:scale-105 rounded-md transition-all duration-200 ease-in-out"
    >
      <a
        href={`/${item.path}`}
        onClick={toggleMenu}
        className="
          inline-flex items-center gap-1
          px-4 py-2
          font-medium text-base"
        aria-haspopup={hasPages}
        aria-expanded={open}
      >
        {convertToSmartApostrophe(item.label)}

        {hasPages && (
          <FiChevronDown
            className={`
              h-4 w-4 transition-transform duration-200 ease-out
              ${open ? "rotate-180" : "rotate-0"}
            `}
          />
        )}
      </a>

      {hasPages && (
        <div
          className={`
            absolute -left-5 top-full mt-2 z-50
            min-w-[260px]
            rounded-xl bg-white shadow-lg
            border border-gray-100
            origin-top
            transition-all duration-200 ease-out
            ${
              open
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
            }
          `}
        >
          <ul className="p-2 flex flex-col">
            {item.pages?.map((page) => (
              <li key={page.path}>
                <a
                  href={`/${item.path}/${page.path}`}
                  onClick={() => setOpen(false)}
                  className="
                    group block px-4 py-3
                    transition-all duration-150
                    hover:bg-gray-500
                    hover:translate-x-1
                    hover:border-l
                    hover:border-red-500
                  "
                >
                  <p className="font-medium text-base text-gray-900 group-hover:text-red-600 transition-colors">
                    {page.label}
                  </p>

                  {page.description && <p className="text-xs text-gray-500">{page.description}</p>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
