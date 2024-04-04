import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/styles/index.scss'
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import { App } from "@/app";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
