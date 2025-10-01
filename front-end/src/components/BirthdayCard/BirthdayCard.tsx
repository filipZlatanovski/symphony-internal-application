import { Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  birthdayCardPaperStyles,
  birthdayCardBoxStyles,
  birthdayCardAvatarStyles,
} from "./birthdayCard.styles";

interface BirthdayCardProps {
  id: number;
  name: string;
  lastName: string;
  daysLeft: number;
  onClick: (id: number) => void;
}

const BirthdayCard = ({
  id,
  name,
  lastName,
  daysLeft,
  onClick,
}: BirthdayCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Paper sx={birthdayCardPaperStyles} onClick={() => onClick(id)}>
        <Box sx={birthdayCardBoxStyles}>
          {/* Avatar initials */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            sx={birthdayCardAvatarStyles}
          >
            {name[0]}
            {lastName[0]}
          </Box>

          {/* Info */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", "&:hover": { color: "#6c69ff" } }}
            >
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
