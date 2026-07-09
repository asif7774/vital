import React, { ReactNode } from "react";
import Header from "components/organisms/header";
import Footer from "components/organisms/footer";

interface NormalLayoutProps {
  children: ReactNode;
}

const NormalLayout: React.FC<NormalLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default NormalLayout;
