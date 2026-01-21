import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, content }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary-600" />
            </div>
        </div>
        <div className="ml-5">
            <h3 className="text-lg font-medium text-slate-900">{title}</h3>
            <p className="mt-1 text-slate-600 whitespace-pre-line">{content}</p>
        </div>
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                    <p className="text-lg text-slate-600">
                        Contact us for inquiries about our pharmaceutical packaging solutions.
                    </p>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 md:p-14 bg-white">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <ContactItem
                                    icon={MapPin}
                                    title="Our Location"
                                    content="123 Industrial Estate, Phase 4, GIDC,&#10;Ahmedabad, Gujarat, India - 382445"
                                />
                                <ContactItem
                                    icon={Mail}
                                    title="Email Us"
                                    content="info@heetpolymers.com&#10;sales@heetpolymers.com"
                                />
                                <ContactItem
                                    icon={Phone}
                                    title="Call Us"
                                    content="+91 98765 43210&#10;+91 12345 67890"
                                />
                            </div>
                        </div>

                        <div className="relative h-64 md:h-auto bg-slate-200">
                            {/* Placeholder for map or image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-primary-600 text-white">
                                <div className="text-center p-8">
                                    <Globe className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                    <p className="font-medium text-lg">Global Reach</p>
                                    <p className="text-sm opacity-80 mt-2">Serving clients across 20+ countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
