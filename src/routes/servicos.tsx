import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Gauge, CircuitBoard, Wrench, Flame, Anvil, Handshake } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({
    meta: [
      { title: "Serviços — Oficina, alinhamento a laser e reforma | Pavel" },
      { name: "description", content: "Oficina para caminhões e implementos: alinhamento a laser, balanceamento, reforma de carretas, solda certificada, suspensão para veículos pesados e consórcios." },
      { property: "og:title", content: "Serviços Pavel" },
      { property: "og:description", content: "Suporte técnico de precisão industrial para sua frota." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
});

const SERVICES = [
  { icon: Gauge, title: "Alinhamento a Laser", desc: "Precisão milimétrica que reduz desgaste de pneus e consumo de combustível em frotas de longa distância." },
  { icon: CircuitBoard, title: "Balanceamento", desc: "Equilíbrio dinâmico para eixos pesados, garantindo estabilidade e durabilidade dos componentes." },
  { icon: Wrench, title: "Reforma", desc: "Restauração completa de implementos e chassis multimarcas com inspeção estrutural detalhada." },
  { icon: Flame, title: "Solda Certificada", desc: "Processos MIG/MAG e TIG com certificação estrutural para cargas pesadas e operações críticas." },
  { icon: Anvil, title: "Suspensão", desc: "Manutenção preventiva e corretiva em sistemas pneumáticos e mecânicos para veículos pesados." },
  { icon: Handshake, title: "Consórcios", desc: "Renove sua frota com taxas reduzidas e planejamento financeiro inteligente." },
];

function Servicos() {
  return (
    <>
      <section className="pt-40 pb-16 bg-industrial">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Serviços</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase mt-4 leading-[0.95] max-w-4xl text-balance">
              Oficina certificada para frotas pesadas.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-industrial pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ice/5 border border-ice/5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={0.04 * i}>
                <div className="group relative bg-industrial p-10 h-full hover:bg-card transition-colors">
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-display text-xl text-steel tabular-nums">0{i + 1}</span>
                    <s.icon className="size-7 text-rust" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{s.desc}</p>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-rust group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contato" className="group inline-flex items-center gap-3 bg-rust px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors">
              Agendar atendimento <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
