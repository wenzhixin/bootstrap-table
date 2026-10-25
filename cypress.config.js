import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  screenshot: false,
  e2e: {
    setupNodeEvents () {
      // No custom plugins needed
    }
  }
})
