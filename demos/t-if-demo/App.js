import { TNTApp } from "https://cdn.jsdelivr.net/npm/tntjs@latest/dist/src/index.js"

const app = new TNTApp()

app.page({
  data: {
    islogin: false
  },
  mount: document.getElementById("app")
}, "main-page")

app.page({
  data: {
    message: "",
  },
  mount: document.getElementById("app")
}, "login")

export default app ;
