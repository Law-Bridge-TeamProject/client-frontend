"use client";
import { useRouter } from "next/navigation";

const homepage = () => {
  const { push } = useRouter();
  return <div>homepage</div>;
};

export default homepage;
