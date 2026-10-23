import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sendChatMessage } from '../services/chatService'

const INITIAL_BOT =
  'Hello! I am the college virtual assistant. How can I help you?'

const SUGGESTIONS = [
  'What courses are offered?',
  'What is the admission process?',
  'What facilities are available?',
  'How can I contact the college?',
  'What are the eligibility requirements?',
]

const ERROR_MESSAGE =
  "Sorry, I couldn't process your question right now. Please try again."

export default function Chatbot() {
  const [messages, setMessages] = useState([{ role: 'bot', text: INITIAL_BOT }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function submitQuestion(text) {
    const question = text.trim()
    if (!question || loading) return

    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')
    setLoading(true)

    try {
      const answer = await sendChatMessage(question)
      setMessages((prev) => [...prev, { role: 'bot', text: answer }])
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: ERROR_MESSAGE }])
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    submitQuestion(input)
  }

  return (
    <div className="chat-page">
      <header className="chat-header">
        <div className="container chat-header-inner">
          <div>
            <Link to="/" className="chat-back">
              ← Back to site
            </Link>
            <h1>College AI Assistant</h1>
          </div>
        </div>
      </header>

      <div className="chat-body container">
        <div className="chat-messages" role="log" aria-live="polite" aria-relevant="additions">
          {messages.map((msg, i) => (
            <div
              key={`${msg.role}-${i}`}
              className={`chat-bubble ${msg.role === 'user' ? 'user' : 'bot'}`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="chat-bubble bot loading" aria-label="Assistant is typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {messages.length === 1 && !loading && (
          <div className="suggestions">
            <p>Suggested questions:</p>
            <div className="suggestion-list">
              {SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="suggestion-chip"
                  onClick={() => submitQuestion(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <form className="chat-input-bar" onSubmit={handleSubmit}>
        <div className="container chat-input-inner">
          <label htmlFor="chat-input" className="sr-only">
            Your message
          </label>
          <input
            id="chat-input"
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary" disabled={loading || !input.trim()}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
