import { Paper, Typography, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { CardGiftcard } from "@mui/icons-material";
import Button from "../Button/Button";

interface BirthdayCardProps {
  id: number;
  name: string;
  lastName: string;
  birthdayDate: string; // exact date e.g. "Oct 20, 2025"
  daysLeft: number;
  onWishlistClick: (id: number) => void;
  onOrganize: (id: number) => void;
  onContribute: (id: number) => void;
}

const BirthdayCard = ({
  id,
  name,
  lastName,
  birthdayDate,
  daysLeft,
  onWishlistClick,
  onOrganize,
  onContribute,
}: BirthdayCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "grey.200",
          "&:hover": {
            borderColor: "#6c69ff",
            boxShadow: 6,
          },
        }}
      >
        {/* Top Row */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
            }}
          >
            {name[0]}
            {lastName[0]}
          </Box>

          {/* Info */}
          <Box sx={{ flex: 1, ml: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {name} {lastName}’s Birthday Celebration
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {birthdayDate} • {daysLeft} days left
            </Typography>
          </Box>

          {/* Wishlist button */}
          <IconButton
            onClick={() => onWishlistClick(id)}
            sx={{
              bgcolor: "#ffbe3d",
              color: "white",
              "&:hover": { bgcolor: "#fe7475" },
              width: 48,
              height: 48,
            }}
          >
            <CardGiftcard />
          </IconButton>
        </Box>

        {/* Bottom Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}>
          <Button type="button" content="Organize" handleClick={() => onOrganize(id)} variant="primary" />
          <Button type="button" content="Contribute" handleClick={() => onContribute(id)} variant="secondary" />
        </Box>
      </Paper>
    </motion.div>
  );
};

export default BirthdayCard;
