import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from '../routers/AppRouter'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)
