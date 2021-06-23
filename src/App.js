import Card from './components/card/Card'
import './App.css'
import { cats } from './robots'

function App() {
	return (
		<div className='p-20'>
			{cats.map((cat) => (
				<Card 
          key={cat.id} 
          name={cat.name} 
          email={cat.email} 
        />
			))}
		</div>
	)
}

export default App
