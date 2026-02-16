import WikiLayout from "@/components/WikiLayout";

export default function Batalhas() {
  return (
    <WikiLayout
      title="Como Vencer as Batalhas"
      subtitle="A guerra ocorre por tempo definido. O foco é dominar torres e terminar com mais torres controladas que o adversário."
    >
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
          <h2 className="display-font text-xl text-slate-100 md:text-2xl">Tempo de Guerra</h2>
          <p className="mt-2 text-slate-300">
            A staff define um tempo oficial para a partida. Durante esse período, cada reino escolhe atacar ou proteger.
          </p>
        </article>

        <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
          <h2 className="display-font text-xl text-slate-100 md:text-2xl">Captura de Torres</h2>
          <p className="mt-2 text-slate-300">
            O objetivo é capturar torres de controle e manter domínio nelas enquanto o cronômetro roda.
          </p>
        </article>

        <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
          <h2 className="display-font text-xl text-slate-100 md:text-2xl">Vitória</h2>
          <p className="mt-2 text-slate-300">
            Quando o tempo acaba, vence quem estiver com mais torres em dominação. Esse reino é o campeão da batalha.
          </p>
        </article>
      </section>

      <section className="mt-6 rounded-xl border border-slate-700 bg-slate-900/60 p-5">
        <h2 className="display-font text-xl text-slate-100 md:text-2xl">Estratégia Recomendada</h2>
        <p className="mt-3 text-slate-300">
          Divida o time entre frente de ataque, defesa de torres e resposta rápida. Coordenação no Discord evita perder domínio nos minutos finais.
        </p>
      </section>
    </WikiLayout>
  );
}
