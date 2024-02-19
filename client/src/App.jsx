import { Route, Routes, Navigate } from "react-router-dom";

import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import LoginPage from "./pages/LoginPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";

const checkAdminControlle = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user && user.role === "Admin";
}

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage />
          }
        />
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />
        <Route
          path="/projectdetail/:projectId"
          element={<ProjectDetails />}
        />
        <Route
          path="/aboutus"
          element={<AboutUsPage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/dashboard"
          element={
            checkAdminControlle() ? (
              <Dashboard />
            ) : (
              <Navigate to="/unauthorized" replace />
              //<Navigate to="/" replace />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />

        {/* Yanlış URL girişine karşı uyarı sayfası */}
        <Route
          path="/unauthorized"
          element={<UnauthorizedPage />}
        />

      </Routes>
    </>
  );
}

export default App;
