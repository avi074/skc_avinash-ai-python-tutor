import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-lg p-10 text-center w-3/4"
      >
        <Typography variant="h3" className="font-bold text-blue-600 !mb-4">
          🎉 Welcome to AI Python Tutor!
        </Typography>
        <Typography variant="h6" className="text-gray-600 !mb-6">
          This is a **fun and interactive** way to learn Python, designed for **kids & beginners**! 🚀
        </Typography>
        <Typography variant="body1" className="text-gray-500 !mb-6">
          🐍 Write Python code, chat with the AI, and level up your skills in an engaging way!
        </Typography>
        
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate("/")}
            className="rounded-full px-6 py-3 text-lg"
          >
            Back to Home 🏡
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
