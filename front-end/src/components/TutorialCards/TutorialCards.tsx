import { motion } from "motion/react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TutorialCardsProps {
  title: string;
  description: string;
}

const TutorialCard = styled(Paper)(({ theme }) => ({
  width: 280,
  height: 280,
  padding: theme.spacing(3),
  backgroundColor: "#ffbe3d",
  borderRadius: 20,
}));

export default function TutorialCards({
  title,
  description,
}: TutorialCardsProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -10,
      }}
    >
      <TutorialCard className="m-5 p-4 cursor-default" square={false}>
        <h2 className="text-center font-[Poppins] font-extrabold mb-10">
          {title}
        </h2>
        <span className="font-[Poppins]">{description}</span>
      </TutorialCard>
    </motion.div>
  );
}
