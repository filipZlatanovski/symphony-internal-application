import { Paper, Typography, Stack } from "@mui/material";
import BirthdayCard from '../BirthdayCard/BirthdayCard.tsx'

interface MonthSectionProps {
  month: string;
  birthdays: { id: number; name: string; lastName: string; daysLeft: number }[];
  onCardClick: (id: number) => void;
}

const MonthSection: React.FC<MonthSectionProps> = ({ month, birthdays, onCardClick }) => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>{month}</Typography>
      <Stack spacing={2}>
        {birthdays.map((b) => (
          <BirthdayCard 
            key={b.id}
            name={b.name}
            lastName={b.lastName}
            daysLeft={b.daysLeft} id={0} birthdayDate={""} onWishlistClick={function (id: number): void {
              throw new Error("Function not implemented.");
            } } onOrganize={function (id: number): void {
              throw new Error("Function not implemented.");
            } } onContribute={function (id: number): void {
              throw new Error("Function not implemented.");
            } }                // onClick={() => onCardClick(b.id)} id={0}          
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default MonthSection;
