describe("Kanban App - Testes de Bugs Conhecidos e Debug", () => {
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/")
    cy.get("body").should("be.visible")
  })

  it("🐛 BUG: Drag and drop não funciona - To Do para In Progress", () => {
    cy.contains("To Do")
      .parent()
      .parent()
      .within(() => {
        cy.contains("Documentar padrões mobile").should("exist")
      })

    cy.contains("Documentar padrões mobile").as("taskToMove")
    cy.contains("In Progress").parent().parent().as("targetColumn")

    cy.get("@taskToMove").drag("@targetColumn", { force: true })
    cy.wait(1000)

    cy.get("@targetColumn").within(() => {
      cy.contains("Documentar padrões mobile").should("exist")
    })
  })

  it("🐛 BUG: Tags não têm seletores adequados", () => {
    cy.contains("Documentar padrões mobile")
      .parent()
      .within(() => {
        cy.get('[class*="tag"], [class*="badge"]').should("have.length.at.least", 1)
      })
  })

  // ========== TESTES DE DEBUG/INVESTIGAÇÃO ==========
  it.skip("debug - inspecionar estrutura real das tarefas", () => {
    cy.contains("Documentar padrões mobile").then(($task) => {
      console.log("Task element:", $task[0])
      console.log("Task HTML:", $task[0].outerHTML)
      console.log("Task parent:", $task.parent()[0])
      console.log("Draggable?", $task.attr("draggable"))
    })
  })

  it.skip("debug - inspecionar colunas", () => {
    cy.contains("To Do")
      .parent()
      .parent()
      .then(($col) => {
        console.log("Column element:", $col[0])
        console.log("Column classes:", $col.attr("class"))
        console.log("Column HTML:", $col[0].outerHTML)
      })
  })

  it.skip("debug - procurar tags", () => {
    cy.get("body").then(($body) => {
      console.log('Elementos com "Tag":', $body.find(':contains("Tag")'))
      console.log("Spans:", $body.find("span"))
      console.log('Elementos com classes "tag" ou "badge":', $body.find('[class*="tag"], [class*="badge"]'))
    })
  })
})
