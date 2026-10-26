// Static grid and soft glows behind the page. Pure CSS, so it costs
// almost nothing to render (it replaces the old animated shimmer layer).
export const BackgroundDecor = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0" />
      <div
        className="absolute -top-64 left-1/2 h-[42rem] w-[70rem] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary) / 0.16), transparent)",
        }}
      />
      <div
        className="absolute top-1/3 -right-48 h-[32rem] w-[32rem]"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--accent) / 0.09), transparent)",
        }}
      />
    </div>
  );
};
