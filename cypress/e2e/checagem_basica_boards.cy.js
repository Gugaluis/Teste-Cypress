describe("Kanban App - Testes Básicos do Quadro", () => {
  const baseUrl = "https://kanban-dusky-five.vercel.app/"
  const columns = ["To Do", "In Progress", "Done"]

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get("body").should("be.visible")
  })

  it("Deve exibir o título principal corretamente", () => {
    cy.contains("Quadro Kanban").should("be.visible")
  })

  it("Deve exibir todas as colunas esperadas", () => {
    columns.forEach((column) => {
      cy.contains(column).should("be.visible")
    })
  })

  it("Deve conter tarefas específicas nas colunas corretas", () => {
    cy.contains("To Do").parents().eq(1).within(() => {
      cy.contains("Documentar padrões mobile").should("exist")
    })

    cy.contains("Done").parents().eq(1).within(() => {
      cy.contains("UX Review").should("exist")
    })
  })

  it("Deve manter as colunas visíveis em diferentes tamanhos de tela", () => {
    const viewports = [
      [1280, 720], // Desktop
      [768, 1024], // Tablet
      [375, 667]   // Mobile
    ]

    viewports.forEach(([width, height]) => {
      cy.viewport(width, height)
      columns.forEach((column) => {
        cy.contains(column).should("be.visible")
      })
    })
  })

  it("Deve carregar a aplicação em menos de 5 segundos", () => {
    cy.visit(baseUrl, {
      onBeforeLoad: (win) => {
        win.performance.mark("start-loading")
      },
      onLoad: (win) => {
        const timing = win.performance.timing
        const loadTime = timing.loadEventEnd - timing.navigationStart
        expect(loadTime).to.be.lessThan(5000)
      }
    })
  })

  it("As colunas devem ter estrutura consistente e visível", () => {
    columns.forEach((column) => {
      cy.contains(column).parents().eq(1)
        .should("exist")
        .and("be.visible")
        .within(() => {
          cy.get("div").should("have.length.greaterThan", 0) // pelo menos uma tarefa
        })
    })
  })
})
