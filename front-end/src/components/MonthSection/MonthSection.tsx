import { Paper, Typography, Stack, Box } from "@mui/material";
import BirthdayCard from "../BirthdayCard/BirthdayCard.tsx";
import {
  monthSelectionContainer,
  monthSelectionMonthText,
  monthSelectionStack,
  monthSelectionBox,
} from "./monthSelection.styles.ts";

interface MonthSectionProps {
  month: string;
  birthdays: { id: number; name: string; lastName: string; daysLeft: number }[];
  onOrganizeButtonClick: (id: number) => void;
  onContributeButtonClick: (id: number) => void;
  onWishlistButtonClick: (id: number) => void;
  // These 2 will change to string[]
  contributorDisabledIds: number[];
  organizerDisabledIds: number[];
}

export default function MonthSection({
  month,
  birthdays,
  onContributeButtonClick,
  onOrganizeButtonClick,
  onWishlistButtonClick,
  contributorDisabledIds,
  organizerDisabledIds,
}: MonthSectionProps) {
  return (
    <Paper sx={monthSelectionContainer}>
      <Typography sx={monthSelectionMonthText}>{month}</Typography>
      <Stack spacing={2} sx={monthSelectionStack}>
        {birthdays.map((b) => (
          <Box key={b.id} sx={monthSelectionBox}>
            <BirthdayCard
              name={b.name}
              lastName={b.lastName}
              daysLeft={b.daysLeft}
              id={b.id}
              birthdayDate={""}
              onWishlistClick={onWishlistButtonClick}
              onOrganize={onOrganizeButtonClick}
              onContribute={onContributeButtonClick}
              contributorDisabledIds={contributorDisabledIds}
              organizerDisabledIds={organizerDisabledIds}
            />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
