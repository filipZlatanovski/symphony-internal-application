import LoginPage from "./components/LoginPage/LoginPage";
import TutorialPage from "./components/TutorialPage/TutorialPage";
import symphonyLogoImagef from "./assets/BirthdayPlanner.svg";

export default function App() {
  return (
    <>
      <LoginPage imageSrc={symphonyLogoImagef} />
      <TutorialPage
        headerTitle={"Welcome to the official Symphony Birthday Planner! 🎉"}
        description={"A small walkthrough of the app functionalities!"}
      />
    </>
  );
}
