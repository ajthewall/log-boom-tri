export default function StickyNav() {
  const links = [
    { href: "#schedule", label: "Schedule" },
    { href: "#swim", label: "Swim" },
    { href: "#bike", label: "Bike" },
    { href: "#run", label: "Run" },
    { href: "#finish", label: "Finish" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-race-dark/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between gap-4">
        <span className="font-display font-bold text-sm uppercase tracking-widest text-race-light whitespace-nowrap">
          Solstice Log Boom Tri
        </span>
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded text-xs font-display font-bold uppercase tracking-wider text-race-muted hover:text-race-light hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
