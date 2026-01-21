import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { PackagingModel } from './Scene';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center bg-gradient-to-b from-primary-50 to-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <Suspense fallback={null}>
                        <PackagingModel />
                        <Environment preset="city" />
                        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pointer-events-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 mb-6">
                            Innovative <br />
                            <span className="text-primary-600">Pharmaceutical</span> <br />
                            Packaging Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
                            Delivering safe, compliant, and high-quality packaging for the pharma industry worldwide.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#products" className="inline-flex items-center px-8 py-3 dark:bg-primary-600 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors">
                                View Products
                            </a>
                            <a href="#contact" className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-base font-medium rounded-full text-primary-700 hover:bg-primary-50 transition-colors">
                                Get a Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary-400"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
