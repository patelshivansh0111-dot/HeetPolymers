import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold mb-4">
                            <span className="text-primary-500">HEET</span>
                            <span className="text-white">POLYMERS</span>
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Leading manufacturer of high-quality pharmaceutical packaging solutions committed to safety and innovation.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="#products" className="hover:text-primary-400 transition-colors">Products</a></li>
                            <li><a href="#industries" className="hover:text-primary-400 transition-colors">Industries</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Blister Foil</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Alu-Alu Foil</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Pharma Laminates</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Child Resistant</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex items-center">
                                <span>LinkedIn</span>
                            </li>
                            <li className="flex items-center">
                                <span>Twitter</span>
                            </li>
                            <li className="flex items-center">
                                <span>Facebook</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {currentYear} Heet Polymers. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
