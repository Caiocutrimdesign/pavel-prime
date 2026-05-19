import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import seminovosImg from "@/assets/seminovos.jpg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/seminovos")({
  component: Seminovos,
  head: () => ({
    meta: [
      { title: "Seminovos — Implementos revisados | Pavel" },
      { name: "description", content: "Implementos rodoviários seminovos revisados com garantia de procedência Pavel. Consulte o catálogo em São Luís, Imperatriz, Belém e Manaus." },
      { property: "og:title", content: "Seminovos Pavel" },
      { property: "og:description", content: "Encontre seu seminovo ideal com a procedência Pavel." },
      { property: "og:url", content: "/seminovos" },
    ],
    links: [{ rel: "canonical", href: "/seminovos" }],
  }),
});

function Seminovos() {
  return (
    <>
      <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={seminovosImg} alt="" className="w-full h-full object-cover opacity-60" width={1600} height={1000} />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial via-industrial/85 to-industrial/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Seminovos</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase mt-4 leading-[0.95] max-w-3xl text-balance">
              Encontre seu seminovo ideal.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg text-ice/75 leading-relaxed">
              Inventário rotativo de implementos revisados, com inspeção
              estrutural completa e garantia de procedência Pavel.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://wa.me/559838783200?text=Olá,%20gostaria%20de%20consultar%20o%20catálogo%20de%20seminovos" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-rust px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors">
                <MessageCircle className="size-4" /> Consultar no WhatsApp
              </a>
              <Link to="/contato" className="inline-flex items-center gap-3 border border-ice/25 px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-ice/5 transition-colors">
                Falar com vendas <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-industrial py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-3 gap-px bg-ice/5 border border-ice/5">
          {[
            { t: "Inspeção 80 pontos", d: "Cada implemento passa por verificação técnica completa antes de entrar no inventário." },
            { t: "Garantia Pavel", d: "Procedência documentada e suporte da equipe técnica em todas as unidades." },
            { t: "Pronto para rodar", d: "Documentação em dia e revisão estrutural — você sai com o implemento operacional." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={0.06 * i}>
              <div className="bg-industrial p-10 h-full">
                <span className="font-display text-xl text-rust">0{i + 1}</span>
                <h3 className="font-display text-2xl font-bold uppercase mt-6 mb-3">{c.t}</h3>
                <p className="text-sm text-steel leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
