import { FaReact } from 'react-icons/fa'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold flex items-center gap-2">
        <FaReact className="text-primary" />
        assignment-devstack
      </h1>
      <button className="btn btn-primary">Get Started</button>
    </div>
  )
}

export default App
