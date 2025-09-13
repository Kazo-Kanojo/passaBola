import React, { useEffect, useState, createContext, useContext } from 'react';
// Define types for our context
type User = {
  id: string;
  name: string;
  email: string;
  position?: string;
  club?: string;
  avatar?: string;
};
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<void>;
  register: (userData: Partial<User> & {
    password: string;
  }) => Promise<void>;
  logout: () => void;
  loading: boolean;
};
// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);
// Mock user data
const mockUsers = [{
  id: '1',
  name: 'Marta Silva',
  email: 'marta@example.com',
  password: 'password123',
  position: 'Atacante',
  club: 'Orlando Pride',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
}];
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('passaBola_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  // Login function
  const login = async (email: string, password: string, remember = false) => {
    setLoading(true);
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(u => u.email === email && u.password === password);
        if (foundUser) {
          // Remove password from user object
          const {
            password,
            ...userWithoutPassword
          } = foundUser;
          setUser(userWithoutPassword);
          // Store user in localStorage if remember is checked
          if (remember) {
            localStorage.setItem('passaBola_user', JSON.stringify(userWithoutPassword));
          }
          setLoading(false);
          resolve();
        } else {
          setLoading(false);
          reject(new Error('Email ou senha inválidos'));
        }
      }, 1000);
    });
  };
  // Register function
  const register = async (userData: Partial<User> & {
    password: string;
  }) => {
    setLoading(true);
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find(u => u.email === userData.email);
        if (existingUser) {
          setLoading(false);
          reject(new Error('Este email já está cadastrado'));
          return;
        }
        // Create new user
        const newUser = {
          id: String(mockUsers.length + 1),
          name: userData.name || '',
          email: userData.email || '',
          position: userData.position,
          club: userData.club,
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        };
        // Add to mock users (in a real app, this would be an API call)
        mockUsers.push({
          ...newUser,
          password: userData.password
        });
        // Set the user without password
        setUser(newUser);
        localStorage.setItem('passaBola_user', JSON.stringify(newUser));
        setLoading(false);
        resolve();
      }, 1500);
    });
  };
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('passaBola_user');
  };
  return <AuthContext.Provider value={{
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading
  }}>
      {children}
    </AuthContext.Provider>;
};
// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};