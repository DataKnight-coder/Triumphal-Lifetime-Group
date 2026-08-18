import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

interface ImpactCardProps {
  title: string;
  description: string;
  category: string;
  link: string;
}

export default function ImpactCard({ title, description, category, link }: ImpactCardProps) {
  return (
    <div className="bg-white border-l-4 border-tlg-emerald p-8 hover:shadow-lg transition-shadow group relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Heart size={120} className="text-tlg-emerald" />
      </div>
      
      <div className="relative z-10">
        <span className="inline-block bg-green-50 text-tlg-emerald px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4">
          {category}
        </span>
        <h3 className="text-2xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-emerald transition-colors">{title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        <Link href={link} className="inline-flex items-center text-tlg-midnight font-medium border-b border-tlg-emerald pb-1 hover:text-tlg-emerald transition-colors">
          Explore Programme <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
