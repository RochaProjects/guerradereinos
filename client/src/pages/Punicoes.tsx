import WikiLayout from "@/components/WikiLayout";

export default function Punicoes() {
  return (
    <WikiLayout
      title="Punições e Disciplina"
      subtitle="Sistema progressivo para manter equilíbrio competitivo e ambiente saudável entre os reinos."
    >
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">1º estágio</p>
          <h2 className="display-font mt-2 text-xl text-slate-100 md:text-2xl">Advertência</h2>
          <p className="mt-3 text-slate-300">Primeiro registro de infração. Conta como uma das 3 chances.</p>
        </article>

        <article className="rounded-xl border border-amber-500/40 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-300">2º estágio</p>
          <h2 className="display-font mt-2 text-xl text-slate-100 md:text-2xl">Ban Temporário</h2>
          <p className="mt-3 text-slate-300">
            Suspensão por período definido, conforme gravidade e reincidência.
          </p>
        </article>

        <article className="rounded-xl border border-rose-500/40 bg-slate-900/70 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-rose-300">3º estágio</p>
          <h2 className="display-font mt-2 text-xl text-slate-100 md:text-2xl">Ban Permanente</h2>
          <p className="mt-3 text-slate-300">
            Remoção definitiva em caso de reincidência grave ou quebra crítica das regras.
          </p>
        </article>
      </section>

      <section className="mt-6 rounded-xl border border-slate-700 bg-slate-900/60 p-5">
        <h2 className="display-font text-xl text-slate-100 md:text-2xl">Canal de Suporte</h2>
        <p className="mt-3 text-slate-300">
          Se precisar de revisão de punição ou report, fale com a administração no Discord e envie
          provas claras (print/vídeo + horário).
        </p>
      </section>
    </WikiLayout>
  );
}
