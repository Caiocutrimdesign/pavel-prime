import { createFileRoute } from "@tanstack/react-router";
import { ProductSlider } from "@/components/product-slider";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/produtos")({
  component: Produtos,
  head: () => ({
    meta: [
      { title: "Produtos — Implementos rodoviários | Pavel" },
      { name: "description", content: "Catálogo completo de implementos rodoviários: baú carga seca, sider, semirreboque, basculante, carroceria aberta, peças e suporte. Venda em São Luís, Imperatriz, Belém e Manaus." },
      { property: "og:title", content: "Catálogo de Implementos — Pavel" },
      { property: "og:description", content: "Implementos Truckvan e linha completa Pavel para grandes operações." },
      { property: "og:url", content: "/produtos" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
});

function Produtos() {
  return (
    <>
      <section className="pt-40 pb-12 bg-industrial">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-rust">Catálogo</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase mt-4 leading-[0.95] max-w-4xl text-balance">
              Linha completa<br/>de implementos.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg text-ice/70 leading-relaxed">
              Conheça toda a linha de implementos rodoviários Pavel — de baús
              fechados a basculantes mineradores, desenhados para as operações
              mais exigentes.
            </p>
          </Reveal>
        </div>
      </section>
      <ProductSlider />
    </>
  );
}
