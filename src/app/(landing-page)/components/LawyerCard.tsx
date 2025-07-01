import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui";

type LawyerCardProps = {
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  statusText: string; // "Available Today", "Booked", "Certified", "Top Rated"
  hasQuickResponse?: boolean;
  hasEmergencyCases?: boolean;
  hasCertified?: boolean;
  yearsExperience?: number;
};

const LawyerCard = ({
  name,
  specialty,
  location,
  rating,
  reviewCount,
  hourlyRate,
  statusText,
  hasQuickResponse,
  hasEmergencyCases,
  hasCertified,
  yearsExperience,
}: LawyerCardProps) => {
  return (
    <div className="bg-[#eee] rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5">
        <div className="w-24 h-24 bg-[#8bc34a] rounded-full mx-auto mb-4">{/* Avatar Placeholder */}</div>
        <h3 className="text-2xl font-semibold text-[#333333] mb-1">{name}</h3>
        <p className="text-primary-blue font-medium">{specialty}</p>
      </div>
      <div className="w-full mb-6 text-left pl-5">
        <p className="flex items-center text-gray-700 text-base mb-2">
          <span className="mr-2 text-xl text-gray-600">📍{location}</span>
        </p>

        <p className="flex items-center text-gray-700 text-base mb-2">
          <span className="mr-2 text-xl text-yellow-500">
            ⭐{rating} ({reviewCount})
          </span>
        </p>

        <p className="text-lg font-semibold text-gray-800 mt-4">${hourlyRate}/цаг</p>
        <p className="text-accent-green font-medium mt-2">
          <span className="mr-2">{statusText}</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {hasQuickResponse && (
          <Badge
            variant="destructive"
            className="bg-[#D4AF37] border px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
          >
            Quick Response
          </Badge>
        )}
        {hasEmergencyCases && (
          <Badge
            variant="outline"
            className="bg-[#D4AF37] border px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
          >
            Emergency Cases
          </Badge>
        )}
        {hasCertified && (
          <Badge
            variant="destructive"
            className="bg-[#D4AF37] border px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
          >
            Certified
          </Badge>
        )}
        {yearsExperience && (
          <Badge
            variant="destructive"
            className="bg-[#D4AF37] border px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
          >
            {yearsExperience}+ Years
          </Badge>
        )}
      </div>
      <div className="w-full flex flex-col gap-3">
        <Button className="w-full bg-[#003366] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200">
          Цаг авах
        </Button>
        <Button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-200 transition-colors duration-200">
          Мэдээлэл харах
        </Button>
      </div>
    </div>
  );
};

export default LawyerCard;
