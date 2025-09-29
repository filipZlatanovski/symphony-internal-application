import LoginPage from "./components/LoginPage/LoginPage";
import symphonyLogoImagef from "./assets/BirthdayPlanner.svg";

export default function App() {
  return (
    <>
      <LoginPage
        buttonText={"Google Auth button here"}
        imageSrc={symphonyLogoImagef}
      />
    </>
  );
}
