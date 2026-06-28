"use client";

import { useState } from "react";

type SiteHeaderProps = {
  navItems: string[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-y border-white/15 bg-black/75 backdrop-blur-sm">
      <div className="mx-auto flex min-h-14 max-w-[1180px] items-center justify-between gap-8 px-4 md:px-6">
        <a
          href="#presentacion"
          className="flex items-center py-2"
          aria-label="NodoArg"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo-blanco.svg"
            alt="NodoArg"
            className="h-7 w-auto md:h-8"
          />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:border-[var(--color-primary)] md:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? "Cerrar menu" : "Abrir menu"}</span>
          <div className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item, index) => {
            const href = `#${item.toLowerCase()}`;
            const isActive = index === 0;

            return (
              <a
                key={item}
                href={href}
                className={`nav-link text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "is-active text-[var(--color-primary-strong)]"
                    : "text-white/72 hover:text-white"
                }`}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-white/10 bg-[#010101]/95 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-1">
            {navItems.map((item, index) => {
              const href = `#${item.toLowerCase()}`;
              const isActive = index === 0;

              return (
                <a
                  key={item}
                  href={href}
                  className={`rounded-md px-3 py-3 text-sm uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "bg-white/5 text-[var(--color-primary-strong)]"
                      : "text-white/78 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
