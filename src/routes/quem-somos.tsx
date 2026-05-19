import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import workshop from "@/assets/workshop.jpg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/quem-somos")({
  component: QuemSomos,
  head: () => ({
    meta: [
      { title: "Quem Somos — Pavel Implementos Rodoviários" },
      { name: "description", content: "Há mais de 30 anos a Pavel entrega implementos rodoviários e suporte técnico para grandes operações no Norte e Nordeste do Brasil." },
      { property: "og:title", content: "Quem Somos — Pavel" },
      { property: "og:description", content: "Tradição, robustez e tecnologia em implementos rodoviários desde 1994." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
});

const VALORES = [
  { n: "01", t: "Engenharia confiável", d: "Implementos projetados para a malha rodoviária mais exigente do Brasil." },
  { n: "02", t: "Suporte 360°", d: "Peças, oficina certificada e assistência técnica em todas as unidades." },
  { n: "03", t: "Compromisso operacional", d: "Sua frota é nossa prioridade — mantemos você na estrada." },
];

function QuemSomos() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-industrial overflow-hidden">
        <div className="absolute -top-32 right-0 size-[500px] rounded-full bg-rust/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Quem somos</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase mt-4 leading-[0.95] max-w-4xl text-balance">
              Três décadas movendo o transporte brasileiro.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-2xl text-lg text-ice/70 leading-relaxed">
              Fundada em 1994, a Pavel cresceu junto com as grandes operações
              logísticas do Norte e Nordeste. Hoje somos referência em
              implementos rodoviários, peças, assistência técnica e seminovos
              para veículos a diesel.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-industrial py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-ice/10">
              <img src={workshop} alt="Oficina Pavel" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial/80 to-transparent" />
            </div>
          </Reveal>
          <div className="space-y-8">
            {VALORES.map((v, i) => (
              <Reveal key={v.n} delay={0.05 * i}>
                <div className="flex gap-6 border-b border-ice/5 pb-8">
                  <span className="font-display text-2xl text-rust shrink-0">{v.n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase mb-2">{v.t}</h3>
                    <p className="text-ice/70 leading-relaxed">{v.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Link to="/contato" className="group inline-flex items-center gap-3 bg-rust px-7 h-13 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors">
              Falar com a equipe <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
