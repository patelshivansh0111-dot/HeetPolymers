import React from 'react';
import { Pill, Leaf, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const IndustryCard = ({ icon: Icon, title, description, features, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
    >
        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-3" />
                    {feature}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Industries = () => {
    const industries = [
        {
            icon: Pill,
            title: 'Pharmaceutical',
            description: 'Comprehensive packaging solutions for prescription medications, OTC drugs, and specialty pharmaceuticals.',
            features: ['Regulatory compliance', 'Product protection', 'Patient safety', 'Brand integrity']
        },
        {
            icon: Leaf,
            title: 'Nutraceuticals',
            description: 'Specialized packaging for dietary supplements, vitamins, and functional foods requiring specific protection.',
            features: ['Moisture protection', 'Light barrier', 'Extended shelf life', 'Consumer appeal']
        },
        {
            icon: Stethoscope,
            title: 'Healthcare',
            description: 'Medical device packaging and healthcare product solutions ensuring sterility and safety.',
            features: ['Sterile packaging', 'Medical grade materials', 'Device protection', 'Easy access designs']
        }
    ];

    return (
        <section id="industries" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary-600 tracking-wide uppercase mb-2">Industries Served</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Tailored Solutions for Every Sector</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <IndustryCard key={index} {...industry} delay={index * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
