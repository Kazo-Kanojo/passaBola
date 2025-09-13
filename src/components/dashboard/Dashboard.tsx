import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import LoggedInHeader from './LoggedInHeader';
const Dashboard: React.FC = () => {
  return <div className="min-h-screen bg-gray-50">
      <LoggedInHeader />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <Sidebar />
          </div>
          <div className="lg:col-span-6">
            <Feed />
          </div>
          <div className="lg:col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;