"use client";
import { useRouter } from "next/navigation";

const homepage = () => {
  const { push } = useRouter();
  return (
    <div>
      <button onClick={() => push("/sign-up")}>sign up</button>
    </div>
  );
};

export default homepage;
