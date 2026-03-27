import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<div style={{ padding: '80px 60px', fontFamily: 'var(--font-heading)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase' }}>Work — Coming Soon</div>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<div style={{ padding: '80px 60px', fontFamily: 'var(--font-heading)', fontSize: '48px', fontWeight: 900, textTransform: 'uppercase' }}>Contact — Coming Soon</div>} />
      </Route>
    </Routes>
  )
}

export default App
