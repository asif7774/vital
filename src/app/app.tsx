import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';
import { SvgSpriteLoader } from 'components/atoms/svg-sprite-loader';

// Lazy load layouts for better code splitting
const NormalLayout = React.lazy(() => import('layouts/NormalLayout'));
// AuthLayout is lazy loaded and ready to use when needed for protected routes
// const AuthLayout = React.lazy(() => import('layouts/AuthLayout'));

// Lazy load pages for better performance
const Home = React.lazy(() => import('pages/Home'));
const Login = React.lazy(() => import('pages/Login'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

// Wrapper component for lazy-loaded layout with page
const LazyLayoutWrapper = ({ 
  Layout, 
  Page 
}: { 
  Layout: React.LazyExoticComponent<React.ComponentType<any>>;
  Page: React.LazyExoticComponent<React.ComponentType<any>>;
}) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Page />
      </Suspense>
    </Layout>
  </Suspense>
);

function App() {
  return (
    <AuthProvider>
      {/* SvgSpriteLoader wraps Router to provide context, but loading is deferred internally */}
      <SvgSpriteLoader 
        url="/sprites/app-icons.svg" 
        version="1.0.0"
        onLoad={import.meta.env.DEV ? () => console.log('✅ SVG sprite loaded successfully') : undefined}
        onError={import.meta.env.DEV ? (error) => console.error('❌ Failed to load SVG sprite:', error) : undefined}
      >
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route 
                path="/" 
                element={
                  <LazyLayoutWrapper Layout={NormalLayout} Page={Home} />
                } 
              />
              <Route 
                path="/login" 
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Login />
                  </Suspense>
                } 
              />
              
              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </SvgSpriteLoader>
    </AuthProvider>
  );
}

export default App;
