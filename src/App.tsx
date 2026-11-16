import '@styles/App.scss'
import { HomeScreen, ContactScreen } from '@screens'
import { Route, Routes } from 'react-router-dom'
import SupportScreen from './screens/SupportScreen'

const App: React.FC = () => {
	if (new URLSearchParams(window.location.search).has('support')) return <SupportScreen />
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
