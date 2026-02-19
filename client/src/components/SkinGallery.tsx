import { useEffect, useRef, useState } from "react";
import { SkinViewer } from "skinview3d";

const BASE_URL = import.meta.env.BASE_URL;

type SkinInfo = {
  id: string;
  label: string;
  skinPath: string;
  note: string;
};

const SKINS: SkinInfo[] = [
  {
    id: "azul",
    label: "Lunar (Azul)",
    skinPath: `${BASE_URL}azul.png`,
    note: "Time azul oficial do servidor",
  },
  {
    id: "padrao",
    label: "Padrão",
    skinPath: `${BASE_URL}padrao.png`,
    note: "Jogador sem time definido",
  },
  {
    id: "vermelho",
    label: "Solaris (Vermelho)",
    skinPath: `${BASE_URL}vermelho.png`,
    note: "Time vermelho oficial do servidor",
  },
];

export default function SkinGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const azulCanvasRef = useRef<HTMLCanvasElement>(null);
  const padraoCanvasRef = useRef<HTMLCanvasElement>(null);
  const vermelhoCanvasRef = useRef<HTMLCanvasElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "240px 0px",
        threshold: 0.1,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const viewers: SkinViewer[] = [];

    const setup = [
      { ref: azulCanvasRef, skin: SKINS[0] },
      { ref: padraoCanvasRef, skin: SKINS[1] },
      { ref: vermelhoCanvasRef, skin: SKINS[2] },
    ] as const;

    setup.forEach(({ ref, skin }) => {
      if (!ref.current) {
        return;
      }

      const viewer = new SkinViewer({
        canvas: ref.current,
        width: 280,
        height: 360,
        skin: skin.skinPath,
      });
      viewer.autoRotate = true;
      viewer.autoRotateSpeed = 1.8;
      viewers.push(viewer);
    });

    return () => {
      viewers.forEach((viewer) => viewer.dispose());
    };
  }, [shouldAnimate]);

  return (
    <section ref={sectionRef} className="rounded-2xl border border-slate-700 bg-slate-900/65 p-6 shadow-[0_20px_70px_rgba(2,6,23,.45)]">
      <div className="mb-6">
        <h2 className="display-font text-2xl text-slate-50 sm:text-3xl md:text-4xl">Skins Oficiais</h2>
        <p className="mt-2 text-sm text-slate-300 md:text-base">
          Essas três skins seguem como padrão do servidor. Novas classes visuais
          (Invocador, Jogadores VIP, Streamer, YouTube e outras) podem entrar nas próximas temporadas.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-xl border border-blue-400/40 bg-slate-950/70 p-4">
          <div className="rounded-lg bg-gradient-to-b from-blue-300 to-blue-700 p-2 shadow-lg">
            {shouldAnimate ? (
              <canvas ref={azulCanvasRef} className="mx-auto block max-w-full rounded" />
            ) : (
              <img
                src={SKINS[0].skinPath}
                alt={SKINS[0].label}
                loading="lazy"
                className="mx-auto block h-[360px] w-[280px] max-w-full rounded object-contain"
              />
            )}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-blue-200">{SKINS[0].label}</h3>
          <p className="mt-1 text-sm text-slate-300">{SKINS[0].note}</p>
        </article>

        <article className="rounded-xl border border-slate-500/40 bg-slate-950/70 p-4">
          <div className="rounded-lg bg-gradient-to-b from-slate-200 to-slate-500 p-2 shadow-lg">
            {shouldAnimate ? (
              <canvas ref={padraoCanvasRef} className="mx-auto block max-w-full rounded" />
            ) : (
              <img
                src={SKINS[1].skinPath}
                alt={SKINS[1].label}
                loading="lazy"
                className="mx-auto block h-[360px] w-[280px] max-w-full rounded object-contain"
              />
            )}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-100">{SKINS[1].label}</h3>
          <p className="mt-1 text-sm text-slate-300">{SKINS[1].note}</p>
        </article>

        <article className="rounded-xl border border-red-400/40 bg-slate-950/70 p-4">
          <div className="rounded-lg bg-gradient-to-b from-rose-300 to-red-700 p-2 shadow-lg">
            {shouldAnimate ? (
              <canvas ref={vermelhoCanvasRef} className="mx-auto block max-w-full rounded" />
            ) : (
              <img
                src={SKINS[2].skinPath}
                alt={SKINS[2].label}
                loading="lazy"
                className="mx-auto block h-[360px] w-[280px] max-w-full rounded object-contain"
              />
            )}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-red-200">{SKINS[2].label}</h3>
          <p className="mt-1 text-sm text-slate-300">{SKINS[2].note}</p>
        </article>
      </div>
    </section>
  );
}
