import '@styles/App.scss'
import { HomeScreen } from '@screens'
import { Route, Routes } from 'react-router-dom'
import { Header } from '@components'

const App: React.FC = () => {
	return (
		<div className='App'>
			 <Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/portfolio" element={<h1>Portfolio</h1>} />
				<Route path="/about" element={<h1>About</h1>} />
				<Route path="/skills" element={<h1>Skills</h1>} />
			</Routes>
		</div>
	)
}

export default App
