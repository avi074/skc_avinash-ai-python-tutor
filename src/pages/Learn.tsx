import { Container, Typography, Box, Button } from "@mui/material"
import CodeEditor from "../components/CodeEditor"
import Chatbot from "../components/ChatBot"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Learn = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 to-pink-200 p-6'>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='md:w-[90%]'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => navigate("/")}
            className='rounded-full px-6 py-3 text-lg'>
            Back to Home 🏡
          </Button>
        <Container
          maxWidth='xl'
          className='bg-white shadow-lg rounded-lg p-6 !mt-3'>
          <Typography
            variant='h4'
            className='font-bold text-green-600 text-center !mb-4'>
            🐍 AI Python Tutor for Kids
          </Typography>


          {/* Flexbox for layout instead of Grid */}
          <Box
            display='flex'
            flexDirection={{ xs: "column", md: "row" }}
            gap={4}
            className='w-full items-center'>
            <Box flex='1' className='w-10/12'>
              <CodeEditor />
            </Box>
            <Box flex='1' className='w-10/12'>
              <Chatbot />
            </Box>
          </Box>
        </Container>
      </motion.div>
    </div>
  )
}

export default Learn
