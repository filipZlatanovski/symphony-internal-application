import React from "react";

import Button from "../Button/Button";

interface LoginPageProps {
  imageSrc: string;
  imageAlt?: string;
  onClick: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  imageSrc,
  imageAlt,
  onClick,
}) => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <img className="pb-5 w-100" src={imageSrc} alt={imageAlt} />
      <Button
        type="button"
        disabled={false}
        content="Sign-Up using google auth"
        handleClick={onClick}
      />
    </div>
  );
};

export default LoginPage;
