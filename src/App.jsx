import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/main/home'
import Create from './components/crud/create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-zinc-800'>
      <Create/>
    </div>
  )
}

export default App
