import { CircularProgress, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <Box className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-300 to-pink-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CircularProgress color="primary" size={60} />
      </motion.div>
      <Typography variant="h6" className="text-white mt-4">
        Loading... Please wait 🕓
      </Typography>
    </Box>
  );
}
