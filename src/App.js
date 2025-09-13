// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useRole } from './RoleContext';

// Auth Pages
import Login from './pages/auth/Login';
import LoginForm from './pages/auth/LoginForm';
import RegisterDonor from './pages/auth/RegisterDonor';
import RegisterHospital from './pages/auth/RegisterHospital';

// Layouts
import DonorLayout from './layouts/DonorLayout';
import HospitalLayout from './layouts/HospitalLayout';
import AdminLayout from './layouts/AdminLayout';
import StaffLayout from './layouts/StaffLayout';

// Donor Pages
import DonorDashboard from './pages/donor/Dashboard';
import DonorEligibility from './pages/donor/DonorEligibility';
import DonationHistory from './pages/donor/DonationHistory';
import DonorNotifications from './pages/donor/Notifications';
import RequestToDonate from './pages/donor/RequestToDonate';

// Hospital Pages
import HospitalDashboard from './pages/hospital/Dashboard';
import RequestBlood from './pages/hospital/RequestBlood';
import BloodInventory from './pages/hospital/BloodInventory';
import HospitalRequestStatus from './pages/hospital/HospitalRequestStatus';
import HospitalNotifications from './pages/hospital/Notifications';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ApproveHospitals from './pages/admin/ApproveHospitals';
import RegisteredDonors from './pages/admin/RegisteredDonors';
import Analytics from './pages/admin/Analytics';
import AuditLogs from './pages/admin/AuditLogs';
import Settings from './pages/admin/Settings';
import HospitalActivities from './pages/admin/HospitalActivities';
import DonationRecords from './pages/admin/DonationRecords';

// Staff Pages
import StaffDashboard from './pages/staff/Dashboard';
import ApproveDonationRequests from './pages/staff/ApproveDonationRequests';
import ApproveBloodRequests from './pages/staff/ApproveBloodRequests';
import StaffNotifications from './pages/staff/Notifications';
import ManageAppointments from './pages/staff/ManageAppointments';

function App() {
  const { isLoggedIn, role, subRole } = useRole();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login-form" element={<LoginForm />} />
      <Route path="/register-donor" element={<RegisterDonor />} />
      <Route path="/register-hospital" element={<RegisterHospital />} />

      {/* Admin Routes */}
      {isLoggedIn && role === 'admin' && (
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="approve-hospitals" element={<ApproveHospitals />} />
          <Route path="registered-donors" element={<RegisteredDonors />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="audit-logs" element={<AuditLogs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="hospital-activities" element={<HospitalActivities />} />
          <Route path="donation-records" element={<DonationRecords />} />
        </Route>
      )}

      {/* Donor Routes */}
      {isLoggedIn && role === 'user' && subRole === 'donor' && (
        <Route path="/donor" element={<DonorLayout />}>
          <Route path="dashboard" element={<DonorDashboard />} />
          <Route path="eligibility" element={<DonorEligibility />} />
          <Route path="history" element={<DonationHistory />} />
          <Route path="notifications" element={<DonorNotifications />} />
          <Route path="request-donate" element={<RequestToDonate />} />
        </Route>
      )}

      {/* Hospital Routes */}
      {isLoggedIn && role === 'user' && subRole === 'receiver' && (
        <Route path="/hospital" element={<HospitalLayout />}>
          <Route path="dashboard" element={<HospitalDashboard />} />
          <Route path="request-blood" element={<RequestBlood />} />
          <Route path="inventory" element={<BloodInventory />} />
          <Route path="request-status" element={<HospitalRequestStatus />} />
          <Route path="notifications" element={<HospitalNotifications />} />
        </Route>
      )}

      {/* Staff Routes */}
      {isLoggedIn && role === 'staff' && (
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="approve-donation-requests" element={<ApproveDonationRequests />} />
          <Route path="approve-blood-requests" element={<ApproveBloodRequests />} />
          <Route path="manage-appointments" element={<ManageAppointments />} />
          <Route path="notifications" element={<StaffNotifications />} />
        </Route>
      )}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
