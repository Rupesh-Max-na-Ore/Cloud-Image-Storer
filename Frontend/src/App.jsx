import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// use react router to be able to see different pages/components in different paths,

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </Router>
  )
}

export default App
