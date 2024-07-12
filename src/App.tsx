import '@styles/App.scss'
import { HomeScreen, ContactScreen, PortfolioScreen, ProjectDetailsScreen } from '@screens'
import { Route, Routes } from 'react-router-dom'




const App: React.FC = () => {
	return (
		<>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/portfolio" element={<PortfolioScreen />} />
					<Route path="/portfolio/:projectId" element={<ProjectDetailsScreen />} />
					{/* <Route path="/about" element={<PDF />} /> */}
					{/* <Route path="/about" element={<h1>About</h1>} /> */}
					<Route path="/contact" element={<ContactScreen />} />
				</Routes>
			</div>
		</>
	)
}

export default App
