import LoginPage from "./components/LoginPage/LoginPage";
import symphonyLogoImagef from "./assets/Symphony LOGO 2024_Purple-01.png";

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
