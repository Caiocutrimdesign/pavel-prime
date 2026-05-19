
# Pavel Implementos Rodoviários — Site Institucional Premium

## Visão

Site institucional cinematográfico, industrial-premium, inspirado em Randon, Volvo Trucks, Scania e estética industrial-Apple. Foco em robustez, tecnologia pesada e confiança corporativa — sem cara de template.

## Identidade

- **Logo:** oficial Pavel (upload `pavel-cor-2.png`) → copiada para `src/assets/pavel-logo.png`.
- **Paleta (tokens em `src/styles.css`, oklch):**
  - Navy profundo `#292752` → `--primary`
  - Vermelho ferrugem `#a14a3f` → `--accent`
  - Preto industrial `#080912` → `--background`
  - Branco gelo → `--foreground`
  - Cinza aço metálico → `--muted` / `--border`
  - Gradientes industriais + reflexo metálico + glow vermelho ferrugem como tokens (`--gradient-industrial`, `--shadow-metal`, `--glow-rust`).
- **Tipografia:** par premium industrial — heading `Space Grotesk` / `Sora`, body `Inter` / `DM Sans` (a confirmar na etapa de direções).

## Etapa 1 — Direções de Design (antes de construir)

Antes de implementar, gero **3 direções renderizadas** via `design--create_directions`, todas com a paleta acima travada como constraint, variando composição/densidade/motion:

1. **Cinematic Heavy** — hero full-bleed escuro, carreta em destaque com glow ferrugem, tipografia oversize, scroll parallax denso.
2. **Editorial Industrial** — grid editorial tipo catálogo automotivo premium (Porsche/Volvo), muito espaço negativo, slider horizontal grande.
3. **Tech Operacional** — HUD industrial sutil, dados/estatísticas em destaque, glassmorphism em camadas, sensação Tesla/Apple industrial.

Apresento via `ask_questions` (type `prototype`) — você escolhe uma e eu construo fiel à composição escolhida.

## Etapa 2 — Arquitetura de Rotas (TanStack Start)

Cada seção shareável vira rota própria com `head()` específico (SEO + OG):

```
src/routes/
  __root.tsx          → header + footer + shell
  index.tsx           → Home (hero + destaques + slider produtos + CTAs)
  quem-somos.tsx      → história, valores, números
  servicos.tsx        → alinhamento laser, balanceamento, reforma, solda, suspensão, consórcios
  produtos.tsx        → catálogo completo de implementos
  seminovos.tsx       → catálogo seminovos + WhatsApp
  noticias.tsx        → listagem (placeholder de conteúdo)
  contato.tsx         → form + unidades + canais
```

Header e footer compartilhados via `__root.tsx`.

## Etapa 3 — Componentes-Chave

- **Header** transparente → glassmorphism premium ao scroll (backdrop-blur + borda metálica). Top bar com email/tel/social.
- **Hero** cinematográfico: fundo escuro, imagem hero de carreta (gerada via `imagegen` premium), título oversize, 2 CTAs, faixa de estatísticas (10k+ implementos, 30+ anos, 4 unidades).
- **Slider de Produtos** (peça mais crítica): slider horizontal premium estilo apresentação automotiva — cards grandes, transição cinematográfica com Motion, profundidade 3D leve, hover com glow ferrugem, navegação minimalista e indicadores modernos. Implementos: Baú carga seca, Sider, Semirreboque, Basculante, Carroceria aberta, Peças e suporte. Imagens recortadas com sombra premium (geradas via `imagegen`).
- **Serviços**: grid de cards grandes, ícone minimal (Lucide refinado), título, descrição, hover elegante.
- **Seminovos**: bloco hero secundário com CTA catálogo + WhatsApp.
- **Unidades**: 4 cards (São Luís, Imperatriz, Belém, Manaus) com map pin elegante.
- **Contato**: gradiente cinematográfico, glassmorphism, email + telefone + WhatsApp.
- **Footer** minimalista: logo, social, links rápidos, copyright.

## Etapa 4 — Motion & Efeitos

- `framer-motion` (já vamos instalar) para scroll reveal, parallax suave, hover micro.
- Gradientes industriais + glow ferrugem + reflexo metálico via tokens CSS.
- Blur effects e glassmorphism leve no header/contato.
- Tudo otimizado para mobile (slider funcional touch, hero ainda impactante).

## Etapa 5 — SEO

`head()` por rota com title/description/og em PT-BR, focando palavras-chave:
- "implementos rodoviários Maranhão / São Luís / Tibiri"
- "venda de implementos rodoviários"
- "caminhão basculante Maranhão"
- "reforma de carretas", "suspensão veículos pesados", "oficina caminhões"
- JSON-LD `Organization` no root com endereço, telefone, social.

## Detalhes Técnicos

- Stack: TanStack Start + React 19 + Tailwind v4 + Framer Motion + Lucide.
- Tokens semânticos exclusivamente em `src/styles.css` (oklch). Nenhuma cor hard-coded em componentes.
- Imagens hero/produtos geradas com `imagegen` (premium para hero, fast para cards) e salvas em `src/assets/`.
- Logo importada de `src/assets/pavel-logo.png`.
- Sem backend nesta fase — formulário de contato abre `mailto:` / WhatsApp link. Se quiser envio real depois, ativamos Lovable Cloud.

## Fora de Escopo (confirmar se quer agora)

- Backend de formulário / CRM.
- CMS para notícias (hoje seria conteúdo estático placeholder).
- Catálogo de seminovos dinâmico (hoje seria CTA + grid estático).

Posso confirmar e seguir gerando as 3 direções?
