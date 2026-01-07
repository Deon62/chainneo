import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhoItsFor from './components/WhoItsFor'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhoItsFor />
    </div>
  )
}

export default App
