import { Paper, Typography, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { CardGiftcard } from "@mui/icons-material";
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";
import {
  birthdayCardTopRow,
  birthdayCardAvatarStyles,
  birthdayCardWishlistButtonStyles,
  birthdayCardButtonsContainer,
  birthdayCardStyles,
  birthdayCardTypographyStyles,
  birthdayCardDaysLeftTextStyles,
} from "./birthdayCard.styles";

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
      <Paper sx={birthdayCardStyles}>
        <Box sx={birthdayCardTopRow}>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            sx={birthdayCardAvatarStyles}
          >
            {name[0]}
            {lastName[0]}
          </Box>

          {/* Info */}
          <Box sx={{ flex: 1, ml: { xs: 0, sm: 2 } }}>
            <Typography variant="h6" sx={birthdayCardTypographyStyles}>
              {name} {lastName}’s Birthday Celebration
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={birthdayCardDaysLeftTextStyles}
            >
              {birthdayDate} • {daysLeft} days left
            </Typography>
          </Box>

          {/* Wishlist button */}
          <Tooltip title={`${name}'s wishlist`} arrow placement="top">
            <IconButton
              onClick={() => onWishlistClick(id)}
              sx={birthdayCardWishlistButtonStyles}
            >
              <CardGiftcard />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={birthdayCardButtonsContainer}>
          <Button
            type="button"
            content="Organize"
            handleClick={() => onOrganize(id)}
            variant="primary"
          />
          <Button
            type="button"
            content="Contribute"
            handleClick={() => onContribute(id)}
            variant="secondary"
          />
        </Box>
      </Paper>
    </motion.div>
  );
};

export default BirthdayCard;
