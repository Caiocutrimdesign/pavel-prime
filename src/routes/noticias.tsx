import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/noticias")({
  component: Noticias,
  head: () => ({
    meta: [
      { title: "Notícias — Pavel Implementos Rodoviários" },
      { name: "description", content: "Novidades, lançamentos e bastidores do universo Pavel — implementos rodoviários, oficina e operações." },
      { property: "og:title", content: "Notícias Pavel" },
      { property: "og:description", content: "Acompanhe os bastidores da Pavel." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
});

const POSTS = [
  { date: "12.05.2026", tag: "Lançamento", title: "Nova linha de basculantes ganha reforço estrutural", excerpt: "Reformulação completa do chassi entrega ganho de 12% em vida útil." },
  { date: "28.04.2026", tag: "Operação", title: "Pavel Manaus amplia centro de peças", excerpt: "Nova ala dobra capacidade de estoque para atender Zona Franca." },
  { date: "10.04.2026", tag: "Bastidores", title: "Por dentro da oficina de alinhamento a laser", excerpt: "Tecnologia milimétrica que estende a vida útil dos pneus em até 30%." },
];

function Noticias() {
  return (
    <>
      <section className="pt-40 pb-12 bg-industrial">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Notícias</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase mt-4 leading-[0.95] max-w-4xl">
              Bastidores da Pavel.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-industrial pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="divide-y divide-ice/5 border-y border-ice/5">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={0.04 * i}>
                <article className="group grid grid-cols-12 gap-6 py-10 hover:bg-card/50 px-4 transition-colors cursor-pointer">
                  <div className="col-span-12 md:col-span-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-steel tabular-nums">{p.date}</p>
                  </div>
                  <div className="col-span-12 md:col-span-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-rust">{p.tag}</p>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight group-hover:text-rust transition-colors">{p.title}</h3>
                    <p className="mt-3 text-sm text-steel leading-relaxed max-w-2xl">{p.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
