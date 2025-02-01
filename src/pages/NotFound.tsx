import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 to-yellow-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-10 text-center w-3/4"
      >
        <Typography variant="h2" className="font-bold text-red-600 !mb-4">
          🚧 Oops! Page Not Found
        </Typography>
        <Typography variant="h6" className="text-gray-600 !mb-6">
          Looks like you took a wrong turn... 🤖💨
        </Typography>
        <Typography variant="body1" className="text-gray-500 !mb-6">
          Don’t worry! Let's get you back on track. Click below to return home.
        </Typography>
        
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => navigate("/")}
            className="rounded-full px-6 py-3 text-lg"
          >
            Go Home 🏡
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
