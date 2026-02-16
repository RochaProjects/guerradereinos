import { useEffect, useRef, useState } from "react";
import { wikiNavItems } from "@/config/wiki";
import { Link, useLocation } from "wouter";

type WikiLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function WikiLayout({ title, subtitle, children }: WikiLayoutProps) {
  const [location] = useLocation();
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setHeaderHidden(window.scrollY > 4);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const headerNode = headerRef.current;
    if (!headerNode) {
      return;
    }

    const measure = () => {
      setHeaderHeight(headerNode.offsetHeight);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(headerNode);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_45%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.2),transparent_42%),linear-gradient(to_bottom,#020617,#0f172a)]" />

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur transition-transform duration-300 will-change-transform ${
          headerHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container py-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
            Wiki Oficial • Guerra dos Reinos
          </p>
          <h1 className="display-font mt-2 text-2xl leading-tight text-slate-50 sm:text-3xl md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-base text-slate-300 md:text-lg">{subtitle}</p>
        </div>

        <nav className="container pb-4">
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5">
            {wikiNavItems.map((item) => {
              const isActive = location === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg border px-3 py-2 text-base transition ${
                      isActive
                        ? "border-sky-400 bg-sky-500/15 text-sky-100"
                        : "border-slate-700 bg-slate-900/70 text-slate-200 hover:border-slate-500 hover:bg-slate-800"
                    }`}
                  >
                    <p className="font-semibold">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.summary}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className="container pb-8 md:pb-10" style={{ paddingTop: headerHeight + 24 }}>
        {children}
      </main>
    </div>
  );
}
