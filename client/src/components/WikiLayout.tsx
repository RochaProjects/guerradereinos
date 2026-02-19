import { useEffect, useState } from "react";
import { wikiNavItems } from "@/config/wiki";
import { Link, useLocation } from "wouter";

type WikiLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function WikiLayout({ title, subtitle, children }: WikiLayoutProps) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_45%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.2),transparent_42%),linear-gradient(to_bottom,#020617,#0f172a)]" />

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-800 bg-slate-950/95 lg:block">
        <nav className="h-full overflow-y-auto p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Categorias</p>
          <ul className="mt-3 space-y-2">
            {wikiNavItems.map((item) => {
              const isActive = location === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg border px-3 py-2 transition ${
                      isActive
                        ? "border-sky-400 bg-sky-500/15 text-sky-100"
                        : "border-slate-700 bg-slate-900/70 text-slate-200 hover:border-slate-500 hover:bg-slate-800"
                    }`}
                  >
                    <p className="text-base font-semibold">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.summary}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="fixed right-4 top-4 z-40 rounded-lg border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 lg:hidden"
      >
        Menu
      </button>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/75"
          />
          <aside className="relative h-full w-72 overflow-y-auto overscroll-contain border-r border-slate-800 bg-slate-950 shadow-2xl [touch-action:pan-y]">
            <div className="sticky top-0 z-20 mb-3 flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-4 shadow-[0_8px_18px_rgba(2,6,23,0.55)]">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Categorias</p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-200"
              >
                Fechar
              </button>
            </div>
            <nav className="px-4 pb-6">
              <ul className="space-y-2">
                {wikiNavItems.map((item) => {
                  const isActive = location === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-lg border px-3 py-2 transition ${
                          isActive
                            ? "border-sky-400 bg-sky-500/15 text-sky-100"
                            : "border-slate-700 bg-slate-900/70 text-slate-200"
                        }`}
                      >
                        <p className="text-base font-semibold">{item.label}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.summary}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      ) : null}

      <main className="pb-8 md:pb-10 lg:ml-72">
        <div className="container pt-6">
          <section className="mb-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
              Wiki Oficial • Guerra dos Reinos
            </p>
            <h1 className="display-font mt-2 text-2xl leading-tight text-slate-50 sm:text-3xl md:text-4xl">
              {title}
            </h1>
            <p className="mt-2 max-w-3xl text-base text-slate-300 md:text-lg">{subtitle}</p>
          </section>

          {children}
        </div>
      </main>
    </div>
  );
}
