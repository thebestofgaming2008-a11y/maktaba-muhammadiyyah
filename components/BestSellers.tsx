import React from 'react';
import { motion } from 'framer-motion';
import { BookPlaceholder } from './SharedUI';

export const BestSellers: React.FC = () => {
  return (
    <section id="bestsellers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-2">Community Favorites</h2>
            <p className="text-brand-muted">Titles that are resonating with readers right now.</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            href="#" 
            className="text-brand-primary font-medium border-b border-brand-primary/30 hover:border-brand-primary pb-1 transition-colors"
          >
            View All Bestsellers
          </motion.a>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  className="flex flex-col gap-4 group"
                >
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
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};