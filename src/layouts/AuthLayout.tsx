import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import Header from "components/organisms/header";
import Footer from "components/organisms/footer";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <main className="bg-white rounded-lg shadow-sm">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default AuthLayout;
