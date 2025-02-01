import { Button, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-green-300">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Container 
          maxWidth="md" 
          className="bg-white shadow-lg rounded-2xl p-8 text-center"
        >
          {/* Title Animation */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Typography variant="h3" className="font-bold text-blue-600 mb-3">
              🐍 AI Python Tutor
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <Typography variant="h5" className="text-gray-600 mb-6">
            Learn Python the Fun Way!
          </Typography>

          {/* Python Mascot Image */}
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            alt="Python Logo"
            className="w-40 mx-auto my-4"
            initial={{ rotate: -10 }}
            animate={{ rotate: 10 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", yoyo: true }}
          />

          {/* Call-to-Action Buttons */}
          <Box display="flex" justifyContent="center" gap={3} className="mt-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/learn")}
                className="rounded-full px-6 py-3 text-lg"
              >
                Start Learning 🚀
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/about")}
                className="rounded-full px-6 py-3 text-lg"
              >
                About Us 📖
              </Button>
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    </div>
  );
}
