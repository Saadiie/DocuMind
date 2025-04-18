"use client"

import { useState, useEffect } from "react"
import { signOut } from "next-auth/react"
import { LogOut, Plus, Search, ChevronDown, ChevronUp, X, User, CreditCard, Menu } from "lucide-react"
import { SubmitButton } from "./SubmitButton"

export default function DocumindDashboard() {
  const [chats, setChats] = useState([
    { id: 1, title: "Previous Chat 1", date: "2023-05-01" },
    { id: 2, title: "Previous Chat 2", date: "2023-05-02" },
    { id: 3, title: "Previous Chat 3", date: "2023-05-03" },
  ])
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isChatsExpanded, setIsChatsExpanded] = useState(false)
  const [userName, setUserName] = useState("Saad Rajpoot")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredChats, setFilteredChats] = useState(chats)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setFilteredChats(chats.filter((chat) => chat.title.toLowerCase().includes(searchQuery.toLowerCase())))
  }, [searchQuery, chats])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsGenerating(true)
    setMessages([...messages, { type: "user", content: input }])

    try {
      const response = await fetch("/api/llama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessages((prev) => [...prev, { type: "ai", content: data[0]?.generated_text || "No response" }])
      } else {
        setMessages((prev) => [...prev, { type: "ai", content: `Error: ${data.error}` }])
      }
    } catch (error) {
      setMessages((prev) => [...prev, { type: "ai", content: "Failed to fetch response." }])
    }

    setIsGenerating(false)
    setInput("")
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    if (isSearchOpen) setIsSearchOpen(false)
  }

  const toggleChatsExpanded = () => setIsChatsExpanded(!isChatsExpanded)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const addNewChat = () => {
    const newChat = {
      id: chats.length + 1,
      title: `New Chat ${chats.length + 1}`,
      date: new Date().toISOString().split("T")[0],
    }
    setChats([newChat, ...chats])
    setMessages([])
    setInput("")
  }

  return (
    <div className="flex flex-col h-screen bg-secondary text-primary">
      <header className="bg-primary text-primary-foreground p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <button onClick={toggleSidebar} className="mr-2">
              <Menu className="w-6 h-6" />
            </button>
          )}
          <div className="w-8 h-8 bg-white rounded-full mr-2" />
          <h1 className="text-2xl font-bold">Documind</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-2 hidden sm:inline">Welcome, {userName}</span>
          <User className="w-8 h-8" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {isSidebarOpen && (
          <aside className="w-full sm:w-64 bg-accent text-accent-foreground flex flex-col absolute sm:relative z-10 h-full">
            <div className="p-4 flex justify-between items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-secondary hover:text-secondary-foreground rounded transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <button
                onClick={toggleSearch}
                className="p-2 hover:bg-secondary hover:text-secondary-foreground rounded transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
            {isSearchOpen && (
              <div className="px-4 mb-4">
                <input
                  type="text"
                  placeholder="Search chats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 rounded-md bg-white text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}
            <div className="p-4">
              <button
                onClick={addNewChat}
                className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                <Plus className="mr-2" /> New Chat
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Previous Chats</h2>
                <button onClick={toggleChatsExpanded}>
                  {isChatsExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
              </div>
              <ul>
                {filteredChats.map((chat) => (
                  <li key={chat.id} className="mb-2">
                    <button className="w-full text-left p-2 hover:bg-secondary hover:text-secondary-foreground rounded transition-colors">
                      <div className="font-bold">{chat.title}</div>
                      {isChatsExpanded && <div className="text-sm text-accent-foreground/70">{chat.date}</div>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4">
              <button className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-opacity-90 transition-colors mb-2 flex items-center justify-center">
                <CreditCard className="mr-2" /> Upgrade Plan
              </button>
              <button
                className="w-full p-2 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground rounded transition-colors"
                onClick={() => signOut({ callbackUrl: "/signin" })}
              >
                <LogOut className="mr-2" />
                Sign Out
              </button>
            </div>
          </aside>
        )}

        <main className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 bg-secondary">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 p-4 rounded-lg max-w-3xl ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="p-4 bg-accent border-t border-primary/10">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 p-2 rounded-l-md bg-white text-primary"
              />
              <SubmitButton isGenerating={isGenerating} />
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

