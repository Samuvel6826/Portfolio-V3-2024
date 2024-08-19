import React from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/pages/public/home/Home';
import About from './components/pages/public/about/About';
import Skills from './components/pages/public/skills/Skills';
import Projects from './components/pages/public/projects/Projects';
import Contact from './components/pages/public/contact/Contact';
import Footer from './components/pages/public/footer/Footer';
import Education from './components/pages/public/education/Education';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTopButton from './components/common/ScrollTopBtn';
import AdminHero from './components/pages/admin/adminHero/AdminHero';
import AdminAbout from './components/pages/admin/adminAbout/AdminAbout';
import AdminEducations from './components/pages/admin/adminEducations/AdminEducations';
import AdminSkills from './components/pages/admin/adminSkills/AdminSkills';
import AdminProjects from './components/pages/admin/adminProjects/AdminProjects';
import AdminContact from './components/pages/admin/adminContact/AdminContact';
import AdminFooter from './components/pages/admin/adminFooter/AdminFooter';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { UserAuthContextProvider } from "./components/authentication/UserAuthContext";

function App() {
  return <UserAuthContextProvider>
    <Router>
      <main id='App'>

        <Navbar />

        <Routes>

          {/* Authentication Routes */}
          <Route path="/login" element={
            <ErrorBoundary>
              <Login />
            </ErrorBoundary>} />
          {/* 
          <Route path="/signup" element={
            <ErrorBoundary>
              <Signup />
            </ErrorBoundary>} /> */}



          {/* Public Routes */}
          <Route path="*" element={
            // <ErrorBoundary>
            <PublicRoutes />
            // </ErrorBoundary>
          } />



          {/* Admin Routes */}
          <Route path="/admin/*" element={

            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          } />

        </Routes>
      </main>
    </Router>
  </UserAuthContextProvider>
}

function PublicRoutes() {
  return <main className='main'>
    <ScrollToTopButton />
    <Home />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    {/* <ErrorBoundary> */}
    <Footer />
    {/* </ErrorBoundary> */}
  </main>
}

function AdminRoutes() {

  return <main className="main">
    <AdminHero />
    <AdminAbout />
    <AdminEducations />
    <AdminSkills />
    <AdminProjects />
    <AdminContact />
    <AdminFooter />
  </main>
}

export default App;