import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { NavigationProvider } from "./Components/Contexts/navigationContext";
import { LoginProvider } from './Components/Contexts/loginContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LoginProvider>
      <NavigationProvider>
       <App />
      </NavigationProvider>
    </LoginProvider>
      </BrowserRouter>
  // </StrictMode>,
)
