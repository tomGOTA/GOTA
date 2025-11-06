import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Circle Community. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </SocialIcon>
                         <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.019c0 4.94 3.434 9.098 8.007 9.923.58.107.79-.25.79-.556v-1.947c-3.338.724-4.043-1.61-4.043-1.61-.527-1.34-1.286-1.695-1.286-1.695-1.053-.717.08-.703.08-.703 1.164.082 1.777 1.194 1.777 1.194 1.033 1.767 2.707 1.256 3.365.96.104-.746.404-1.256.733-1.544-2.562-.29-5.255-1.28-5.255-5.694 0-1.258.45-2.285 1.187-3.09-.12-.29-.513-1.46.113-3.045 0 0 .968-.31 3.173 1.188A11.08 11.08 0 0112 5.82c1.02.004 2.047.138 3.006.404 2.205-1.5 3.173-1.188 3.173-1.188.627 1.585.233 2.755.113 3.045.738.805 1.187 1.832 1.187 3.09 0 4.425-2.697 5.4-5.267 5.685.416.357.787 1.065.787 2.146v3.13c0 .308.208.667.8.555A10.007 10.007 0 0022 12.019C22 6.477 17.523 2 12 2z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;