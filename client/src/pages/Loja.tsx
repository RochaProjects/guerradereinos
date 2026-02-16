import WikiLayout from "@/components/WikiLayout";
import { useMemo, useState } from "react";

type Enchant = {
  nome: string;
  nivel: string;
};

type StoreItem = {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  encantamentos: Enchant[];
};

type Kit = {
  id: string;
  nome: string;
  preco: string;
  icone: string;
  discordUrl: string;
  itens: string[];
};

const BASE_URL = import.meta.env.BASE_URL;
const DISCORD_LOJA_URL = "https://discord.com/channels/1467346816403243233/1467562728108458140";
const BOOK_ICON = `${BASE_URL}store/Enchanted_Book.png`;

const storeItems: StoreItem[] = [
  {
    id: "espadadima",
    nome: "Espada de Diamante",
    descricao: "Espada focada em combate direto e defesa de torre.",
    imagem: `${BASE_URL}store/espadadima.webp`,
    encantamentos: [
      { nome: "Afiação", nivel: "V" },
      { nome: "Pilhagem", nivel: "III" },
      { nome: "Aspecto de Fogo", nivel: "II" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "picaretadima",
    nome: "Picareta de Diamante",
    descricao: "Ferramenta para mineração e preparo de defesa.",
    imagem: `${BASE_URL}store/picaretadima.webp`,
    encantamentos: [
      { nome: "Eficiência Instantânea", nivel: "∞" },
      { nome: "Fortune", nivel: "III" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "machadodima",
    nome: "Machado de Diamante",
    descricao: "Ferramenta para coleta e utilidade de base.",
    imagem: `${BASE_URL}store/machadodima.webp`,
    encantamentos: [
      { nome: "Eficiência Instantânea", nivel: "∞" },
      { nome: "Fortune", nivel: "III" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "padima",
    nome: "Pá de Diamante",
    descricao: "Escavação rápida para construção e mobilidade.",
    imagem: `${BASE_URL}store/padima.webp`,
    encantamentos: [
      { nome: "Eficiência Instantânea", nivel: "∞" },
      { nome: "Fortune", nivel: "III" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "espadadima_soberano",
    nome: "Espada de Diamante",
    descricao: "Versão soberana com pilhagem máxima.",
    imagem: `${BASE_URL}store/espadadima.webp`,
    encantamentos: [
      { nome: "Afiação", nivel: "V" },
      { nome: "Pilhagem", nivel: "V" },
      { nome: "Aspecto de Fogo", nivel: "II" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "picaretadima_soberano",
    nome: "Picareta de Diamante",
    descricao: "Versão soberana com Fortune maximizado.",
    imagem: `${BASE_URL}store/picaretadima.webp`,
    encantamentos: [
      { nome: "Eficiência Instantânea", nivel: "∞" },
      { nome: "Fortune", nivel: "V" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "machadodima_soberano",
    nome: "Machado de Diamante",
    descricao: "Versão soberana com Fortune maximizado.",
    imagem: `${BASE_URL}store/machadodima.webp`,
    encantamentos: [
      { nome: "Eficiência Instantânea", nivel: "∞" },
      { nome: "Fortune", nivel: "V" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "padima_soberano",
    nome: "Pá de Diamante",
    descricao: "Versão soberana com Fortune maximizado.",
    imagem: `${BASE_URL}store/padima.webp`,
    encantamentos: [
      { nome: "Eficiência Instantânea", nivel: "∞" },
      { nome: "Fortune", nivel: "V" },
      { nome: "Indestrutível", nivel: "∞" },
    ],
  },
  {
    id: "helmet_soberano",
    nome: "Capacete de Diamante",
    descricao: "Peça de armadura para completar o kit soberano.",
    imagem: `${BASE_URL}store/Diamond_Helmet.png`,
    encantamentos: [],
  },
  {
    id: "chestplate_soberano",
    nome: "Peitoral de Diamante",
    descricao: "Peça de armadura para completar o kit soberano.",
    imagem: `${BASE_URL}store/Diamond_Chestplate.png`,
    encantamentos: [],
  },
  {
    id: "leggings_soberano",
    nome: "Calça de Diamante",
    descricao: "Peça de armadura para completar o kit soberano.",
    imagem: `${BASE_URL}store/Diamond_Leggings.png`,
    encantamentos: [],
  },
  {
    id: "boots_soberano",
    nome: "Botas de Diamante",
    descricao: "Peça de armadura para completar o kit soberano.",
    imagem: `${BASE_URL}store/Diamond_Boots.png`,
    encantamentos: [],
  },
];

const kits: Kit[] = [
  {
    id: "essencia",
    nome: "Kit Magna Essência",
    preco: "R$1,00",
    icone: `${BASE_URL}store/Magma_Cube.png`,
    discordUrl: DISCORD_LOJA_URL,
    itens: ["espadadima", "picaretadima", "machadodima", "padima"],
  },
  {
    id: "soberano",
    nome: "Kit Magna Soberano",
    preco: "R$2,00",
    icone: `${BASE_URL}store/Magma_Cube_SUPER.png`,
    discordUrl: DISCORD_LOJA_URL,
    itens: [
      "espadadima_soberano",
      "picaretadima_soberano",
      "machadodima_soberano",
      "padima_soberano",
      "helmet_soberano",
      "chestplate_soberano",
      "leggings_soberano",
      "boots_soberano",
    ],
  },
];

export default function Loja() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedKitId, setSelectedKitId] = useState<string | null>(null);

  const itemMap = useMemo(
    () => new Map(storeItems.map((item) => [item.id, item])),
    [],
  );
  const kitMap = useMemo(() => new Map(kits.map((kit) => [kit.id, kit])), []);

  const selectedItem = selectedItemId ? itemMap.get(selectedItemId) : undefined;
  const selectedKit = selectedKitId ? kitMap.get(selectedKitId) : undefined;

  const closeModal = () => {
    setSelectedItemId(null);
    setSelectedKitId(null);
  };

  return (
    <WikiLayout
      title="Loja do Servidor"
      subtitle="Kits de apoio para temporada. As compras são finalizadas no Discord com a equipe de administração."
    >
      <section className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
        <h2 className="display-font text-xl text-amber-100 md:text-2xl">Compras via Discord</h2>
        <p className="mt-2 text-amber-50/90">
          Ao clicar em comprar, você será enviado para o canal oficial de loja para finalizar com um administrador.
        </p>
      </section>

      <section className="mt-6 grid gap-5">
        {kits.map((kit) => (
          <article key={kit.id} className="rounded-2xl border border-slate-700 bg-slate-900/75 p-5">
            <div className="flex flex-col gap-4 border-b border-slate-700 pb-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <img src={kit.icone} alt={kit.nome} className="h-14 w-14 rounded-lg object-contain bg-slate-950/70 p-1" />
                <div>
                  <h3 className="display-font text-lg text-slate-100 md:text-xl">{kit.nome}</h3>
                  <p className="text-sm text-slate-300">Itens do kit com detalhes de encantamento</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                  {kit.preco}
                </span>
                <a
                  href={kit.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-sky-400/40 bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/25"
                >
                  Comprar no Discord
                </a>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {kit.itens.map((itemId) => {
                const item = itemMap.get(itemId);
                if (!item) {
                  return null;
                }

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedItemId(item.id);
                      setSelectedKitId(kit.id);
                    }}
                    className="rounded-xl border border-slate-700 bg-slate-950/75 p-3 text-left transition hover:border-sky-400/60 hover:bg-slate-900"
                  >
                    <img src={item.imagem} alt={item.nome} className="h-20 w-full rounded object-contain bg-slate-900/80 p-2" />
                    <p className="mt-2 text-sm font-semibold text-slate-100">{item.nome}</p>
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </section>

      {selectedItem && selectedKit ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4" onClick={closeModal}>
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-sky-300">{selectedKit.nome}</p>
                <h3 className="display-font mt-1 text-lg text-slate-100 md:text-xl">{selectedItem.nome}</h3>
                <p className="mt-2 text-sm text-slate-300">{selectedItem.descricao}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md border border-slate-600 px-2 py-1 text-xs text-slate-200 hover:border-slate-400"
              >
                Fechar
              </button>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[160px_1fr]">
              <img src={selectedItem.imagem} alt={selectedItem.nome} className="h-36 w-full rounded-lg bg-slate-950/80 object-contain p-2" />
              <div>
                <p className="text-sm font-semibold text-emerald-200">Preço do kit: {selectedKit.preco}</p>
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Encantamentos</p>
                  {selectedItem.encantamentos.length > 0 ? (
                    <ul className="mt-2 space-y-2">
                      {selectedItem.encantamentos.map((encantamento) => (
                        <li key={`${selectedItem.id}-${encantamento.nome}-${encantamento.nivel}`} className="flex items-center gap-2 rounded bg-slate-950/75 px-3 py-2">
                          <img src={BOOK_ICON} alt="" className="h-5 w-5 object-contain" />
                          <span className="text-sm text-slate-100">{encantamento.nome}</span>
                          <span className="ml-auto rounded bg-sky-500/20 px-2 py-0.5 text-xs font-semibold text-sky-100">
                            {encantamento.nivel}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-slate-300">Sem encantamentos extras.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </WikiLayout>
  );
}
