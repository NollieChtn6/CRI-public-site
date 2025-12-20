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
      className="
        relative rounded-md
        transition-all duration-200 ease-in-out
        hover:bg-shark-900
      "
    >
      <a
        href={`/${item.path}`}
        onClick={toggleMenu}
        className="
          inline-flex items-center gap-1
          px-4 py-2
          font-medium text-base
          text-shark-100
          hover:text-shark-50
          transition-colors
        "
      >
        {convertToSmartApostrophe(item.label)}

        {hasPages && (
          <FiChevronDown
            className={`
              h-4 w-4
              text-shark-400
              transition-all duration-200 ease-out
              ${open ? "rotate-180 text-shark-50" : ""}
            `}
          />
        )}
      </a>

      {hasPages && (
        <div
          className={`
            absolute -left-5 top-full mt-2 z-50
            min-w-[260px]
            rounded-xl
            bg-shark-900
            border border-shark-800
            shadow-xl
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
                    hover:bg-shark-800
                    hover:translate-x-1
                    border-l-2 border-transparent
                    hover:border-red-orange-500
                  "
                >
                  <p
                    className="
                    font-medium text-base
                    text-shark-100
                    group-hover:text-red-orange-400
                    transition-colors
  "
                  >
                    {page.label}
                  </p>

                  {page.description && <p className="text-xs text-shark-300">{page.description}</p>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
