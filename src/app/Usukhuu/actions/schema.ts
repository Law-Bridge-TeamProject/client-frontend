import { z } from "zod";

export const schemaLawyerProfile = z.object({
  firstName: z.string().max(100).min(2, { message: "Өөрийн нэрээ оруулна уу!" }),
  lastName: z.string().max(100).min(2, { message: "Овог нэрээ оруулна уу! " }),
  email: z.string().email({ message: "Мейл хаяг шаардлага хангахгүй байна!" }),
  phone: z
    .string()
    .length(8, { message: "Утасны дугаар 8 оронтой байх ёстой!" })
    .regex(/^(?:83|85|86|88|89|90|91|94|95|96|97|98|99)\d{6}$/, "Утасны дугаар шаадлага хангахгүй байна!"),

  licenseNumber: z.string().regex(/^LAW-\d{4}-\d{3}$/, {
    message: "Өмгөөлөгчийн дугаар шаадлага хангахгүй байна! (ж: LAW-2021-045)",
  }),
  specializations: z.array(z.string()).min(1, { message: "Өөрийн талбарыг сонгоно уу" }),
  bio: z
    .string()
    .min(10, { message: "Араваас илүү тэмдэгт оруулна УУ!" })
    .max(1000, { message: "Хязгаар хэтэрсэн байна!" }),
  university: z.string().min(2, { message: "Их сургуулийн мэдээллээ гүйцэд оруулна уу!" }),
  avatar: z.string().min(1, { message: "Нүүр зураг оруулна уу!" }),
  documents: z.custom(
    (value) => {
      if (typeof FileList !== "undefined" && value instanceof FileList) {
        return value.length >= 1;
      }
      return false;
    },
    {
      message: "Please upload required documents",
    }
  ),
});
