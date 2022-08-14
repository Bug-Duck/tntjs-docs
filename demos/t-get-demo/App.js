import { TNTApp } from "https://cdn.jsdelivr.net/npm/tntjs@latest/dist/src/index.js"

const app = new TNTApp()

app.page({
  mount: document.getElementById("app")
}, "t-get-demo")

export default app;
