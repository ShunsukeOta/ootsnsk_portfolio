import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { AuthWrapper } from './components/AuthWrapper';
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Provider>
      <AuthWrapper>
          <App />
    </AuthWrapper>
        </Provider>
  </StrictMode>
)
