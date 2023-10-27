import React from 'react'
import ReactDOM from 'react-dom/client'

import TodoApp from './Components/TodoApp/TodoApp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
)
