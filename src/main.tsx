import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// styles
import '@styles/3d154874070ad04c.css'
import '@styles/86e580afbb8b7751.css'
import '@styles/index.scss'
import '@styles/responsive.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
