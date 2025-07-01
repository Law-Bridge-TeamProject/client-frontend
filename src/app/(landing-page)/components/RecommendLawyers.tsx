import LawyerCard from "./LawyerCard";
import { Button } from "@/components/ui";

const RecommendLawyers = () => {
  return (
    <div className="container mx-auto p-20 text-center  min-h-screen">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold text-[#333333] mb-4">Өмгөөлөгчөө хайж олоорой</h1>
        <p className="text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
          Хуулийн мэргэжилтнүүдээс шууд цаг аван цаг аван өөрийн цагаа хэмнээрэй
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-10">
        <LawyerCard
          name="Sarah Johnson"
          specialty="Corporate Law"
          location="New York, NY"
          rating={4.9}
          reviewCount={197}
          hourlyRate={450}
          statusText="Available Today"
          hasQuickResponse={true}
        />
        <LawyerCard
          name="Michael Chen"
          specialty="Family Law"
          location="Los Angeles, CA"
          rating={4.8}
          reviewCount={205}
          hourlyRate={300}
          statusText="Available Today"
          hasCertified={true}
          yearsExperience={16}
        />
        <LawyerCard
          name="Emily Rodriguez"
          specialty="Criminal Defense"
          location="Chicago, IL"
          rating={4.9}
          reviewCount={189}
          hourlyRate={375}
          statusText="Available Today"
          hasEmergencyCases={true}
        />
      </div>
      <div className="mt-8">
        <Button className="bg-[#003366] text-[#f8f8f8] text-lg font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-colors duration-200">
          View All Lawyers
        </Button>
      </div>
    </div>
  );
};

export default RecommendLawyers;
