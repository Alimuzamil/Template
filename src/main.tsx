import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
