import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRole } from '../RoleContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './HospitalLayout.css';
import './Layout.css';


const HospitalLayout = () => {
  const { role, subRole, isLoggedIn } = useRole();

  // Allow only logged-in hospitals (receivers)
  if (!isLoggedIn || role !== 'user' || subRole !== 'receiver') {
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

export default HospitalLayout;
