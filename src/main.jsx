import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
