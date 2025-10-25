# Projeto: Website Institucional "Amor em Ação"

Este é um projeto de website institucional para a ONG "Amor em Ação", desenvolvido como parte de uma avaliação acadêmica. O foco principal é a criação de uma interface moderna, responsiva e acessível, utilizando as melhores práticas de HTML5 semântico e CSS3.

## Descrição

O site é composto por três páginas principais:
1.  **Home (`index.html`):** Apresenta a ONG, seus valores e um chamado à ação.
2.  **Projetos (`projetos.html`):** Detalha os projetos ativos da ONG (Educação e Alimentação) usando um sistema de cards.
3.  **Cadastro (`cadastro.html`):** Um formulário completo para registro de novos voluntários e doadores, com validação visual.

## Recursos e Tecnologias

Este projeto demonstra o domínio dos seguintes conceitos:

* **HTML5 Semântico:** Estrutura clara com tags como `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` e `<form>`.
* **CSS3 Modular:** O CSS é dividido em módulos para fácil manutenção:
    * `variables.css`: Define o Design System (cores, tipografia, espaçamento).
    * `base.css`: Resets e estilos globais (body, links, títulos).
    * `layout.css`: Estrutura principal, incluindo o sistema de grid de 12 colunas e o layout do header/footer.
    * `components.css`: Estilos para todos os componentes reutilizáveis (botões, cards, formulários, badges, etc.).
    * `responsive.css`: Contém todos os `@media` queries e breakpoints.
* **Design System:**
    * **Paleta de Cores:** Mais de 8 cores (primárias, secundárias, neutras, feedback).
    * **Tipografia:** Hierarquia com 5+ tamanhos de fonte (Google Fonts: Poppins e Open Sans).
    * **Espaçamento Modular:** Base de 8px (8, 16, 24, 32, 48, 64px).
* **Leiautes Modernos:**
    * **CSS Grid:** Usado para o leiaute principal das páginas e o sistema de 12 colunas.
    * **Flexbox:** Usado para alinhamento interno de componentes (header, cards, grupos de formulário).
* **Responsividade:**
    * O site é totalmente responsivo, adaptando-se de telas móveis a desktops.
    * Possui 5 breakpoints definidos (`sm`, `md`, `lg`, `xl`, `xxl`).
* **Componentes Interativos:**
    * Menu de navegação com submenu "dropdown" funcional em desktop.
    * Menu "hambúrguer" em dispositivos móveis (controlado por JavaScript).
    * Botões com todos os estados (`:hover`, `:focus`, `:active`, `:disabled`).
    * Formulários com estilização e validação visual (`:valid`, `:invalid`).
    * Componentes de feedback (Alerts) e badges.

## Como Executar

Não é necessário um servidor. Basta clonar este repositório e abrir qualquer um dos arquivos `.html` diretamente no seu navegador.

```bash
# Clone o repositório
git clone https://github.com/Mellosre/Estiliza-o-e-Leiautes.git

# Navegue até a pasta
cd Estiliza-o-e-Leiautes

# Abra o arquivo no navegador
# (No Windows)
start index.html
# (No macOS)
open index.html
# (No Linux)
xdg-open index.html
´´´
## Autor
Renato Mello - Estudante de Analise e Desenvimento de Sistemas