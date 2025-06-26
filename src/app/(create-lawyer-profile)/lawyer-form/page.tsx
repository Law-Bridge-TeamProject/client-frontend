"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schemaLawyerProfile } from "./utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import FirstCardForLawyer from "./components/cards/FirstCardForLawyer";
import SecondCardForLawyer from "./components/cards/SecondCardForLawyer";
import ThirdCardForLawyer from "./components/cards/ThirdCardForLawyer";

export type FormData = z.infer<typeof schemaLawyerProfile>;

const LawyerRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schemaLawyerProfile),
    defaultValues: {
      specializations: [],
    },
  });

  const watchedSpecializations = watch("specializations");

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "specializations") {
        (value as string[]).forEach((spec) => formData.append("specializations", spec));
      } else if (key === "profilePicture" || key === "documents") {
        Array.from(value as FileList).forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, String(value));
      }
    });
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const goToNextStep = async () => {
    const valid = await trigger(["firstName", "lastName", "email", "avatar"]);
    if (valid) {
      setPreviousStep(currentStep);
      setCurrentStep((previousStep) => previousStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((previousStep) => previousStep - 1);
    }
  };

  const CurrentStepComponent = [FirstCardForLawyer, SecondCardForLawyer, ThirdCardForLawyer][currentStep];

  return (
    <div className="w-screen min-h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)} //
        className="w-full max-w-2xl border-2 border-blue-400 shadow-2xl p-8 rounded-lg space-y-6 "
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Өмгөөлөгчийн бүртгэл</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: currentStep > previousStep ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentStep > previousStep ? -100 : 100 }}
            variants={undefined}
            className="space-y-4"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <CurrentStepComponent
              errors={errors}
              setValue={setValue}
              register={register}
              watchedSpecializations={watchedSpecializations}
              goToNextStep={goToNextStep}
              goToPreviousStep={goToPreviousStep}
              isSubmitting={isSubmitting}
            />
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default LawyerRegistrationForm;

// import { useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function LawyerFormPage() {
//   const { user } = useUser();
//   const { push } = useRouter();
//   const [data, setData] = useState({ name: "", license: "" });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await fetch("/api/lawyer/lawyer-request", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...data, userId: user?.id }),
//     });
//     push("/pending-approval");
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Өмгөөлөгчийн бүртгэл</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Овог нэр"
//           value={data.name}
//           onChange={(e) => setData({ ...data, name: e.target.value })}
//           className="border p-2"
//         />
//         <input
//           type="text"
//           placeholder="Лиценз дугаар"
//           value={data.license}
//           onChange={(e) => setData({ ...data, license: e.target.value })}
//           className="border p-2"
//         />
//         <button type="submit" className="bg-green-600 text-white p-2 rounded">
//           Илгээх
//         </button>
//       </form>
//     </div>
//   );
// }
