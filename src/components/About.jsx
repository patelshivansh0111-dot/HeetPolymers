import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-center md:text-left mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                About <span className="text-primary-600">HEET POLYMERS</span>
                            </h2>
                            <div className="w-20 h-1 bg-primary-500 rounded-full mx-auto md:mx-0" />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Our History</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Founded with a vision to revolutionize pharmaceutical packaging, HEET POLYMERS has been at the forefront of innovation in the industry. We began our journey with a commitment to quality and safety that continues to drive us today.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Our Vision</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    To be the global leader in pharmaceutical packaging solutions, setting new standards for quality, safety, and innovation while contributing to better healthcare outcomes worldwide.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We are dedicated to providing cutting-edge packaging solutions that protect pharmaceutical products throughout their lifecycle. Our mission is to ensure product integrity, patient safety, and regulatory compliance through innovative design and manufacturing excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full p-1 shadow-2xl">
                            <div className="bg-white rounded-full p-20 lg:p-32 flex items-center justify-center aspect-square">
                                <h3 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 tracking-tighter">
                                    HP
                                </h3>
                            </div>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary-100 rounded-full -z-0" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-primary-50 rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
