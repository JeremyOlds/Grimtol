import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  zones: [
    { name: "Main Street", description: "You are At the Main Street", events: ["Inn", "Plaza", "Alleyway"] },
    { name: "Inn", description: "You are at the Inn", events: ["InnKeeper", "Main Street"] }
  ],

  activeZone: { name: "Main Street", description: "You are At the Main Street", events: ["Inn", "Plaza", "Alleyway"] },

  events: [
    { name: "Inn", description: "A Large Inn with lights flickering through the windows" },
    { name: "Plaza", description: "A Large Plaza with multiple buildings circling it." }
  ]

})
