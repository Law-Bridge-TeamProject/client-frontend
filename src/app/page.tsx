"use client";

import { useQueryQuery } from "@/generated";

const Home = () => {
  const { data, loading, error } = useQueryQuery();
  console.log(data);
  
  return (
    <div>Home</div>
  )
}

export default Home