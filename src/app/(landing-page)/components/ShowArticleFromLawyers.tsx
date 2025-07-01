import React from "react";
import { Button } from "@/components/ui";

const ShowArticleFromLawyers = () => {
  const articles = [
    {
      category: "Criminal Law",
      readTime: "4 min",
      title: "Understanding Your Rights During a Traffic Stop",
      description:
        "Learn what you can and cannot do when pulled over by law enforcement, and how to protect your constitutional rights.",
      author: "A. Sarah Johnson",
      timeAgo: "2 days ago",
    },
    {
      category: "Family Law",
      readTime: "6 min",
      title: "Divorce Mediation vs. Court Proceedings: What's Best?",
      description:
        "Explore the differences between mediation and traditional court divorce proceedings to make the right choice for your situation.",
      author: "A. Michael Chen",
      timeAgo: "1 week ago",
    },
    {
      category: "Business Law",
      readTime: "7 min",
      title: "Starting a Business: Legal Steps You Cannot Skip",
      description:
        "Essential legal requirements every entrepreneur must know before launching their business ventures.",
      author: "A. Remy Rodriguez",
      timeAgo: "3 days ago",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Мэргэжилтнүүдийн нийтлэлийг унших</h2>
        <p className="text-lg text-gray-600 mb-12">
          Манай хуулийн мэргэжилтнүүдийн нийтлэл, зөвлөгөөг үнэгүй авч байгаарай
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span className="font-medium">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-base mb-4 flex-grow line-clamp-3">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <span className="font-medium">{article.author}</span>
                  <span>{article.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button className="px-8 py-3 bg-[#003366] text-white font-medium rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2">
            Бүх нийтлэлийг унших
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowArticleFromLawyers;
