import WikiLayout from "@/components/WikiLayout";
import { useState } from "react";

const JAVA_SERVER = "reinosemconflito.duckdns.org:11615";
const BEDROCK_HOST = "reinosemconflito.duckdns.org";
const BEDROCK_PORT = "11615";
const REALM_LINK = "https://realms.gg/oE4rg84i23JFisc";
const DISCORD_LINK = "https://discord.gg/Qks6haQFZg";

type FeedbackMap = Record<string, string>;

export default function ServerIp() {
  const [feedback, setFeedback] = useState<FeedbackMap>({});

  const setTemporaryFeedback = (key: string, value: string) => {
    setFeedback((prev) => ({ ...prev, [key]: value }));
    window.setTimeout(() => {
      setFeedback((prev) => ({ ...prev, [key]: "" }));
    }, 2200);
  };

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setTemporaryFeedback(key, "Copiado com sucesso.");
    } catch {
      setTemporaryFeedback(key, "Nao foi possivel copiar.");
    }
  };

  const connectBedrockDirect = () => {
    window.location.href = `minecraft://server/${BEDROCK_HOST}:${BEDROCK_PORT}`;
  };

  return (
    <WikiLayout
      title="Server IP e Conexao"
      subtitle="Entre no servidor pela Java, Bedrock ou pelo metodo alternativo via Realm para console."
    >
      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-violet-400/35 bg-slate-900/75 p-5">
          <h2 className="display-font text-xl text-violet-100 md:text-2xl">Java Edition</h2>
          <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Endereco IP</p>
            <p className="mt-1 break-all text-base text-slate-100">{JAVA_SERVER}</p>
          </div>
          <div className="mt-4 space-y-2">
            <button
              type="button"
              onClick={() => copyToClipboard(JAVA_SERVER, "java")}
              className="w-full rounded-lg border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
            >
              Copiar IP Java
            </button>
            <p className="min-h-6 text-sm text-emerald-300">{feedback.java || ""}</p>
          </div>
        </article>

        <article className="rounded-xl border border-sky-400/35 bg-slate-900/75 p-5">
          <h2 className="display-font text-xl text-sky-100 md:text-2xl">Bedrock Edition</h2>
          <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Endereco</p>
            <p className="mt-1 break-all text-base text-slate-100">{BEDROCK_HOST}</p>
          </div>
          <div className="mt-3 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Porta</p>
            <p className="mt-1 text-base text-slate-100">{BEDROCK_PORT}</p>
          </div>
          <div className="mt-4 space-y-2">
            <button
              type="button"
              onClick={connectBedrockDirect}
              className="w-full rounded-lg border border-sky-400/40 bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/25"
            >
              Conectar Direto
            </button>
            <button
              type="button"
              onClick={() => copyToClipboard(`${BEDROCK_HOST}:${BEDROCK_PORT}`, "bedrock")}
              className="w-full rounded-lg border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
            >
              Copiar IP Bedrock
            </button>
            <p className="min-h-6 text-sm text-emerald-300">{feedback.bedrock || ""}</p>
          </div>
        </article>

        <article className="rounded-xl border border-amber-400/35 bg-slate-900/75 p-5">
          <h2 className="display-font text-xl text-amber-100 md:text-2xl">Bedrock Realm</h2>
          <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Metodo Alternativo (Console)</p>
            <p className="mt-1 text-base text-slate-100">
              Ideal para PS5, PS4, Xbox e Switch. Entre no Realm e use o bot/addon no lobby para ir ao servidor principal.
            </p>
          </div>
          <div className="mt-3 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Link do Realm</p>
            <p className="mt-1 break-all text-base text-slate-100">{REALM_LINK}</p>
          </div>

          <div className="mt-3 rounded-lg border border-slate-700 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Passo a passo</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-300">
              <li>Entre no link do Realm.</li>
              <li>Aguarde carregar no lobby fixo.</li>
              <li>Localize o bot na frente do spawn.</li>
              <li>Clique no bot para entrar no servidor principal.</li>
            </ol>
          </div>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              onClick={() => window.open(REALM_LINK, "_blank", "noopener,noreferrer")}
              className="w-full rounded-lg border border-amber-400/40 bg-amber-500/15 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/25"
            >
              Abrir Realm
            </button>
            <button
              type="button"
              onClick={() => copyToClipboard(REALM_LINK, "realm")}
              className="w-full rounded-lg border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
            >
              Copiar Link do Realm
            </button>
            <p className="min-h-6 text-sm text-emerald-300">{feedback.realm || ""}</p>
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-xl border border-indigo-400/35 bg-indigo-500/10 p-5">
        <h2 className="display-font text-xl text-indigo-100 md:text-2xl">Discord Oficial</h2>
        <p className="mt-2 text-slate-200">
          Se precisar de ajuda para conectar, suporte de console ou duvidas de IP/porta, entre no Discord.
        </p>
        <button
          type="button"
          onClick={() => window.open(DISCORD_LINK, "_blank", "noopener,noreferrer")}
          className="mt-4 rounded-lg border border-indigo-400/40 bg-indigo-500/20 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-500/30"
        >
          Entrar no Discord
        </button>
      </section>
    </WikiLayout>
  );
}
