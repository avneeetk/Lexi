
import React from 'react';
import Navigation from './Navigation';
import { useTest } from '../context/TestContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { preferredLanguage } = useTest();
  
  const footerText = {
    english: "© 2023 DyslexAI. Making learning fun for everyone!",
    hindi: "© 2023 डिस्लेक्सिआई। सभी के लिए सीखना मज़ेदार बनाना!",
    tamil: "© 2023 டிஸ்லெக்சியா ஏஐ. அனைவருக்கும் கற்றல் வேடிக்கையாக!"
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <footer className="py-6 bg-white border-t border-primary/10">
        <div className="container">
          <p className="text-sm text-center text-muted-foreground font-dyslexic">
            {footerText[preferredLanguage]}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
