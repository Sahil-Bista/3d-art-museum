import { IconPhoto } from "@tabler/icons-react";

export function Placeholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-forest/10 via-teal/10 to-cta/10 border border-border/60 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <IconPhoto className="text-forest/50 mb-3" size={36} />
        <div className="text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2">
          Image
        </div>
        <div className="text-sm text-ink/70 max-w-sm">{label}</div>
      </div>
    </div>
  );
}
