// src/components/Chatbot.tsx
import { useState, useEffect } from "react"
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material"
import { motion } from "framer-motion"
import OpenAI from "openai"

const pythonChallenges = [
  "Write a Python function to reverse a string.",
  "Create a Python program to check if a number is prime.",
  "Write a function to calculate the factorial of a number.",
  "Develop a Python program to find the largest number in a list.",
]

export default function Chatbot() {

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser:true
  });

  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [challenge, setChallenge] = useState<string>("")

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory")
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages))
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    setMessages([...messages, { text: input, sender: "user" }])
    setInput("")
    setLoading(true)

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
          {
            role: "developer",
            content: [
              {
                type: "text",
                text: `
                You are a helpful assistant that answers python programming 
                questions in a way for kids to learn & understand.
              `,
              },
            ],
          },
          { role: "user", content: input },
        ],
      });

      console.log(completion)
      const botResponse =
        completion.choices?.[0]?.message?.content || "I couldn't understand that."

      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: botResponse, sender: "bot" },
      ])
    } catch (err) {
      setMessages([
        ...messages,
        { text: "Error communicating with AI", sender: "bot" },
      ])
      console.log(err)
    }
    setLoading(false)
  }

  const generateChallenge = () => {
    const randomChallenge =
      pythonChallenges[Math.floor(Math.random() * pythonChallenges.length)]
    setChallenge(randomChallenge)
  }

  return (
    <Box className='bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-xl w-full h-[85vh] flex flex-col items-center'>
      <Typography variant='h5' className='text-white font-bold !mb-4'>
        AI Python Tutor 🤖
      </Typography>
      <Paper
        elevation={5}
        className='w-full p-4 bg-white rounded-lg mb-4 overflow-auto h-64'>
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-2 my-1 rounded-lg ${
              msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-200"
            }`}>
            {msg.text}
          </motion.div>
        ))}
      </Paper>
      <TextField
        fullWidth
        variant='outlined'
        placeholder='Ask something about Python...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='!mb-2'
      />
      <Button
        variant='contained'
        color='secondary'
        onClick={handleSend}
        className='!mb-2'>
        {loading ? <CircularProgress size={24} /> : "Send"}
      </Button>
      <Button variant='contained' color='success' onClick={generateChallenge}>
        Get a Python Challenge 🏆
      </Button>
      {challenge && (
        <Typography variant='h6' className='!mt-4 text-white'>
          Challenge: {challenge}
        </Typography>
      )}
    </Box>
  )
}
