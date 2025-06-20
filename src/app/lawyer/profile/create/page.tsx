"use client";

import { useState } from "react";

export default function LawyerProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    experience: "",
    birthDate: "",
    school: "",
    licenseNumber: "",
    weeklyHours: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        payload.append(key, value as string | Blob);
      }
    });

    console.log("Submitted:", Object.fromEntries(payload));
   
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Өмгөөлөгчийн профайл үүсгэх</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <label className="block font-medium mb-1">Зураг оруулах</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
          />
        </div>

        
        <div>
          <label className="block font-medium mb-1">Нэр</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

       
        <div>
          <label className="block font-medium mb-1">Хувийн мэдээлэл</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full border p-2 rounded"
          />
        </div>

      
        <div>
          <label className="block font-medium mb-1">Ажлын туршлага</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        
        <div>
          <label className="block font-medium mb-1">Төрсөн огноо</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        
        <div>
          <label className="block font-medium mb-1">Төгссөн сургууль</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

      
        <div>
          <label className="block font-medium mb-1">Өмгөөлөх эрхийн бүртгэл</label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

       
        <div>
          <label className="block font-medium mb-1">
            7 хоногт ажиллах цаг (жишээ: 40)
          </label>
          <input
            type="number"
            name="weeklyHours"
            value={formData.weeklyHours}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            min={0}
            max={168}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Хадгалах
          </button>
        </div>
      </form>
    </div>
  );
}