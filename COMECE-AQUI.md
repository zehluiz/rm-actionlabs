# 🚀 Como ver o Design System no seu computador

Guia sem jargão. Você vai precisar fazer isso **uma vez só**. Depois, é
sempre o mesmo último passo pra abrir.

---

## Passo 1 — Instalar o "Node" (uma vez só)

O Node é o motorzinho que faz o projeto rodar. É de graça.

1. Acesse: **https://nodejs.org**
2. Baixe o botão da esquerda, que diz **"LTS"** (versão estável).
3. Abra o arquivo baixado e clique em "Continuar / Instalar" até o fim
   (é igual instalar qualquer app no Mac).

> Já tem? Pode pular este passo.

---

## Passo 2 — Colocar a pasta do projeto num lugar fácil

1. Descompacte o arquivo **`ficma-design-system.zip`** (clique 2x nele).
2. Vai aparecer uma pasta chamada **`ficma-design-system`**.
3. Arraste essa pasta para um lugar fácil de achar — sugiro a sua pasta
   **Documentos** (Documents).

---

## Passo 3 — Abrir o Terminal nessa pasta

O Terminal é uma janelinha onde você digita comandos. No Mac:

1. Abra o app **Terminal** (Spotlight: `Cmd + Espaço`, digite "Terminal").
2. Digite **`cd `** (com um espaço depois do `cd`) — **não dê Enter ainda**.
3. Arraste a pasta `ficma-design-system` para dentro do Terminal. Ele vai
   completar o caminho sozinho.
4. Agora sim, aperte **Enter**.

Pronto: o Terminal está "dentro" da pasta do projeto.

---

## Passo 4 — Instalar as peças (uma vez só)

Cole este comando no Terminal e aperte **Enter**:

```
npm install
```

Vai aparecer um monte de texto e demorar alguns minutos (ele está baixando
as peças). Quando parar e voltar a piscar o cursor, terminou. É normal
aparecer alguns avisos amarelos — pode ignorar.

---

## Passo 5 — Abrir o Storybook (este é o passo do dia a dia)

Cole e aperte **Enter**:

```
npm run storybook
```

Em alguns segundos ele **abre o navegador sozinho** em
**`http://localhost:6006`**. É aí que você vê os componentes. 🎉

- No topo tem um botão de **tema** (claro/escuro) pra alternar.
- Na lateral esquerda ficam os componentes (Button, Badge...).
- Cada um tem controles pra mudar cor, tamanho, etc., ao vivo.

### Para fechar
Volte ao Terminal e aperte **`Ctrl + C`**. Para abrir de novo depois, repita
só os **Passos 3 e 5** (o `npm install` não precisa repetir).

---

## O que tem dentro da pasta (mapa simples)

```
ficma-design-system/
│
├── 📄 COMECE-AQUI.md      ← este guia
├── 📄 README.md           ← explicação técnica (pro dev)
│
├── 📁 src/
│   ├── 📁 styles/         ← as CORES, FONTES e ESPAÇAMENTOS (os "tokens")
│   │   ├── tokens.css
│   │   └── tokens/        ← primitivos, semânticos, tipografia, spacing
│   │
│   └── 📁 lib/            ← os COMPONENTES, um por pasta
│       ├── button/        ← o botão (código + estilo + exemplos)
│       └── badge/         ← o badge (etiqueta de status)
│
├── 📁 .storybook/         ← configuração do Storybook (não precisa mexer)
└── ⚙️  (outros arquivos)   ← engrenagens do projeto, pode ignorar
```

Você, como designer, só precisa olhar a pasta **`src`**: `styles` é a
fundação visual e `lib` são os componentes. Cada componente tem 4 arquivinhos
(o código, o template, o estilo e os exemplos do Storybook), mas pra **ver**
funcionando você não precisa abrir nenhum — é só o Passo 5.

---

## Se algo der errado

- **"command not found: npm"** → o Node não instalou direito. Refaça o Passo 1
  e feche/reabra o Terminal.
- **Travou ou quero parar** → `Ctrl + C` no Terminal.
- **A porta 6006 está ocupada** → ele pergunta se quer usar outra porta; digite
  `Y` e Enter.
- Qualquer outra coisa: me manda o print do que apareceu no Terminal que eu te
  ajudo.
