import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//product provider
import ProductProvider from './contexts/ProductContext.tsx'
//sidebar provider
import SidebarProvider from './contexts/SidebarContext.tsx'
//cart provider
import CartProvider from './contexts/CartContext.tsx'



createRoot(document.getElementById('root')!).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
