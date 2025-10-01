import { Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface BirthdayCardProps {
  id: number;
  name: string;
  lastName: string;
  daysLeft: number;
  onClick: (id: number) => void;
}

const BirthdayCard = ({ id, name, lastName, daysLeft, onClick }: BirthdayCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Paper
        sx={{
          p: 3,
          cursor: "pointer",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "grey.200",
          "&:hover": {
            borderColor: "#6c69ff",
            boxShadow: 6,
          },
        }}
        onClick={() => onClick(id)}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Avatar initials */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              bgcolor: "#fe7475",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
              "&:hover": { bgcolor: "#6c69ff" },
            }}
          >
            {name[0]}{lastName[0]}
          </Box>

          {/* Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", "&:hover": { color: "#6c69ff" } }}>
              {name} {lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Birthday celebration
            </Typography>
          </Box>

          {/* Days left */}
          <Box textAlign="right">
            <Typography variant="h6" color="#6c69ff" fontWeight="bold">
              {daysLeft} days
            </Typography>
            <Typography variant="body2" color="text.secondary">
              until celebration
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ color: "#6c69ff", fontSize: "0.875rem", marginTop: 4 }}
            >
              Click to contribute →
            </motion.div>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default BirthdayCard;
