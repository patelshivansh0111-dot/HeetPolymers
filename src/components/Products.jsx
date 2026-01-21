import React from 'react';
import { Layers, Package, Zap, ShieldCheck } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, description, features }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="p-8 pb-0">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {description}
            </p>
        </div>
        <div className="bg-slate-50 px-8 py-6 mt-auto border-t border-slate-100">
            <ul className="space-y-3">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Products = () => {
    const products = [
        {
            icon: Package,
            title: 'Blister Foil',
            description: 'High-quality blister packaging materials designed for optimal product protection and presentation.',
            features: ['Superior barrier properties', 'Excellent printability', 'Child-resistant options', 'Tamper-evident designs']
        },
        {
            icon: Layers,
            title: 'Alu-Alu Foil',
            description: 'Premium aluminum-aluminum laminated foils providing exceptional moisture and light protection.',
            features: ['Maximum barrier protection', 'Extended shelf life', 'Cold forming capability', 'High puncture resistance']
        },
        {
            icon: Zap,
            title: 'Pharma Laminate Foil',
            description: 'Multi-layer laminated films engineered for complex pharmaceutical packaging requirements.',
            features: ['Customizable structures', 'Enhanced barrier properties', 'Chemical resistance', 'Regulatory compliance']
        },
        {
            icon: ShieldCheck,
            title: 'Custom Packaging',
            description: 'Tailored packaging designs developed specifically for unique pharmaceutical product needs.',
            features: ['Bespoke design', 'Prototyping services', 'Validation support', 'Technical consultation']
        }
    ];

    return (
        <section id="products" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-secondary-600 tracking-wide uppercase mb-2">Our Products</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Advanced Packaging Solutions</h3>
                    <p className="mt-4 text-slate-600">Engineered for performance, safety, and reliability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
