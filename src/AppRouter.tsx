import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './components/dashboard/Dashboard';
// Protected route component
const ProtectedRoute = ({
  children
}) => {
  const {
    isAuthenticated,
    loading
  } = useAuth();
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
        Carregando...
      </div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};
const AppRouterContent = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
        {/* Add more protected routes as needed */}
      </Routes>
    </BrowserRouter>;
};
export function AppRouter() {
  return <AuthProvider>
      <AppRouterContent />
    </AuthProvider>;
}