// components
import Header from './components/layout/Header'
import Selection from './components/Selection'

function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-50 font-sans">
      <div className="flex-col items-center h-full">
        <Header />
        <Selection />
      </div>
    </div>
  )
}

export default App
