import WikiLayout from "@/components/WikiLayout";

const commandGroups = [
  {
    title: "Pedidos de Teleporte",
    commands: ["/tpa <jogador>", "/tpaccept [jogador]", "/tpdeny [jogador]", "/aceitar [jogador]", "/negar [jogador]"],
    description:
      "Se houver apenas um pedido pendente, /aceitar ou /negar já funciona sem nome. Entre reinos diferentes, TPA continua proibido.",
  },
  {
    title: "Retorno e Kit",
    commands: ["/back", "/kit"],
    description:
      "Use /back para retorno quando disponível. /kit não é recomendado com inventário cheio para evitar perda de itens.",
  },
  {
    title: "Warps Oficiais",
    commands: ["/warp azul", "/warp vermelho", "/warp lobby"],
    description: "Movimentação rápida para bases e área central.",
  },
];

export default function Comandos() {
  return (
    <WikiLayout
      title="Comandos do Servidor"
      subtitle="Guia de comandos ativos no servidor Java + Bedrock."
    >
      <section className="rounded-xl border border-amber-500/35 bg-amber-500/10 p-5">
        <h2 className="display-font text-xl text-amber-100 md:text-2xl">Observações</h2>
        <p className="mt-2 text-amber-50/90">
          Este wiki já está no modelo novo do servidor. Em caso de dúvida, siga sempre as regras de guerra e de distância entre reinos.
        </p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {commandGroups.map((group) => (
          <article key={group.title} className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
            <h2 className="display-font text-xl text-slate-100 md:text-2xl">{group.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{group.description}</p>
            <div className="mt-4 space-y-2">
              {group.commands.map((command) => (
                <code
                  key={command}
                  className="block rounded bg-slate-950 px-3 py-2 text-sm text-sky-200"
                >
                  {command}
                </code>
              ))}
            </div>
          </article>
        ))}
      </section>
    </WikiLayout>
  );
}
