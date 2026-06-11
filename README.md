# Design System — Registro de Máquinas (FICMA)

Biblioteca de componentes em **Angular + Storybook**, gerada a partir do
arquivo Figma `Registro de Máquinas`. Os **design tokens são a ponte** entre
o Figma e o código: nenhum componente usa valor cru (hex, px) — tudo passa
pela camada semântica.

## Setup

```bash
npm install
npm run storybook        # sobe o Storybook em http://localhost:6006
npm run build-storybook  # build estático
```

> Pré-requisito: este pacote assume um workspace Angular 18. Se for um repo
> totalmente novo, rode `ng new` e use `ng add @storybook/angular`, depois
> solte `src/lib`, `src/styles` e `.storybook` por cima.

## Arquitetura de tokens (3 camadas)

Espelha as 6 coleções de Variables do Figma:

```
src/styles/
├── tokens.css                 ← ponto de entrada (importe só este)
└── tokens/
    ├── _primitives.css        ← Primitivos: valores crus (não usar direto)
    ├── _semantic.css          ← Semânticos: Light/Dark via [data-theme]
    ├── _typography.css        ← Tipografia: responsiva (Desktop/Tablet/Mobile)
    └── _spacing.css           ← Spacing + Border Radius
```

- **Primitivos** → cor crua (`--neutral-900`, `--brand-primary-default`…). Nunca consumir direto em componente.
- **Semânticos** → intenção (`--color-text-primary`, `--color-surface-page`…). É **esta** camada que o componente usa. Cada token aponta para um primitivo, preservando a cadeia de alias do Figma. O modo **Dark** sobrescreve apenas os tokens que mudam, sob `[data-theme="dark"]`.
- **Tipografia / Spacing / Radius** → escalas. Tipografia é responsiva (os 3 modos do Figma viram media queries: Tablet ≤1024px, Mobile ≤640px).

Tema: o canvas reage a `data-theme="light|dark"` no elemento raiz. No Storybook há um toggle na toolbar (addon-themes).

## Componentes

```
src/lib/<componente>/
├── <componente>.component.ts     ← standalone, props tipadas das variantes
├── <componente>.component.html
├── <componente>.component.scss   ← só tokens semânticos
└── <componente>.stories.ts       ← 1 story por variante/estado + Showcase
```

Regras de geração:
- Props refletem os **eixos de variante** do Figma; estados de interação (hover/focus/disabled) são CSS (`:hover`, `:focus-visible`, `[disabled]`), conforme o `cssMapping` do Figma — não viram props.
- Cor referencia o **token semântico por nome**, nunca hex.
- Ícones usam a família `Font Awesome 6 Pro` (token `--font-family-icon`).

### Status
- ✅ Fundação de tokens (6 coleções, Light/Dark, tipografia responsiva)
- ✅ Setup Storybook + tema
- ✅ `Button` (referência) — variantes solid/outline/text, cores primary/secondary/danger, tamanhos medium/large
- ⏳ Demais 39 component sets — gerar em lotes (ver abaixo)

> ⚠ **Geometria do Button** (padding / min-height) usa a escala do DS, mas
> está **pendente de confirmação** contra o dev-spec do Figma — o fetch de
> geometria via REST estava com o token expirado na geração. Idem para a
> dúvida de **cor como eixo**: o set `Medium/Large` não expõe cor como
> variante no Figma.

## Sincronização Figma → código

Fluxo incremental (alinhado à metodologia de DS com IA da Action Labs):

1. Designer altera o componente no Figma.
2. Agente lê as Variables/variantes via MCP (Desktop Bridge).
3. Regenera **apenas** tokens/componentes/stories impactados.
4. Abre PR no repositório.
5. Dev **só revisa e aprova** o PR (ambiente configurado uma vez).
6. Manutenção contínua automatizável via GitHub Actions.

Ao avisar uma mudança, o agente exibe o impacto (Figma / Storybook / código) antes de propagar.
