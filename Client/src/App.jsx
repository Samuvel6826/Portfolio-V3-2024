import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreLoader from './components/common/PreLoader';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTopButton from './components/common/ScrollTopBtn';
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { UserAuthContextProvider } from "./components/authentication/UserAuthContext";

// Lazy-load components
const Navbar = lazy(() => import('./components/pages/navbar/Navbar'));
const Home = lazy(() => import('./components/pages/public/home/Home'));
const About = lazy(() => import('./components/pages/public/about/About'));
const Skills = lazy(() => import('./components/pages/public/skills/Skills'));
const Projects = lazy(() => import('./components/pages/public/projects/Projects'));
const Contact = lazy(() => import('./components/pages/public/contact/Contact'));
const Footer = lazy(() => import('./components/pages/public/footer/Footer'));
const Education = lazy(() => import('./components/pages/public/education/Education'));
const AdminHero = lazy(() => import('./components/pages/admin/adminHero/AdminHero'));
const AdminAbout = lazy(() => import('./components/pages/admin/adminAbout/AdminAbout'));
const AdminEducations = lazy(() => import('./components/pages/admin/adminEducations/AdminEducations'));
const AdminSkills = lazy(() => import('./components/pages/admin/adminSkills/AdminSkills'));
const AdminProjects = lazy(() => import('./components/pages/admin/adminProjects/AdminProjects'));
const AdminContact = lazy(() => import('./components/pages/admin/adminContact/AdminContact'));
const AdminFooter = lazy(() => import('./components/pages/admin/adminFooter/AdminFooter'));
const Login = lazy(() => import('./components/authentication/Login'));
const Signup = lazy(() => import('./components/authentication/Signup'));

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <main id='App'>
          <Suspense fallback={<PreLoader />}>
            <Navbar />
            <Routes>
              {/* Authentication Routes */}
              <Route path="/login" element={
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              } />
              <Route path="/signup" element={
                <ErrorBoundary>
                  <Signup />
                </ErrorBoundary>
              } />

              {/* Public Routes */}
              <Route path="*" element={
                <ErrorBoundary>
                  <PublicRoutes />
                </ErrorBoundary>
              } />

              {/* Admin Routes */}
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <ErrorBoundary>
                    <AdminRoutes />
                  </ErrorBoundary>
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </UserAuthContextProvider>
  );
}

function PublicRoutes() {
  return (
    <main className='main'>
      <ScrollToTopButton />
      <Suspense fallback={<PreLoader />}>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

function AdminRoutes() {
  return (
    <main className="main">
      <Suspense fallback={<PreLoader />}>
        <AdminHero />
        <AdminAbout />
        <AdminEducations />
        <AdminSkills />
        <AdminProjects />
        <AdminContact />
        <AdminFooter />
      </Suspense>
    </main>
  );
}

export default App;