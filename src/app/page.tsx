import { SignedOut } from "@clerk/nextjs";
import MainPage from "./(landing-page)/MainPage";

const homepage = () => {
  return (
    <div>
      <SignedOut>
        <MainPage />
      </SignedOut>
    </div>
  );
};

export default homepage;
