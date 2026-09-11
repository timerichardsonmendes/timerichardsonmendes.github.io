# Richardson Mendes 15800 — Materiais Oficiais (site mobile)

Site estilo "app" para celular, com botões em efeito **Liquid Glass** (vidro azul translúcido) e um painel que pode ser arrastado para cima/baixo, como a Central de Notificações do iPhone.

## Estrutura de arquivos

```
site/
├── index.html          → estrutura da página
├── css/style.css        → todo o visual (Liquid Glass, cores, layout)
├── js/script.js          → gesto de arrastar + brilho do vidro
└── assets/               → coloque aqui seus PNGs (opcional)
```

## Onde colocar os seus PNGs

Você disse que vai me mandar os PNGs do cabeçalho e do fundo. Quando tiver os links (ou os arquivos), troque em **dois lugares**:

**1. Fundo do site** — arquivo `css/style.css`, linha perto do topo:
```css
--bg-image: url('assets/SUBSTITUA-fundo.png');
```
Troque `assets/SUBSTITUA-fundo.png` pelo link do seu PNG (pode ser um link da internet ou um arquivo dentro da pasta `assets/`).

**2. Logos do cabeçalho** — arquivo `index.html`, dentro de `<header class="header">`:
```html
<img class="logo-selo" src="assets/SUBSTITUA-selo-tocom.png" ...>
<img class="logo-nome" src="assets/SUBSTITUA-logo-richardson-mendes.png" ...>
```
Troque os dois `src=""` pelos links dos seus PNGs.

> Enquanto você não troca, aparece um quadro tracejado escrito "Coloque aqui o link do seu PNG" no lugar — é só um aviso visual, não é erro.

## Sobre os botões

Cada botão (`MEU CANDIDATOS`, `GRÁFICA`, `MÚSICAS DA CAMPANHA`, `VÍDEOS DA CAMPANHA`) está em `index.html`, dentro de `<nav class="menu-list">`. Para linkar cada um à página real:

```html
<a class="glass-btn" href="https://SEU-LINK-AQUI.com" data-target="candidatos">
```
Troque `href="#"` pelo link de destino de cada seção.

> Notei que no seu rascunho os dois últimos botões estavam escritos "MUSICAS DA CAMPANHA" (mesmo texto), mas com ícones diferentes (nota musical e play). Coloquei o quarto como "VÍDEOS DA CAMPANHA" — se não for isso que você quer, é só mudar o texto dentro de `<span class="glass-btn__label">`.

## Como subir no GitHub

### Opção A — pelo site do GitHub (mais fácil, sem instalar nada)
1. Crie uma conta em [github.com](https://github.com) se ainda não tiver.
2. Clique em **New repository**, dê um nome (ex: `richardson-mendes-15800`) e marque como **Public**.
3. Clique em **uploading an existing file** e arraste os arquivos/pastas deste projeto (`index.html`, `css/`, `js/`, `assets/`, `README.md`).
4. Clique em **Commit changes**.

### Opção B — pelo terminal (git)
```bash
cd caminho/da/pasta/site
git init
git add .
git commit -m "Site oficial Richardson Mendes 15800"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## Como publicar gratuitamente (GitHub Pages)

1. No repositório, vá em **Settings** → **Pages**.
2. Em "Branch", escolha `main` e a pasta `/ (root)`.
3. Clique em **Save**.
4. Em alguns minutos, o site estará no ar em:
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

## Sobre o efeito de arrastar (estilo notificações do iPhone)

O painel com os botões pode ser puxado com o dedo para cima ou para baixo — ele resiste um pouco (efeito elástico) e volta sozinho ao soltar, igual à Central de Notificações do iPhone. Isso está configurado em `js/script.js`, nas constantes:

```js
const DRAG_LIMIT_UP = 40;     // até onde pode subir
const DRAG_LIMIT_DOWN = 90;   // até onde pode "esticar" para baixo
const RESISTANCE = 0.45;      // quanto mais perto de 1, mais solto; mais perto de 0, mais "preso"
```
Você pode ajustar esses números para deixar o gesto mais forte ou mais suave.

## Testando localmente

Basta abrir o arquivo `index.html` duas vezes clicando nele, ou, para testar como se fosse celular, abra o navegador, aperte F12, ative o "modo dispositivo móvel" (ícone de celular) e recarregue a página.
