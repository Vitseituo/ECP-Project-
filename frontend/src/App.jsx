import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatbotButton from './components/ChatbotButton'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import Chatbot from './pages/Chatbot'
import './App.css'

function App() {
  const location = useLocation()
  const isChatPage = location.pathname === '/chatbot'

  return (
    <div className={`app ${isChatPage ? 'app-chat-only' : ''}`}>
      {!isChatPage && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </main>
      {!isChatPage && <Footer />}
      <ChatbotButton />
    </div>
  )
}

export default App
