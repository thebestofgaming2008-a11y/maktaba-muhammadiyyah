import React from 'react';
import { BookPlaceholder, ButtonSecondary } from './SharedUI';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="text-brand-accent font-medium tracking-widest uppercase text-sm mb-4">Curator's Choice</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-6 leading-tight">
              Essentials for the <br/><span className="italic opacity-80">Seeker's Library</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every home deserves a cornerstone collection. These titles have been selected for their foundational importance, clarity of translation, and beauty of presentation.
            </p>
            <ButtonSecondary className="group">
              View Collection <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </ButtonSecondary>
          </div>

          {/* Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               <div className="mt-0 sm:mt-12">
                 <BookPlaceholder title="The Noble Qur'an" author="Standard Mushaf" color="from-[#1e293b] to-[#0f172a]" />
               </div>
               <div className="mt-0">
                 <BookPlaceholder title="Gardens of the Righteous" author="Imam Nawawi" color="from-[#3f6212] to-[#14532d]" />
               </div>
               <div className="mt-0 sm:mt-12 hidden md:block">
                 <BookPlaceholder title="Sealed Nectar" author="Biography" color="from-[#7c2d12] to-[#451a03]" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
