import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato — Pavel Implementos Rodoviários" },
      { name: "description", content: "Fale com a Pavel: contato@grupopavel.com.br, (98) 3878-3200, WhatsApp comercial e unidades em São Luís, Imperatriz, Belém e Manaus." },
      { property: "og:title", content: "Contato Pavel" },
      { property: "og:description", content: "Fale com nossa equipe técnica e comercial." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

const UNITS = [
  { city: "São Luís — MA", note: "Matriz · Distrito Industrial do Tibiri", phone: "(98) 3878-3200" },
  { city: "Imperatriz — MA", note: "Rodovia Belém-Brasília", phone: "(99) 3524-0000" },
  { city: "Belém — PA", note: "BR-316, KM 03", phone: "(91) 3211-0000" },
  { city: "Manaus — AM", note: "Distrito Industrial", phone: "(92) 3633-0000" },
];

function Contato() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden bg-industrial">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-rust/15 blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-navy opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 md:px-8 text-center">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Contato</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase mt-4 leading-[0.95] text-balance">
              Mova sua próxima operação com a Pavel.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-ice/70 leading-relaxed">
              Nossa equipe técnica e comercial está pronta para dimensionar
              implementos, peças e serviços para sua frota.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-industrial pb-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-px bg-ice/5 border border-ice/5">
              <a href="mailto:contato@grupopavel.com.br" className="group flex flex-col gap-4 bg-industrial p-8 hover:bg-card transition-colors">
                <Mail className="size-6 text-rust" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-steel mb-2">E-mail</p>
                  <p className="font-display text-base font-bold text-ice break-all">contato@grupopavel.com.br</p>
                </div>
              </a>
              <a href="tel:+559838783200" className="group flex flex-col gap-4 bg-industrial p-8 hover:bg-card transition-colors">
                <Phone className="size-6 text-rust" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-steel mb-2">Telefone</p>
                  <p className="font-display text-base font-bold text-ice">(98) 3878-3200</p>
                </div>
              </a>
              <a href="https://wa.me/559838783200" target="_blank" rel="noreferrer" className="group flex flex-col gap-4 bg-rust p-8 hover:bg-rust/90 transition-colors">
                <MessageCircle className="size-6 text-ice" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ice/70 mb-2">WhatsApp</p>
                  <p className="font-display text-base font-bold text-ice">Comercial Pavel</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-industrial pb-32 border-t border-ice/5 pt-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Unidades</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase mt-4 mb-12">Onde estamos</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ice/5 border border-ice/5">
            {UNITS.map((u, i) => (
              <Reveal key={u.city} delay={0.05 * i}>
                <div className="bg-industrial p-8 h-full">
                  <MapPin className="size-5 text-rust mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold uppercase">{u.city}</h3>
                  <p className="mt-3 text-sm text-ice/65 leading-relaxed">{u.note}</p>
                  <p className="mt-4 text-sm font-semibold text-ice tabular-nums">{u.phone}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
