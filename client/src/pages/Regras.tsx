import WikiLayout from "@/components/WikiLayout";

export default function Regras() {
  const artigos = [
    {
      numero: "Artigo 1",
      titulo: "Conduta e Fair Play",
      descricao:
        "Cheats, hacks, exploração de bugs, macro indevido e qualquer vantagem externa são proibidos.",
    },
    {
      numero: "Artigo 2",
      titulo: "Trocas Entre Reinos",
      descricao:
        "Trocas entre jogadores de reinos diferentes são proibidas. Exceção: troca com Streamer ao vivo, com gravação visível da negociação.",
    },
    {
      numero: "Artigo 3",
      titulo: "TPA Entre Reinos",
      descricao:
        "Não é permitido TPA entre reinos diferentes, mesmo com bloqueio automático já ativo.",
    },
    {
      numero: "Artigo 4",
      titulo: "Invasão e Distância no Overworld",
      descricao:
        "É proibido invadir reino inimigo. No Overworld, mantenha no mínimo 2.000 blocos de distância do reino ou jogador adversário.",
    },
    {
      numero: "Artigo 5",
      titulo: "Nether e The End",
      descricao:
        "Pode haver janelas de PVP livre no Nether e no The End. A staff não oferece suporte para ataques via Nether e é proibido acampar no spawn do portal de reino.",
    },
    {
      numero: "Artigo 6",
      titulo: "Aproximação Entre Times",
      descricao:
        "A aproximação entre jogadores de times diferentes é proibida fora dos momentos autorizados de confronto.",
    },
    {
      numero: "Artigo 7",
      titulo: "Regra de Elytra na Guerra",
      descricao:
        "Na guerra, é proibido usar elytra para pousar no topo da torre e quebrar entrada para invasão. Se ficar preso nessa tentativa, aceite a morte.",
    },
    {
      numero: "Artigo 8",
      titulo: "Comunicação e Provas",
      descricao:
        "Toda denúncia precisa de print ou vídeo com horário aproximado. Encaminhe no Discord para validação da staff.",
    },
  ];

  return (
    <WikiLayout
      title="Regras Inquebráveis"
      subtitle="Regras gerais do servidor e regras específicas de guerra. Todos os jogadores devem seguir estes artigos."
    >
      <section className="rounded-xl border border-slate-700 bg-slate-900/65 p-5">
        <h2 className="display-font text-xl text-slate-100 md:text-2xl">Regulamento Oficial</h2>
        <p className="mt-2 text-slate-300">
          Regras válidas para o modo atual Java + Bedrock. Algumas normas são globais do servidor e outras valem somente para guerra.
        </p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {artigos.map((artigo) => (
          <article key={artigo.numero} className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-sky-300">{artigo.numero}</p>
            <h3 className="display-font mt-2 text-lg text-slate-100 md:text-xl">{artigo.titulo}</h3>
            <p className="mt-2 text-slate-300">{artigo.descricao}</p>
          </article>
        ))}
      </section>
    </WikiLayout>
  );
}
