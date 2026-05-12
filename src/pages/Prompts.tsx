import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../lib/firebase";

type PromptModel =
  | "All"
  | "ChatGPT"
  | "Claude"
  | "Deepseek"
  | "Gemini"
  | "Meta"
  | "Kimi"
  | "GLM"
  | "Zai"
  | "minimax";

type PromptDoc = {
  id: string;
  title: string;
  promptText: string;
  description?: string;
  models: PromptModel[];
};

const toSafeText = (value: unknown, fallback = ""): string => {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return fallback;
};

const MODEL_ICONS: Record<PromptModel, { label: string; icon: string }> = {
  All: { label: "All", icon: "bi bi-diagram-3" },
  ChatGPT: { label: "ChatGPT", icon: "bi bi-chat-dots" },
  Claude: { label: "Claude", icon: "bi bi-chat-right-text" },
  Deepseek: { label: "Deepseek", icon: "bi bi-cpu" },
  Gemini: { label: "Gemini", icon: "bi bi-stars" },
  Meta: { label: "Meta", icon: "bi bi-diagram-2" },
  Kimi: { label: "Kimi", icon: "bi bi-robot" },
  GLM: { label: "GLM", icon: "bi bi-diagram-3" },
  Zai: { label: "Zai", icon: "bi bi-bolt" },
  minimax: { label: "minimax", icon: "bi bi-collection" },
};

const normalizeModel = (value: string): PromptModel | null => {
  const v = value.trim();
  const lower = v.toLowerCase();

  if (v === "All") return "All";
  if (v === "ChatGPT") return "ChatGPT";
  if (v === "Claude") return "Claude";
  if (v === "Deepseek") return "Deepseek";
  if (v === "Gemini") return "Gemini";
  if (v === "Meta") return "Meta";
  if (v === "Kimi") return "Kimi";
  if (v === "GLM") return "GLM";
  if (v === "Zai") return "Zai";
  if (v === "minimax") return "minimax";

  if (lower === "chatgpt") return "ChatGPT";
  if (lower === "claude") return "Claude";
  if (lower === "deepseek") return "Deepseek";
  if (lower === "gemini") return "Gemini";
  if (lower === "meta") return "Meta";
  if (lower === "kimi") return "Kimi";
  if (lower === "glm") return "GLM";
  if (lower === "zai") return "Zai";
  if (lower === "minimax") return "minimax";

  return null;
};

const safeModels = (models: unknown): PromptModel[] => {
  if (!Array.isArray(models)) return ["All"];
  const mapped: PromptModel[] = [];
  for (const m of models) {
    if (typeof m !== "string") continue;
    const nm = normalizeModel(m);
    if (nm) mapped.push(nm);
  }

  return mapped.length ? mapped : ["All"];
};

