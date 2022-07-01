import { Card } from '../../components/Card'
import './styles.css'

const handleClick = (id: string) => {
  console.log(id)
}

export function App() {
  return (
    <div className="app">
      <Card id="1" back="🐍" flipped handleClick={handleClick} />
      <Card id="2" back="🐍" handleClick={handleClick} />
      <Card id="3" back="🐍" flipped handleClick={handleClick} />
    </div>
  )
}

export default App
