import { Paper } from '@mui/material';
import { motion } from 'motion/react';

interface StatsCardProps {
  value: string;
  label: string;
  sublabel: string;
}

export default function StatsCard({ value, label, sublabel }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Paper 
        className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        sx={{ 
          backgroundColor: 'white',
          '&:hover': {
            boxShadow: 4
          }
        }}
      >
        <div className="text-3xl font-bold text-gray-900 font-[Poppins] mb-2">
          {value}
        </div>
        <div className="text-lg font-semibold text-gray-900 font-[Poppins] mb-1">
          {label}
        </div>
        <div className="text-sm text-gray-600 font-[Poppins]">
          {sublabel}
        </div>
      </Paper>
    </motion.div>
  );
}