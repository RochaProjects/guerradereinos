import SkinGallery from "@/components/SkinGallery";
import WikiLayout from "@/components/WikiLayout";
import { wikiNavItems } from "@/config/wiki";
import { Link } from "wouter";

export default function Home() {
  return (
    <WikiLayout
      title="Guerra dos Reinos"
      subtitle="Wiki oficial do servidor Minecraft Java + Bedrock. Use as categorias abaixo para acessar regras, fases, batalhas, comandos, punições e skins."
    >
      <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Visão Geral</p>
        <h2 className="display-font mt-2 text-2xl text-slate-50 sm:text-3xl md:text-4xl">
          Competição por Equipes
        </h2>
        <p className="mt-4 max-w-4xl text-slate-200">
          O servidor é focado em cooperação, estratégia e guerra organizada por fases. Os reinos
          atuais são <strong className="text-red-300">Solaris (Vermelho)</strong> e{" "}
          <strong className="text-blue-300">Lunar (Azul)</strong>. O objetivo final é dominar as torres
          da arena até o tempo acabar.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
            <h3 className="font-semibold text-slate-100">Objetivo</h3>
            <p className="mt-2 text-sm text-slate-300">
              Capturar e manter o maior número de torres de controle durante as batalhas oficiais.
            </p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
            <h3 className="font-semibold text-slate-100">Temporada</h3>
            <p className="mt-2 text-sm text-slate-300">
              Até 2 batalhas por temporada. O reino com mais vitórias recebe o título de campeão.
            </p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
            <h3 className="font-semibold text-slate-100">Crossplay</h3>
            <p className="mt-2 text-sm text-slate-300">
              A estrutura foi atualizada para servidor Java + Bedrock, sem addons antigos.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="display-font text-2xl text-slate-50 sm:text-3xl md:text-4xl">Categorias</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {wikiNavItems
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 transition hover:border-sky-400 hover:bg-slate-900"
              >
                <p className="text-lg font-semibold text-slate-100">{item.label}</p>
                <p className="mt-1 text-sm text-slate-300">{item.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-sky-300">
                  Abrir categoria
                </p>
              </Link>
            ))}
        </div>
      </section>

      <section className="mt-8">
        <SkinGallery />
      </section>
    </WikiLayout>
  );
}
