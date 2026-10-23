import { useNavigate, useLocation } from 'react-router-dom'

export default function ChatbotButton() {
  const navigate = useNavigate()
  const location = useLocation()

  if (location.pathname === '/chatbot') {
    return null
  }

  return (
    <button
      type="button"
      className="chatbot-fab"
      aria-label="Open college AI assistant chat"
      onClick={() => navigate('/chatbot')}
    >
      <span className="chatbot-fab-icon" aria-hidden="true">
        🤖
      </span>
    </button>
  )
}
