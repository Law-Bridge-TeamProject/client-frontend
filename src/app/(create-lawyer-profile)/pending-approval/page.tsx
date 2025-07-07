"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useGetSpecializationsQuery } from "@/generated";

export const LawyerPendingPage = () => {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const fetchToken = async () => {
      if (isSignedIn) {
        const token = await getToken();
        console.log("Bearer Token:", token);
        console.log(process.env.BACKEND_URL);
        

        const res = await fetch("/api/some-endpoint", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log("Response from API:", data);
      }
    };

    fetchToken();
  }, [getToken, isSignedIn]);

  const { data, loading } = useGetSpecializationsQuery();

  console.log("data:", data);
  

  return <div>LawyerPendingPage</div>;
};

export default LawyerPendingPage;
