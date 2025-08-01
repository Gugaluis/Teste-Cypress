
# 🧪 Testes Automatizados - Kanban App (Cypress)

Este repositório contém os testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para validar a interface, acessibilidade e funcionalidades principais do aplicativo **Kanban App**.

## 📂 Estrutura do Projeto

```
📁 cypress/
 ┣ 📁 e2e/
 ┃ ┣ 📄 acessibilidade.cy.js
 ┃ ┣ 📄 quadro_basico.cy.js
 ┃ ┣ 📄 interacoes_ui.cy.js
 ┃ ┗ 📄 bugs_conhecidos.cy.js
┣ 📁 fixtures/
┣ 📁 support/
┣ 📄 cypress.config.js
```

## ✅ Escopo dos Testes

- **Acessibilidade**  
  Verifica foco de teclado nos cartões e componentes essenciais.

- **Quadro Básico**  
  Confirma a presença e responsividade das colunas e títulos do quadro.

- **Interações com a UI**  
  Testa o funcionamento do toggle de tema e botões de adicionar listas/tarefas.

- **Bugs Conhecidos**  
  Identifica problemas pendentes como falha no *drag and drop* e ausência de classes esperadas nas tags.

## 🚀 Executando os Testes

### Pré-requisitos

- Node.js instalado
- Cypress instalado localmente

### Instalação

```bash
npm install
```

### Executar em modo interativo

```bash
npx cypress open
```

### Executar em modo headless

```bash
npx cypress run
```

## 📎 Relatório

Um relatório completo dos testes foi gerado em formatos PDF e DOCX e está disponível na pasta `/docs` deste repositório:

- `docs/Relatorio_de_Testes_Kanban_App.pdf`


## 📌 Recomendado

- Revisar elementos interativos e aplicar `tabindex`, `role`, e uso semântico adequado para acessibilidade.
- Padronizar classes CSS para facilitar a seleção em testes e análise de bugs.

---

👨‍💻 Desenvolvido por: [Luis Gustavo dos Santos](https://github.com/gugaluis)  
📅 Última atualização: Agosto/2025
