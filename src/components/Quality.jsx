import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, description, isLast }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-0 md:text-center group"
    >
        <div className="md:mx-auto w-16 h-16 bg-white border-4 border-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 mb-6 z-10 relative group-hover:border-primary-500 transition-colors duration-300 shadow-md">
            {number}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-slate-800 mb-3">{title}</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    </motion.div>
);

const Quality = () => {
    return (
        <section id="quality" className="py-24 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Quality & Compliance</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Our unwavering commitment ensures every product meets the highest international standards and regulatory requirements.
                    </p>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-primary-200 z-0" />

                    <Step
                        number="1"
                        title="Raw Material Testing"
                        description="Comprehensive testing of all incoming materials to ensure they meet our strict quality specifications."
                    />
                    <Step
                        number="2"
                        title="In-Process Controls"
                        description="Continuous monitoring and testing throughout the manufacturing process to maintain consistent quality."
                    />
                    <Step
                        number="3"
                        title="Final Product Validation"
                        description="Rigorous final inspection and testing before products are released to ensure complete compliance."
                        isLast={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Quality;
