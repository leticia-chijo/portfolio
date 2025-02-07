import App from "./App.tsx"
import { GlobalStyle } from "./styles/GlobalStyle.tsx"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)
