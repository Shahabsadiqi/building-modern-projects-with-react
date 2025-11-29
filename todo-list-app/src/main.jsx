import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { TodoSlice } from './todoSlice'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'


const store = configureStore({
  reducer: {
    todos : TodoSlice.reducer,
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
