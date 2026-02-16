import WikiLayout from "@/components/WikiLayout";

const cargos = [
  {
    nome: "Membro de Reino",
    status: "Ativo",
    descricao: "Jogador padrão vinculado a Solaris ou Lunar.",
  },
  {
    nome: "Sem Time",
    status: "Ativo",
    descricao: "Usa skin padrão até escolher ou receber um reino.",
  },
  {
    nome: "Invocador",
    status: "Em breve",
    descricao: "Cargo especial previsto para próximas temporadas.",
  },
  {
    nome: "Jogadores VIP",
    status: "Em breve",
    descricao: "Área VIP planejada para o wiki e para benefícios específicos.",
  },
  {
    nome: "Streamer",
    status: "Ativo",
    descricao: "Categoria para criadores ao vivo que participam da temporada.",
  },
  {
    nome: "YouTube",
    status: "Em breve",
    descricao: "Categoria para criadores de conteúdo em vídeo.",
  },
];

export default function TimesCargos() {
  return (
    <WikiLayout
      title="Times e Cargos"
      subtitle="Organização oficial dos reinos e das funções dos jogadores na temporada."
    >
      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-red-400/40 bg-slate-900/70 p-5">
          <h2 className="display-font text-xl text-red-200 md:text-2xl">Solaris</h2>
          <p className="mt-2 text-slate-300">Reino vermelho da temporada, com identidade desconhecida.</p>
        </article>
        <article className="rounded-xl border border-blue-400/40 bg-slate-900/70 p-5">
          <h2 className="display-font text-xl text-blue-200 md:text-2xl">Lunar</h2>
          <p className="mt-2 text-slate-300">Reino azul da temporada, com foco desconhecido.</p>
        </article>
      </section>

      <section className="mt-6 rounded-xl border border-slate-700 bg-slate-900/65 p-5">
        <h2 className="display-font text-xl text-slate-100 md:text-2xl">Cargos da Comunidade</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {cargos.map((cargo) => (
            <article key={cargo.nome} className="rounded-lg border border-slate-700 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-100">{cargo.nome}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    cargo.status === "Ativo"
                      ? "bg-emerald-500/20 text-emerald-200"
                      : "bg-amber-500/20 text-amber-200"
                  }`}
                >
                  {cargo.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{cargo.descricao}</p>
            </article>
          ))}
        </div>
      </section>
    </WikiLayout>
  );
}
