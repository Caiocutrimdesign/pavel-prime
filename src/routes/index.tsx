import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Wrench,
  Flame,
  Gauge,
  CircuitBoard,
  Anvil,
  Handshake,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

import heroTruck from "@/assets/hero-truck.jpg";
import seminovosImg from "@/assets/seminovos.jpg";
import workshopImg from "@/assets/workshop.jpg";

import { ProductSlider } from "@/components/product-slider";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Pavel Implementos Rodoviários — Implementos, peças e oficina no Maranhão" },
      { name: "description", content: "Venda de implementos rodoviários, basculantes, sider, baú e semirreboques em São Luís, Imperatriz, Belém e Manaus. Oficina, peças, alinhamento a laser e seminovos." },
      { property: "og:title", content: "Pavel — Implementos para quem move grandes operações" },
      { property: "og:description", content: "Comprar implementos rodoviários no Maranhão com a Pavel: 30+ anos, 10 mil implementos entregues, 4 unidades estratégicas." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const STATS = [
  { value: "10k+", label: "Implementos entregues" },
  { value: "30+", label: "Anos de mercado" },
  { value: "04", label: "Unidades estratégicas" },
  { value: "100%", label: "Suporte multimarcas" },
];

const SERVICES = [
  { icon: Gauge, title: "Alinhamento a Laser", desc: "Precisão milimétrica que reduz desgaste de pneus e consumo de combustível." },
  { icon: CircuitBoard, title: "Balanceamento", desc: "Equilíbrio dinâmico para eixos pesados e operação contínua sem vibrações." },
  { icon: Wrench, title: "Reforma", desc: "Restauração completa de implementos e chassis multimarcas com garantia." },
  { icon: Flame, title: "Solda Certificada", desc: "Processos MIG/MAG e TIG com certificação estrutural para cargas pesadas." },
  { icon: Anvil, title: "Suspensão", desc: "Manutenção preventiva e corretiva em sistemas pneumáticos e mecânicos." },
  { icon: Handshake, title: "Consórcios", desc: "A forma mais inteligente de renovar sua frota com taxas reduzidas." },
];

const UNITS = [
  { city: "São Luís", uf: "MA", note: "Matriz · Distrito Industrial do Tibiri", phone: "(98) 3878-3200" },
  { city: "Imperatriz", uf: "MA", note: "Polo logístico Belém-Brasília", phone: "(99) 3524-0000" },
  { city: "Belém", uf: "PA", note: "Centro de distribuição BR-316", phone: "(91) 3211-0000" },
  { city: "Manaus", uf: "AM", note: "Suporte à Zona Franca", phone: "(92) 3633-0000" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroTruck}
            alt="Carreta Pavel em rodovia ao entardecer"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial via-industrial/55 to-industrial/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial/80 via-industrial/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 pt-40 pb-20 lg:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-3 mb-6 text-[11px] font-bold uppercase tracking-[0.35em] text-rust">
              <span className="h-px w-10 bg-rust" /> Pavel · Desde 1994
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-black uppercase leading-[0.92] tracking-tighter text-ice max-w-5xl text-balance">
              Implementos para quem <span className="text-rust">move</span> grandes operações.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl text-base md:text-lg text-ice/75 leading-relaxed">
              A Pavel comercializa implementos rodoviários e oferece suporte,
              assistência técnica, peças e serviços especializados para veículos a diesel.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/produtos"
                className="group inline-flex items-center gap-3 bg-rust px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors"
              >
                Conhecer produtos
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 border border-ice/25 px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-ice/5 hover:border-ice/50 transition-colors"
              >
                Falar com a equipe
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 border-t border-ice/10 pt-10">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.06}>
                <div>
                  <p className="font-display text-4xl md:text-5xl font-black text-ice tabular-nums leading-none">
                    {s.value}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-steel">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SLIDER */}
      <ProductSlider />

      {/* SERVICES */}
      <section id="servicos" className="relative bg-industrial border-t border-ice/5 py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Reveal>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Ecossistema</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-4xl md:text-6xl font-black uppercase mt-4 leading-[0.95]">
                  Suporte técnico<br/>de precisão industrial.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 text-base text-ice/70 leading-relaxed max-w-md">
                  Oficinas equipadas com tecnologia de ponta para garantir que sua
                  frota nunca pare de produzir. Atendimento multimarcas com peças
                  genuínas e equipe certificada.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 relative overflow-hidden border border-ice/10 aspect-[5/3]">
                  <img src={workshopImg} alt="Oficina Pavel" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial/85 via-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="font-display text-2xl font-black text-ice">4 unidades</p>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-steel">Estrutura própria</p>
                    </div>
                    <Link to="/servicos" className="text-[10px] font-bold uppercase tracking-[0.25em] text-ice/80 hover:text-rust inline-flex items-center gap-2">
                      Ver oficina <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ice/5 border border-ice/5">
                {SERVICES.map((s, i) => (
                  <Reveal key={s.title} delay={0.04 * i}>
                    <div className="group relative bg-industrial p-8 lg:p-10 h-full hover:bg-card transition-colors">
                      <div className="flex items-start justify-between mb-12">
                        <span className="font-display text-xl text-steel tabular-nums">0{i + 1}</span>
                        <s.icon className="size-6 text-rust" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-3">{s.title}</h3>
                      <p className="text-sm text-steel leading-relaxed">{s.desc}</p>
                      <div className="absolute bottom-0 left-0 h-px w-0 bg-rust group-hover:w-full transition-all duration-500" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEMINOVOS */}
      <section className="relative overflow-hidden border-y border-ice/5">
        <div className="absolute inset-0">
          <img src={seminovosImg} alt="Seminovos Pavel" className="w-full h-full object-cover opacity-50" loading="lazy" width={1600} height={1000} />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial via-industrial/85 to-industrial/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Seminovos</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-4xl md:text-6xl font-black uppercase mt-4 leading-[0.95] text-balance">
                  Encontre seu<br/>seminovo ideal.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-lg text-base text-ice/75 leading-relaxed">
                  Implementos revisados com garantia de procedência Pavel. Pronto
                  para rodar com a qualidade técnica de quem entende de estrada.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/seminovos" className="group inline-flex items-center gap-3 bg-rust px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors">
                    Ver catálogo <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <a href="https://wa.me/559838783200" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-ice/25 px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-ice/5 transition-colors">
                    <MessageCircle className="size-4" /> WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* UNITS */}
      <section id="unidades" className="bg-industrial py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Presença</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase mt-4 mb-16 leading-[0.95]">
              Nossas unidades.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ice/5 border border-ice/5">
            {UNITS.map((u, i) => (
              <Reveal key={u.city} delay={0.05 * i}>
                <div className="group bg-industrial p-8 lg:p-10 h-full hover:bg-card transition-colors">
                  <MapPin className="size-5 text-rust mb-8" strokeWidth={1.5} />
                  <h4 className="font-display text-2xl font-black uppercase">{u.city}</h4>
                  <p className="font-display text-sm text-steel uppercase tracking-widest mt-1">{u.uf}</p>
                  <p className="mt-6 text-sm text-ice/65 leading-relaxed">{u.note}</p>
                  <p className="mt-6 text-sm font-semibold text-ice tabular-nums">{u.phone}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO CTA */}
      <section id="contato" className="relative overflow-hidden bg-industrial">
        <div className="absolute inset-0 bg-gradient-navy opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-rust/15 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-6 md:px-8 py-24 lg:py-32 text-center">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Fale com a Pavel</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-7xl font-black uppercase mt-4 leading-[0.95] text-balance">
              Pronto para mover<br/>sua próxima operação?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 mx-auto max-w-xl text-base text-ice/70 leading-relaxed">
              Nossa equipe técnica e comercial está pronta para dimensionar a
              solução certa para sua frota.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-12 inline-flex flex-col sm:flex-row items-stretch gap-px bg-ice/10 border border-ice/10">
              <a href="mailto:contato@grupopavel.com.br" className="flex items-center gap-3 bg-industrial px-7 h-14 text-[12px] font-medium text-ice/85 hover:bg-card transition-colors">
                <Mail className="size-4 text-rust" /> contato@grupopavel.com.br
              </a>
              <a href="tel:+559838783200" className="flex items-center gap-3 bg-industrial px-7 h-14 text-[12px] font-medium text-ice/85 hover:bg-card transition-colors">
                <Phone className="size-4 text-rust" /> (98) 3878-3200
              </a>
              <a href="https://wa.me/559838783200" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-rust px-7 h-14 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
