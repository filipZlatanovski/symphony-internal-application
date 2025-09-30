import { Paper } from '@mui/material';
import { motion } from 'motion/react';

interface BirthdayCardProps {
  birthday: {
    id: number;
    name: string;
    lastName: string;
    daysLeft: number;
  };
  onClick: (birthday: any) => void;
}

export default function BirthdayCard({ birthday, onClick }: BirthdayCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Paper 
        className="p-6 rounded-2xl border border-gray-200 hover:border-[#6c69ff] cursor-pointer group transition-all duration-300"
        sx={{ 
          backgroundColor: 'white',
          '&:hover': {
            boxShadow: 6,
            borderColor: '#6c69ff'
          }
        }}
        onClick={() => onClick(birthday)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="w-16 h-16 bg-[#fe7475] rounded-full flex items-center justify-center text-white font-semibold text-xl group-hover:bg-[#6c69ff] transition-all duration-300"
            >
              {birthday.name[0]}{birthday.lastName[0]}
            </motion.div>
            <div>
              <h4 className="font-semibold text-gray-900 font-[Poppins] text-xl group-hover:text-[#6c69ff] transition-colors duration-300">
                {birthday.name} {birthday.lastName}
              </h4>
              <p className="text-gray-600 font-[Poppins]">
                Birthday celebration
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold text-[#6c69ff] font-[Poppins] mb-1"
            >
              {birthday.daysLeft} days
            </motion.div>
            <div className="text-sm text-gray-600 font-[Poppins]">
              until celebration
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-[#6c69ff] text-sm font-[Poppins] font-medium"
            >
              Click to contribute →
            </motion.div>
          </div>
        </div>
      </Paper>
    </motion.div>
  );
}