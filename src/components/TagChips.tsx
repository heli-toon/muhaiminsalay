type Props = {
  tags?: string[] | null;
  className?: string;
};

export default function TagChips({ tags, className = "" }: Props) {
  const list = Array.isArray(tags) ? tags.filter(Boolean) : [];
  if (!list.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {list.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center px-2.5 py-1 rounded-full border border-orange-500/50 text-orange-400 bg-orange-500/5 text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
