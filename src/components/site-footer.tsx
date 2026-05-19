import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/pavel-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-industrial border-t border-ice/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 mb-16">
          <div className="md:col-span-5">
            <img src={logo} alt="Pavel Implementos Rodoviários" className="h-10 w-auto brightness-0 invert mb-6" />
            <p className="text-sm text-steel leading-relaxed max-w-sm">
              Desde 1994 movendo as grandes operações do Norte e Nordeste com
              implementos rodoviários, peças e assistência técnica especializada
              para veículos a diesel.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="inline-flex size-10 items-center justify-center border border-ice/15 text-ice/80 hover:text-rust hover:border-rust transition-colors">
                <Instagram className="size-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
                 className="inline-flex size-10 items-center justify-center border border-ice/15 text-ice/80 hover:text-rust hover:border-rust transition-colors">
                <Facebook className="size-4" />
              </a>
              <a href="https://wa.me/559838783200" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                 className="inline-flex size-10 items-center justify-center border border-ice/15 text-ice/80 hover:text-rust hover:border-rust transition-colors">
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-rust mb-5">Navegação</h4>
            <ul className="space-y-3 text-sm text-ice/75">
              <li><Link to="/quem-somos" className="hover:text-rust">Quem Somos</Link></li>
              <li><Link to="/produtos" className="hover:text-rust">Produtos</Link></li>
              <li><Link to="/servicos" className="hover:text-rust">Serviços</Link></li>
              <li><Link to="/seminovos" className="hover:text-rust">Seminovos</Link></li>
              <li><Link to="/noticias" className="hover:text-rust">Notícias</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-rust mb-5">Fale conosco</h4>
            <ul className="space-y-3 text-sm text-ice/75">
              <li className="flex items-center gap-3"><Mail className="size-4 text-steel" /> contato@grupopavel.com.br</li>
              <li className="flex items-center gap-3"><Phone className="size-4 text-steel" /> (98) 3878-3200</li>
              <li>
                <a href="https://wa.me/559838783200" className="inline-flex items-center gap-2 mt-2 px-5 h-11 bg-rust text-ice text-[11px] font-bold uppercase tracking-[0.2em]">
                  <MessageCircle className="size-4" /> WhatsApp Comercial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-ice/5 pt-8 text-[10px] uppercase tracking-[0.25em] text-steel">
          <p>© {new Date().getFullYear()} Pavel Implementos Rodoviários. Todos os direitos reservados.</p>
          <p className="italic normal-case tracking-normal text-steel/70">Engenharia para grandes operações.</p>
        </div>
      </div>
    </footer>
  );
}
