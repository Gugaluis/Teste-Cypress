describe("Kanban App - Testes de Bugs Conhecidos e Debug", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.get("body", { timeout: 10000 }).should("be.visible")
  })

  it("🐛 BUG: Drag and drop não funciona - mover tarefa 'Documentar padrões mobile' de To Do para In Progress", () => {
    // Verifica a tarefa existe na coluna "To Do"
    cy.contains("To Do")
      .parent()
      .parent()
      .within(() => {
        cy.contains("Documentar padrões mobile").should("exist")
      })

    // Seleciona tarefa e coluna alvo
    cy.contains("Documentar padrões mobile").as("taskToMove")
    cy.contains("In Progress").parent().parent().as("targetColumn")

    // Tenta drag and drop - requer plugin para funcionar nativamente (se não usar, pode falhar)
    cy.get("@taskToMove").trigger("mousedown", { force: true })
    cy.get("@targetColumn").trigger("mousemove", { force: true }).trigger("mouseup", { force: true })

    cy.wait(1000)

    // Verifica se a tarefa apareceu na coluna destino
    cy.get("@targetColumn").within(() => {
      cy.contains("Documentar padrões mobile").should("exist")
    })
  })

  it("🐛 BUG: Tags não possuem seletores específicos, mas devem existir", () => {
    cy.contains("Documentar padrões mobile")
      .parent()
      .within(() => {
        cy.get('[class*="tag"], [class*="badge"]')
          .should("have.length.at.least", 1)
      })
  })

  // ========== TESTES DE DEBUG/INVESTIGAÇÃO ==========
  it.skip("debug - inspecionar estrutura real da tarefa 'Documentar padrões mobile'", () => {
    cy.contains("Documentar padrões mobile").then(($task) => {
      // Logs úteis para inspeção no console do Cypress
      console.log("Task element:", $task[0])
      console.log("Task HTML:", $task[0].outerHTML)
      console.log("Task parent:", $task.parent()[0])
      console.log("Draggable attribute:", $task.attr("draggable"))
    })
  })

  it.skip("debug - inspecionar colunas Kanban", () => {
    cy.contains("To Do")
      .parent()
      .parent()
      .then(($col) => {
        console.log("Column element:", $col[0])
        console.log("Column classes:", $col.attr("class"))
        console.log("Column HTML:", $col[0].outerHTML)
      })
  })

  it.skip("debug - buscar elementos com classes relacionadas a tags", () => {
    cy.get("body").then(($body) => {
      console.log('Elementos com texto "Tag":', $body.find(':contains("Tag")'))
      console.log("Spans:", $body.find("span"))
      console.log('Elementos com classes "tag" ou "badge":', $body.find('[class*="tag"], [class*="badge"]'))
    })
  })
})
