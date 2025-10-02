import { Paper, Typography, Stack } from "@mui/material";
import BirthdayCard from "../BirthdayCard/BirthdayCard.tsx";

interface MonthSectionProps {
  month: string;
  birthdays: { id: number; name: string; lastName: string; daysLeft: number }[];
  onOrganizeButtonClick: (id: number) => void;
  onContributeButtonClick: (id: number) => void;
  onWishlistButtonClick: (id: number) => void;
}

const MonthSection: React.FC<MonthSectionProps> = ({
  month,
  birthdays,
  onContributeButtonClick,
  onOrganizeButtonClick,
  onWishlistButtonClick,
}) => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        {month}
      </Typography>
      <Stack spacing={2}>
        {birthdays.map((b) => (
          <BirthdayCard
            key={b.id}
            name={b.name}
            lastName={b.lastName}
            daysLeft={b.daysLeft}
            id={0}
            birthdayDate={""}
            onWishlistClick={onWishlistButtonClick}
            onOrganize={onOrganizeButtonClick}
            onContribute={onContributeButtonClick}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default MonthSection;
