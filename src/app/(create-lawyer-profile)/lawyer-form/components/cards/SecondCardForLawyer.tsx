import { FormData } from "../../page";
import { ZodErrors } from "../ZodError";
import { Input, Textarea, Button } from "@/components/ui/index";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type Props = {
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  goToNextStep?: () => void;
  goToPreviousStep?: () => void;
};

const SecondCardForLawyer = ({ register, errors, goToNextStep, goToPreviousStep }: Props) => {
  const handleNextStep = () => {
    if (!errors.licenseNumber && !errors.university && !errors.bio) {
      goToNextStep && goToNextStep();
    } else {
      goToNextStep && goToNextStep();
    }
  };

  const handlePreviousStep = goToPreviousStep;

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="licenseNumber" className="block text-sm font-medium mb-1">
          Өмгөөлөгчийн дугаар
        </label>
        <Input id="licenseNumber" {...register("licenseNumber")} />
        <ZodErrors error={errors.licenseNumber?.message ? [errors.licenseNumber.message] : undefined} />
      </div>

      <div>
        <label htmlFor="university" className="block text-sm font-medium mb-1">
          Их Сургуулийн Мэдээлэл
        </label>

        <Input id="university" {...register("university")} />

        <ZodErrors error={errors.university?.message ? [errors.university.message] : undefined} />
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium mb-1">
          Мэргэжлийн намтар
        </label>
        <Textarea id="bio" {...register("bio")} rows={4} />
        <ZodErrors error={errors.bio?.message ? [errors.bio.message] : undefined} />
      </div>

      <div>
        <label htmlFor="documents" className="block text-sm font-medium mb-1">
          Шаардлагатай бичиг баримт (Сонголтоор)
        </label>
        <Input id="documents" type="file" multiple accept=".pdf,.jpg,.jpeg,.png" {...register("documents")} />
      </div>

      <div className="w-full grid grid-cols-2 justify-between gap-5 mt-4">
        <Button onClick={handlePreviousStep} className="bg-black text-white cursor-pointer hover:bg-gray-800 ">
          Буцах
        </Button>
        <Button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-400 cursor-pointer text-white">
          Дараачийн
        </Button>
      </div>
    </div>
  );
};

export default SecondCardForLawyer;
