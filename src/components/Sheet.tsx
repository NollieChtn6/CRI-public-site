import { IoMenuOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAV_LINKS } from "./Navbar";

export default function SideSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="rounded-md cursor-pointer hover:bg-red-500 transition-all duration-200 ease-in-out p-2 hover:scale-105"
        >
          <IconContext.Provider value={{ size: "32" }}>
            <IoMenuOutline />
          </IconContext.Provider>
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] sm:w-[360px]">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-left text-xl">Menu</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((section) => (
              <div key={section.label} className="space-y-2">
                <div className="rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out">
                  <a
                    href={`/${section.path}`}
                    className="
                  flex items-center justify-between
                  px-2 py-2 rounded-md
                  text-sm font-semibold uppercase tracking-wide
                  transition
                  active:scale-[0.98]
                "
                  >
                    {section.label}
                  </a>
                </div>
                {section.pages && section.pages.length > 0 && (
                  <div className="flex flex-col ml-4 pl-4 border-l border-gray-200">
                    {section.pages.map((page) => (
                      <a
                        key={page.path}
                        href={`/${section.path}/${page.path}`}
                        className="
                        px-2 py-1.5
                        text-base
                        transition
                        hover:border-l
                        hover:border-l-red-500
                        hover:text-foreground
                        hover:translate-x-1
                        active:scale-[0.98]
                      "
                      >
                        {page.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
