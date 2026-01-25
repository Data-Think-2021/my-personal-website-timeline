import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
                            Xia He-Bleinagel
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Empowering women in Data, Cloud & AI. Building the future of tech through mentorship and community.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/mentoring" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Mentoring
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-kickstart-sprint" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    AI Kickstart Sprint
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/imprint" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Imprint
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex justify-center items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Xia He-Bleinagel. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
