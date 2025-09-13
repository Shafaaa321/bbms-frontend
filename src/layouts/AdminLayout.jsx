import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRole } from '../RoleContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './AdminLayout.css';
import './Layout.css';


const AdminLayout = () => {
  const { role, isLoggedIn } = useRole();

  // Only allow admin
  if (!isLoggedIn || role !== 'admin') {
    return <Navigate to="/" />;
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
