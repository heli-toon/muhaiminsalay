import { useEffect, useMemo, useState } from "react";
import { collection, deleteDoc, doc, getDocs, query, orderBy, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import Preloader from "../components/Preloader";


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

const MODEL_KEYS: PromptModel[] = [
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
];

const MODEL_ICONS: Record<PromptModel, string> = {
  All: "bi bi-diagram-3",
  ChatGPT: "bi bi-chat-dots",
  Claude: "bi bi-chat-right-text",
  Deepseek: "bi bi-cpu",
  Gemini: "bi bi-stars",
  Meta: "bi bi-diagram-2",
  Kimi: "bi bi-robot",
  GLM: "bi bi-diagram-3",
  Zai: "bi bi-bolt",
  minimax: "bi bi-collection",
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

function PromptAdminInner() {
  const { logout } = useAuth() as { logout: () => Promise<void> };

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [prompts, setPrompts] = useState<PromptDoc[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [promptText, setPromptText] = useState("");
  const [description, setDescription] = useState("");
  const [selectedModels, setSelectedModels] = useState<PromptModel[]>(["All"]);

  useEffect(() => {
    document.title = "Muhaimin Salay | Prompts Admin";
  }, []);

  const fetchPrompts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "prompts"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const data: PromptDoc[] = snap.docs.map((d) => {
        const raw = d.data() as any;
        return {
          id: d.id,
          title: raw.title ?? "Untitled",
          promptText: raw.promptText ?? raw.prompt ?? "",
          description: raw.description ?? "",
          models: safeModels(raw.models ?? raw.model ?? raw.supportedModels),
        };
      });
      setPrompts(data);
    } catch (e) {
      console.error("Failed to fetch prompts", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  const toggleModel = (m: PromptModel) => {
    setSelectedModels((prev) => {
      if (m === "All") {
        return ["All"];
      }

      const withoutAll = prev.filter((x) => x !== "All");
      const exists = withoutAll.includes(m);
      const next = exists ? withoutAll.filter((x) => x !== m) : [...withoutAll, m];
      return next.length ? next : ["All"];
    });
  };

  const startEdit = (p: PromptDoc) => {
    setEditingId(p.id);
    setTitle(p.title ?? "");
    setPromptText(p.promptText ?? "");
    setDescription(p.description ?? "");
    setSelectedModels(p.models?.length ? p.models : ["All"]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setPromptText("");
    setDescription("");
    setSelectedModels(["All"]);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        title: title.trim() || "Untitled",
        promptText,
        description: description.trim() || "",
        models: selectedModels,
        updatedAt: new Date(),
      };

      if (editingId) {
        await updateDoc(doc(db, "prompts", editingId), payload);
        alert("Prompt updated!");
      } else {
        await addDoc(collection(db, "prompts"), {
          ...payload,
          createdAt: new Date(),
        });
        alert("Prompt added!");
      }

      resetForm();
      await fetchPrompts();
    } catch (e) {
      console.error(e);
      alert("Failed to save prompt");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this prompt?")) return;
    try {
      await deleteDoc(doc(db, "prompts", id));
      alert("Prompt deleted");
      await fetchPrompts();
      if (editingId === id) resetForm();
    } catch (e) {
      console.error(e);
      alert("Failed to delete prompt");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "/login";
    } catch (e) {
      console.error(e);
      alert("Failed to log out");
    }
  };

  const selectedModelsLabel = useMemo(() => {
    if (!selectedModels.length) return "All";
    return selectedModels.join(", ");
  }, [selectedModels]);

  if (loading) return <Preloader />;

  return (
    <section className="bg-gray-900/40 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Prompts Admin</h1>
            <p className="text-gray-400">Add, edit, and delete prompts.</p>
          </div>
          <button
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition-colors hover:cursor-pointer"
            onClick={handleLogout}
          >
            <i className="bi bi-door-open-fill" /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 bg-gray-950/95 border-gray-900 border rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {editingId ? "Edit Prompt" : "Add New Prompt"}
            </h2>

            <form onSubmit={handleSave} className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Prompt</label>
                <textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  className="w-full min-h-[180px] rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Description (optional)</label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-md bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f6700d]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <label className="block text-sm font-medium text-gray-300">Supported Models</label>
                  <span className="text-xs text-gray-400">{selectedModelsLabel}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {MODEL_KEYS.map((m) => {
                    const active = selectedModels.includes(m);
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => toggleModel(m)}
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all duration-300 border ${
                          active
                            ? "bg-[#f6700d] text-white border-[#f6700d]"
                            : "bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        <i className={`text-base ${MODEL_ICONS[m]}`} />
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#f6700d] hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-md transition-colors hover:cursor-pointer disabled:opacity-60"
                >
                  <i className={`bi ${editingId ? "bi-pencil" : "bi-plus-circle-fill"}`} />
                  {saving ? "Saving..." : editingId ? "Update Prompt" : "Add Prompt"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-5 py-2.5 rounded-md transition-colors hover:cursor-pointer"
                  disabled={saving}
                >
                  <i className="bi bi-x-lg" /> Clear
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">Existing Prompts</h2>
              <div className="text-xs text-gray-400">{prompts.length} total</div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {prompts.map((p) => (
                <div
                  key={p.id}
                  className="bg-gray-950/95 border-gray-900 border rounded-lg p-4 hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{p.title}</h3>
                      {p.description ? <p className="text-gray-400 text-sm mb-2">{p.description}</p> : null}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.models
                          .filter((m) => m !== "All")
                          .slice(0, 5)
                          .map((m) => (
                            <span
                              key={m}
                              className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                            >
                              <i className={`text-[0.9rem] ${MODEL_ICONS[m]}`} />
                              {m}
                            </span>
                          ))}
                        {p.models.includes("All") ? (
                          <span className="inline-flex items-center gap-2 bg-[#f6700d]/20 text-[#f6700d] text-xs px-3 py-1 rounded-full">
                            <i className={`text-[0.9rem] ${MODEL_ICONS.All}`} /> All
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(p)}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded-md transition-colors hover:cursor-pointer"
                      >
                        <i className="bi bi-pencil" /> Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(p.id)}
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-2 rounded-md transition-colors hover:cursor-pointer"
                      >
                        <i className="bi bi-trash" /> Delete
                      </button>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap text-gray-200 text-sm leading-relaxed bg-black/20 border border-gray-800 rounded-md p-3 max-h-40 overflow-auto">
                    {p.promptText}
                  </pre>
                </div>
              ))}

              {!prompts.length ? (
                <div className="text-center text-gray-300 py-14">No prompts yet.</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PromptAdmin() {
  // This component is expected to be wrapped in <PrivateRoute> by the router.
  // Keeping this wrapper simple and compatible with existing auth logic.
  return <PromptAdminInner />;
}

