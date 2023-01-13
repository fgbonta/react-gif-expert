import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //modo strict se aplica solo en desarrollo
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
