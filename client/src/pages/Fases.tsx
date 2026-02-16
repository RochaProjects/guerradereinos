import WikiLayout from "@/components/WikiLayout";

export default function Fases() {
  return (
    <WikiLayout
      title="Fases do Jogo"
      subtitle="A temporada é dividida em três fases com objetivos diferentes. O progresso depende de disciplina do reino."
    >
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-emerald-500/35 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">Fase 1</p>
          <h2 className="display-font mt-2 text-xl text-slate-100 md:text-2xl">Preparação</h2>
          <p className="mt-3 text-slate-300">
            Organize equipe, estoque recursos e planeje o papel de cada jogador no reino.
          </p>
          <p className="mt-3 text-sm font-semibold text-emerald-200">PVP desativado</p>
        </article>

        <article className="rounded-xl border border-amber-500/35 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-300">Fase 2</p>
          <h2 className="display-font mt-2 text-xl text-slate-100 md:text-2xl">Muralhas</h2>
          <p className="mt-3 text-slate-300">
            Construa a muralha principal na área marcada. Priorize blocos comuns em tema medieval.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Blocos proibidos para muralha global: terra, pedregulho e madeiras.
          </p>
          <p className="mt-3 text-sm font-semibold text-amber-200">PVP desativado</p>
        </article>

        <article className="rounded-xl border border-rose-500/35 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-rose-300">Fase 3</p>
          <h2 className="display-font mt-2 text-xl text-slate-100 md:text-2xl">A Guerra</h2>
          <p className="mt-3 text-slate-300">
            Guerra com tempo definido: capture torres e mantenha mais torres dominadas que o adversário até o cronômetro acabar.
          </p>
          <p className="mt-3 text-sm font-semibold text-rose-200">PVP ativado</p>
        </article>
      </section>
    </WikiLayout>
  );
}
