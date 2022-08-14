import { TNTApp } from "https://cdn.jsdelivr.net/npm/tntjs@latest/dist/src/index.js"

const app = new TNTApp()

app.page({
  data: {
    nameList: [
      "Alice",
      "Bob",
      "Candy"
    ]
  },
  computed: {
    all() {
      return data.nameList.length
    }
  },
  mount: document.getElementById("app")
}, "list")

export default app;
