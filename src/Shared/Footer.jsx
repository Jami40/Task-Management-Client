import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            MeisterTask
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Helping businesses track and manage their online reviews effectively. Your trusted partner in reputation management.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-2 text-gray-400">
                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <a href="mailto:jnjami40@.com" className="hover:text-white transition-colors">jnjami40@.com</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>01887994468</span>
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://x.com/JamiJn93343" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/jn-jami-1455112a9/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/jamicox.jami" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © {new Date().getFullYear()} 
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent px-2">
                            Review Trackers
                        </span>
                        - All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;