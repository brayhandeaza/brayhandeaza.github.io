import '@styles/App.scss'
import { HomeScreen, ContactScreen } from '@screens'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
	return (
		<>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/contact" element={<ContactScreen />} />
				</Routes>
			</div>
		</>
	)
}

export default App
