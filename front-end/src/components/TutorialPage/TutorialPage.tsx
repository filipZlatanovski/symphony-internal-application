import TutorialCards from "../TutorialCards/TutorialCards";
import { tutorialCardsData } from "../../lib/data";
import Button from "../Button/Button";

interface TutorialPageProps {
  headerTitle: string;
  description: string;
}

export default function TutorialPage({
  headerTitle,
  description,
}: TutorialPageProps) {
  return (
    <>
      <h1 className="text-center mt-[15rem] font-[Poppins] text-4xl font-bold">
        {headerTitle}
      </h1>
      <p className="font-[Poppins] text-center mt-10 font-light text-xl">
        {description}
      </p>
      <div className="lg:flex justify-center items-center mt-10">
        {tutorialCardsData.map((data) => (
          <TutorialCards
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-[5rem]">
        <Button
          type="button"
          disabled={false}
          content={"Get Started →"}
          handleClick={() => {
            console.log("it should re-route to the homepage");
          }}
        />
      </div>
    </>
  );
}
