import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Tab visibility handler
const originalTitle = document.title;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = 'Please come back 🥺';
  } else {
    document.title = originalTitle;
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
