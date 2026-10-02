# Transforme-se Car — Landing Page

Projeto de estética automotiva em HTML5 + CSS3 puro (sem JavaScript, sem frameworks).

## Estrutura

```
transforme-se-car/
├── index.html
├── style.css
├── favicon.png
└── img/
    ├── hero-fundo.jpg     (placeholder — trocar por foto real)
    └── sobre-carro.jpg    (placeholder — trocar por foto real)
```

## Como abrir

Abram o `index.html` no navegador, ou usem a extensão "Live Server" do VS Code.

## Antes de entregar: trocar as imagens

As fotos atuais são só placeholders para o layout não ficar quebrado. Troquem os
arquivos dentro de `img/` por fotos reais, mantendo os mesmos nomes (assim não
precisam editar o HTML/CSS):

- `hero-fundo.jpg` → imagem de fundo da seção inicial (hero)
- `sobre-carro.jpg` → foto do carro/equipe (seção Sobre)

Os cards de serviço (Lavagem, Polimento, Proteção) não usam fotos — usam ícones
em emoji (🧽 ✨ 🛡️), então não precisam de imagem extra ali.

Fontes gratuitas: Pexels, Unsplash, Pixabay.

## Padrão de nomenclatura CSS (BEM)

O projeto segue o mesmo padrão que vocês já começaram: cada bloco tem uma classe
principal (`.hero`, `.services`, `.about`...) e os elementos internos usam `__`
(ex: `.hero__title`, `.card__icon`). Variações usam `--` (ex: `.btn--primary`,
`.btn--outline`). Mantenham esse padrão se forem adicionar algo novo.

## Cor de destaque

A cor de destaque (`#e63946`, vermelho) ainda está fixa direto no `style.css`,
repetida em várias regras (`.eyebrow`, `.highlight`, `.btn`, `.logo`,
`.nav__list a:hover`, `.card:hover`, `.link`, `.footer__logo`). Pra trocar a cor
do site inteiro, o jeito mais rápido hoje é usar "Localizar e substituir" do
editor e trocar todas as ocorrências de `#e63946` (e do hover `#ff5a5f`) de uma vez.

Se quiserem facilitar isso pra próxima troca, dá pra criar uma variável CSS no
topo do arquivo:

```css
:root {
  --accent: #e63946;
  --accent-hover: #ff5a5f;
}
```

e trocar cada `#e63946` / `#ff5a5f` por `var(--accent)` / `var(--accent-hover)`.

## Sugestão de divisão de tarefas (5 integrantes)

| Integrante | Responsabilidade |
|---|---|
| 1 | Cabeçalho/menu + seção inicial (hero) |
| 2 | Seção de serviços (os 3 cards) |
| 3 | Seção "Sobre nós" |
| 4 | Seção de contato + rodapé |
| 5 | Responsividade (mobile), imagens reais e revisão final comparando com o modelo |

## Checklist dos requisitos

- [x] HTML e CSS em arquivos separados
- [x] Sem JavaScript
- [x] Sem frameworks/bibliotecas
- [x] HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] Menu com links para as seções
- [x] `:hover` em todos os links e botões
- [x] Todos os textos fornecidos estão na página
- [ ] Trocar placeholders por imagens reais do tema