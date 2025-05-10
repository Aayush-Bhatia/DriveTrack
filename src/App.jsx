// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Login from "./components/Login";
// import Signup from './components/Signup';
// import ManagerDashboard from './components/ManagerDashboard';
// import DriverDashboard from './components/DriverDashboard';
// import DriverProfile from './components/DriverProfile';
// import Footer from './components/Footer';
// import Header from './components/Header';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//       <div className="app">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/manager-dashboard" element={<ManagerDashboard />} />
//             <Route path="/driver-dashboard" element={<DriverDashboard />} />
//             <Route path="/driver-profile/:id" element={<DriverProfile />} />
            
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import DriverForm from './components/DriverForm';
import DriverDashboard from './components/DriverDashboard';
import SalarySummary from './components/SalarySummary';
import TaskManagement from './components/TaskManagement';
import NewTask from './components/NewTask';
import DriverProfile from './components/DriverProfile';
import LiveTrack from './components/LiveTrack';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/driver-form" element={<DriverForm />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/salary-summary" element={<SalarySummary />} />
        <Route path="/task-management" element={<TaskManagement />} />
        <Route path="/new-task" element={<NewTask />} />
        <Route path="/driver-profile" element={<DriverProfile />} />
        <Route path="/live-track" component={<LiveTrack />} />
        
      </Routes>
    </Router>
  );
}

export default App;


