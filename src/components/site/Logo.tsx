import logo from "@/assets/logo.jpg";

export function Logo({
  light = false,
  size = "nav",
}: {
  light?: boolean;
  size?: "nav" | "footer";
}) {
  const dim = size === "footer" ? "h-12 w-12" : "h-14 w-14";
  return (
    <div className="flex items-center gap-3">
      <div
        className={`${dim} rounded-full overflow-hidden bg-white border border-border flex items-center justify-center shadow-sm`}
      >
        <img src={logo} alt="Artsala Nepal Pvt. Ltd" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-display text-base ${light ? "text-teal-soft" : "text-ink"}`}>
          3D Art Museum
        </span>
        <span
          className={`text-[11px] tracking-wide ${light ? "text-teal-soft/80" : "text-muted-foreground"}`}
        >
          Tikathali, Lalitpur
        </span>
      </div>
    </div>
  );
}
