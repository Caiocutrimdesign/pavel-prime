import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-screen items-center justify-center bg-industrial px-4 pt-32">
        <div className="max-w-md text-center">
          <p className="font-display text-[140px] font-black leading-none text-rust">404</p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ice">
            Página não encontrada
          </h2>
          <p className="mt-3 text-sm text-steel">
            O endereço acessado não existe ou foi movido para outra rota.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-rust px-6 h-12 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-industrial px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold uppercase text-ice">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-steel">
          Algo deu errado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-rust px-5 h-11 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-rust/90 transition-colors"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-ice/20 bg-transparent px-5 h-11 text-[11px] font-bold uppercase tracking-[0.25em] text-ice hover:bg-ice/5 transition-colors"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pavel Implementos Rodoviários" },
      { name: "description", content: "Pavel: venda de implementos rodoviários, peças, assistência técnica e seminovos para veículos a diesel no Maranhão, Pará e Amazonas." },
      { name: "theme-color", content: "#080912" },
      { property: "og:title", content: "Pavel Implementos Rodoviários" },
      { property: "og:description", content: "Implementos rodoviários, peças, oficina e seminovos para grandes operações no Norte e Nordeste." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Pavel Implementos Rodoviários" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pavel Implementos Rodoviários",
          url: "/",
          email: "contato@grupopavel.com.br",
          telephone: "+55-98-3878-3200",
          areaServed: ["MA", "PA", "AM", "BR-N", "BR-NE"],
          address: [
            { "@type": "PostalAddress", addressLocality: "São Luís", addressRegion: "MA", addressCountry: "BR" },
            { "@type": "PostalAddress", addressLocality: "Imperatriz", addressRegion: "MA", addressCountry: "BR" },
            { "@type": "PostalAddress", addressLocality: "Belém", addressRegion: "PA", addressCountry: "BR" },
            { "@type": "PostalAddress", addressLocality: "Manaus", addressRegion: "AM", addressCountry: "BR" },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="bg-industrial text-ice">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
