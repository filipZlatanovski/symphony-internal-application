type TutorialCardsData = {
  id: number;
  title: string;
  description: string;
};

type TutorialPageHeadings = {
  headerTitle: string;
  descriptionTitle: string;
};

export const tutorialPageHeadings: TutorialPageHeadings = {
  headerTitle: "Welcome to the official Symphony Birthday Planner 🎉",
  descriptionTitle:
    "Here is a small walkthrough of what to expect from the app!",
};

export const tutorialCardsData: TutorialCardsData[] = [
  {
    id: 1,
    title: "Organize A Birthday",
    description:
      "Plan the perfect celebration. Set yourself as an organizer, collect funds and buy the perfect gift.",
  },
  {
    id: 2,
    title: "Contribute To A Birthday",
    description:
      "Join in on the fun! You can chip in for a group gift and offer your time to make someone’s special day even better.",
  },
  {
    id: 3,
    title: "View Birthdays",
    description:
      "Keep track of all upcoming celebrations. See who’s next, check event details and never miss a birthday again.",
  },
];
