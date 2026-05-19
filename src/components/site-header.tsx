import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Phone, Instagram, Facebook, Menu, X } from "lucide-react";
import logo from "@/assets/pavel-logo.png";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/produtos", label: "Produtos" },
  { to: "/seminovos", label: "Seminovos" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div
        className={`hidden md:block transition-all duration-500 ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-8 text-[11px] uppercase tracking-[0.2em] text-steel">
          <div className="flex items-center gap-6">
            <a href="mailto:contato@grupopavel.com.br" className="flex items-center gap-2 hover:text-ice transition-colors">
              <Mail className="size-3.5" /> contato@grupopavel.com.br
            </a>
            <a href="tel:+559838783200" className="flex items-center gap-2 hover:text-ice transition-colors">
              <Phone className="size-3.5" /> (98) 3878-3200
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-rust transition-colors">
              <Instagram className="size-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-rust transition-colors">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-500 ${
          scrolled ? "glass" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Pavel Implementos Rodoviários" className="h-9 w-auto brightness-0 invert" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.18em]">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-rust" }}
                className="text-ice/80 hover:text-ice transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contato"
              className="hidden md:inline-flex items-center gap-2 bg-rust px-5 h-10 text-[11px] font-bold uppercase tracking-[0.2em] text-ice hover:bg-rust/90 transition-colors"
            >
              Orçamento
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              className="lg:hidden inline-flex size-10 items-center justify-center border border-ice/15 text-ice"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden glass border-t border-ice/5">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ice/85 hover:text-rust"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-6 border-t border-ice/10 pt-4 text-[11px] uppercase tracking-[0.18em] text-steel">
                <a href="tel:+559838783200" className="flex items-center gap-2"><Phone className="size-3.5" />(98) 3878-3200</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
