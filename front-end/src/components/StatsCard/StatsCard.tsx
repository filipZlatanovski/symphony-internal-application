import { Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface StatsCardProps {
  label: string;
  value: number;
  sublabel: string;
}

const StatsCard = ({ label, value, sublabel }: StatsCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Paper
        sx={{
          p: 3,
          backgroundColor: "white",
          borderRadius: 3,
          boxShadow: 2,
          "&:hover": { boxShadow: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          {value}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {sublabel}
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default StatsCard;
