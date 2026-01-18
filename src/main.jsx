import { act, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const counterReduce = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  if (action.type === 'DECREMENT') {
    return state - 1
  }
  return state
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
