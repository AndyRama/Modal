import React from 'react'
import { createRoot } from 'react-dom/client'

import Exemple from './exemple'

const root = document.getElementById('root')
createRoot(root).render(
  <React.StrictMode>
    <Exemple />
  </React.StrictMode>
)
