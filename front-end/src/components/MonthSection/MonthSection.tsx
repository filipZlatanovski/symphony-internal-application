import { Paper, Typography } from '@mui/material';
import BirthdayCard from '../BirthdayCard/BirthdayCard';

interface Birthday {
  id: number;
  name: string;
  lastName: string;
  daysLeft: number;
}

interface MonthSectionProps {
  month: string;
  birthdays: Birthday[];
  onBirthdayClick: (birthday: Birthday) => void;
}

export default function MonthSection({ month, birthdays, onBirthdayClick }: MonthSectionProps) {
  return (
    <Paper 
      className="rounded-2xl shadow-sm p-6"
      sx={{ backgroundColor: 'white' }}
    >
      <Typography 
        variant="h5" 
        className="mb-6 border-b border-gray-100 pb-3"
        sx={{ 
          fontFamily: 'Poppins',
          fontWeight: 600,
          color: 'text.primary'
        }}
      >
        {month}
      </Typography>
      
      <div className="space-y-4">
        {birthdays.map((birthday) => (
          <BirthdayCard
            key={birthday.id}
            birthday={birthday}
            onClick={onBirthdayClick}
          />
        ))}
      </div>
    </Paper>
  );
}