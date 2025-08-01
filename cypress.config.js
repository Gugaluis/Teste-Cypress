const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://kanban-dusky-five.vercel.app",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    
    setupNodeEvents(on, config) {
      // Esta função roda no contexto Node.js
      // Aqui você pode adicionar plugins que rodam no servidor
      // como cypress-mochawesome-reporter, cypress-terminal-report, etc.
      
      return config;
    },
  },
});