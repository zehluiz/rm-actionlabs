# Guia do Design System — Registro de Máquinas (FICMA)

Documento de onboarding para a equipe de design. Explica **o esquema de
trabalho**, **o que cada pessoa precisa** e o **passo a passo único de setup**.
Sem jargão.

---

## 1. Como funciona (visão geral)

```
Figma  →  Claude (gera código)  →  GitHub (repositório)  →  Vercel (publica)  →  Link
```

- **Figma** é o desenho (fonte da verdade visual).
- **Claude** transforma o desenho em código de componentes.
- **GitHub** guarda o código com histórico (o "cofre").
- **Vercel** pega o código do GitHub e publica o Storybook num **link**, sozinho, a cada atualização.
- **Link**: qualquer pessoa abre no navegador e vê os componentes.

## 2. Dois papéis (e o que cada um precisa)

| Papel | O que faz | Precisa instalar/ter |
|---|---|---|
| **Visualizador** | Só **ver** os componentes | Nada. Só o **link** no navegador. |
| **Editor** | Cria/ajusta componentes | Conta **GitHub**, **Node.js**, **VS Code** |

> A maioria dos designers é **Visualizador** — abrem o link e pronto.
> Poucas pessoas precisam ser **Editor**.

## 3. Contas necessárias (gratuitas)

1. **GitHub** — guarda o código. (https://github.com)
2. **Vercel** — publica o Storybook online. (https://vercel.com) — dá pra
   entrar usando a própria conta do GitHub.

## 4. Setup único — passo a passo

### Parte A — Subir o projeto no GitHub (uma vez)

1. Instale o **GitHub Desktop**: https://desktop.github.com (app com botões).
2. Abra e entre com sua conta GitHub.
3. `File → Add Local Repository` e aponte para a pasta do projeto
   (`ficma-design-system`). Se ele disser que não é um repositório, clique em
   **"create a repository"**.
4. Clique em **Publish repository** e escolha o repositório (ex.: `rm-actionlabs`).
   Pronto: o código está no GitHub.

### Parte B — Publicar na Vercel (uma vez)

1. Acesse https://vercel.com e clique em **"Sign up" / "Continue with GitHub"**.
2. **Add New → Project** e selecione o repositório `rm-actionlabs`.
3. A Vercel já lê o arquivo `vercel.json` do projeto (build e pasta de saída
   já configurados). É só clicar em **Deploy**.
4. Ao terminar, a Vercel te dá um **link público** (algo como
   `rm-actionlabs.vercel.app`). Esse é o link que você compartilha com o time.

> A partir daqui, **toda vez que o código for atualizado no GitHub, a Vercel
> republica o link sozinha.**

### Parte C — Rodar local (só para Editores)

1. Instale o **Node.js** (versão LTS): https://nodejs.org
2. Instale o **VS Code**: https://code.visualstudio.com
3. No VS Code: `File → Open Folder` → a pasta do projeto.
4. Abra o terminal embutido (menu `Terminal → New Terminal`) e rode uma vez:
   ```
   npm install
   ```
5. Para ver localmente enquanto trabalha:
   ```
   npm run storybook
   ```
   Abre em `http://localhost:6006` e recarrega sozinho a cada arquivo salvo.

## 5. Dia a dia

- **Visualizador:** abre o link da Vercel. Para ver novidades, recarrega a página.
- **Editor:** ajusta os arquivos no VS Code → na aba *Source Control* clica em
  **Commit** e **Sync/Push**. A Vercel republica o link automaticamente.

## 6. Para a empresa (próximo nível)

- **Automação completa** ("a IA abre um Pull Request e você aprova"): depende de
  um **conector de GitHub com permissão de escrita**, habilitado por um
  **dono/admin da organização** no Claude. É o que falta para o fluxo 100%
  automático previsto na metodologia.
- **Integração com os projetos finais (homologação):** o **time de dev** conecta
  esta biblioteca aos arquivos de homolog dos projetos. Isso é etapa posterior
  e fica com o time técnico.

## 7. Checklist rápido

- [ ] Conta GitHub criada
- [ ] Projeto publicado no GitHub (GitHub Desktop → Publish)
- [ ] Conta Vercel criada (via GitHub)
- [ ] Projeto importado na Vercel → Deploy → link gerado
- [ ] (Editores) Node.js + VS Code instalados, `npm install` rodado
- [ ] Link compartilhado com o time