export default function Prompts() {
  const [loading, setLoading] = useState(true);
  const [prompts, setPrompts] = useState<PromptDoc[]>([]);
  const [selectedModel, setSelectedModel] = useState<PromptModel>("All");
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);



  useEffect(() => {
    document.title = "Muhaimin Salay | Prompts";
  }, []);

  useEffect(() => {
    const fetchPrompts = async () => {
      setLoading(true);
      setError(null);
      try {
        const snap = await getDocs(collection(db, "prompts"));


        const data: PromptDoc[] = snap.docs.map((d) => {
          const raw = d.data() as any;
          const promptText = toSafeText(raw.promptText ?? raw.prompt, "");
          const models = safeModels(raw.models ?? raw.model ?? raw.supportedModels);
          return {
            id: d.id,
            title: toSafeText(raw.title, "Untitled"),
            promptText,
            description: toSafeText(raw.description, ""),
            models,
          };
        });

        setPrompts(data);
      } catch (e: any) {
        console.error("Failed to fetch prompts", e);
        setError(e?.message ? String(e.message) : "Failed to fetch prompts");
        setPrompts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  const models = useMemo<PromptModel[]>(
    () => [
      "All",
      "ChatGPT",
      "Claude",
      "Deepseek",
      "Gemini",
      "Meta",
      "Kimi",
      "GLM",
      "Zai",
      "minimax",
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return prompts.filter((p) => {
      const modelOk =
        selectedModel === "All" ? true : p.models.includes(selectedModel) || p.models.includes("All");

      const text = `${p.title} ${p.description ?? ""} ${p.promptText}`.toLowerCase();
      const qOk = !q || text.includes(q);

      return modelOk && qOk;
    });
  }, [prompts, query, selectedModel]);

  const visiblePrompts = useMemo(
    () => (filtered.length === 0 && prompts.length > 0 ? prompts : filtered),
    [filtered, prompts]
  );

  const copyToClipboard = async (text: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(promptId);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedId(promptId);
    }
  };

  useEffect(() => {
    if (!copiedId) return;
    const timeout = setTimeout(() => setCopiedId(null), 1500);
    return () => clearTimeout(timeout);
  }, [copiedId]);

  return (
    <section className="bg-gray-900/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Prompts</h1>
          <p className="text-gray-400 text-lg">Browse and copy prompts for your favorite AI models.</p>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-xl">
              <div className="flex gap-3">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, description, or prompt text..."
                  className="flex-1 rounded-md bg-gray-950/60 border border-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                />
                <Link
                  to="/prompts/admin"
                  className="whitespace-nowrap inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition-colors hover:cursor-pointer"
                >
                  <i className="bi bi-shield-lock" /> Admin
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {models.map((m) => {
              const active = selectedModel === m;
              const icon = MODEL_ICONS[m]?.icon ?? "bi bi-circle";
              const label = MODEL_ICONS[m]?.label ?? m;

              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelectedModel(m)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                    active
                      ? "bg-[#f6700d] text-white border-[#f6700d]"
                      : "bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <i className={`text-base ${icon}`} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="inline-flex items-center gap-3 rounded-md border border-gray-800 bg-gray-950/70 px-4 py-3 text-gray-300">
              <i className="bi bi-arrow-repeat animate-spin" />
              <span>Loading prompts...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-10">
            <div className="text-xl font-semibold mb-2">Failed to load prompts</div>
            <div className="text-sm opacity-90 whitespace-pre-wrap">{error}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiblePrompts.map((p) => (
              <article
                key={p.id}
                className="bg-gray-950 border border-gray-800 rounded-lg p-5 hover:border-orange-500 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">{p.title}</h2>
                    {p.description ? (
                      <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                    ) : (
                      <div className="h-[18px] mb-4" />
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.models
                        .filter((m) => m !== "All")
                        .slice(0, 6)
                        .map((m) => (
                          <span
                            key={m}
                            className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                          >
                            <i className={`text-[0.9rem] ${MODEL_ICONS[m]?.icon ?? "bi bi-circle"}`} />
                            {MODEL_ICONS[m]?.label ?? m}
                          </span>
                        ))}

                      {p.models.includes("All") && (
                        <span className="inline-flex items-center gap-2 bg-[#f6700d]/20 text-[#f6700d] text-xs px-3 py-1 rounded-full">
                          <i className={`text-[0.9rem] ${MODEL_ICONS.All.icon}`} /> All
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(p.promptText, p.id)}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded-md transition-colors hover:cursor-pointer"
                    >
                      <i className="bi bi-clipboard" /> Copy
                    </button>
                    {copiedId === p.id && (
                      <div className="absolute -top-10 right-0 whitespace-nowrap rounded-md border border-gray-700 bg-gray-900 px-3 py-1 text-xs text-white shadow-lg">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>

                <pre className="mt-4 whitespace-pre-wrap text-gray-100 text-sm leading-relaxed bg-black/30 border border-gray-700 rounded-md p-3 max-h-64 overflow-auto">
                  {p.promptText}
                </pre>
              </article>
            ))}

            {!visiblePrompts.length && (
              <div className="md:col-span-2 text-center text-gray-300 py-14">No prompts found.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

