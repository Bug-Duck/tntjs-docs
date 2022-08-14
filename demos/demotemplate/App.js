import { TNTApp } from "https://cdn.jsdelivr.net/npm/tntjs@latest/dist/src/index.js"

const app = new TNTApp()

app.page({
  data: {
    number: 1
  },
  computed: {
    isOddOrEven() {
      if (data.number % 2 === 0) return "Even" 
      else return "Odd"; 
    }
  },
  mount: document.getElementById("app")
}, "comput")

export default app;
