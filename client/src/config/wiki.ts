export type WikiNavItem = {
  href: string;
  label: string;
  summary: string;
};

export const wikiNavItems: WikiNavItem[] = [
  {
    href: "/",
    label: "Início",
    summary: "Visão geral do servidor Java + Bedrock",
  },
  {
    href: "/regras",
    label: "Regras",
    summary: "Regras inquebráveis e conduta",
  },
  {
    href: "/fases",
    label: "Fases",
    summary: "Preparação, muralhas e guerra",
  },
  {
    href: "/batalhas",
    label: "Batalhas",
    summary: "Como capturar torres e vencer",
  },
  {
    href: "/comandos",
    label: "Comandos",
    summary: "Ferramentas úteis sem addons",
  },
  {
    href: "/punicoes",
    label: "Punições",
    summary: "Sistema progressivo de disciplina",
  },
  {
    href: "/times-cargos",
    label: "Times e Cargos",
    summary: "Reinos, cargos e skins futuras",
  },
  {
    href: "/loja",
    label: "Loja",
    summary: "Kits e compra via Discord",
  },
  {
    href: "/server-ip",
    label: "Server IP",
    summary: "IP, porta e Realm para console",
  },
  {
    href: "/skins",
    label: "Skins",
    summary: "Skins oficiais dos reinos",
  },
];
