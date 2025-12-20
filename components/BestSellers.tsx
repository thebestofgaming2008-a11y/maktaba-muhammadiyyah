import React from 'react';
import { BookPlaceholder } from './SharedUI';

export const BestSellers: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-2">Community Favorites</h2>
            <p className="text-brand-muted">Titles that are resonating with readers right now.</p>
          </div>
          <a href="#" className="text-brand-primary font-medium border-b border-brand-primary/30 hover:border-brand-primary pb-1 transition-colors">
            View All Bestsellers
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex flex-col gap-4">
                    <BookPlaceholder 
                        title={i % 2 === 0 ? "Purification of the Heart" : "Stories of the Prophets"} 
                        author={i % 2 === 0 ? "Imam Mawlud" : "Ibn Kathir"} 
                        color={i % 2 === 0 ? "from-[#57534e] to-[#292524]" : "from-[#115e59] to-[#042f2e]"}
                    />
                    <div>
                        <h4 className="font-serif text-lg leading-tight group-hover:text-brand-secondary transition-colors cursor-pointer">
                            {i % 2 === 0 ? "Purification of the Heart" : "Stories of the Prophets"}
                        </h4>
                        <div className="flex justify-between items-center mt-2">
                             <span className="text-sm text-gray-500">{i % 2 === 0 ? "Spiritual" : "History"}</span>
                             <span className="font-medium text-brand-primary">$24.00</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
