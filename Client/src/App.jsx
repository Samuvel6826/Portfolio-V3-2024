import { Suspense, lazy, useEffect } from 'react';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles for animations
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from 'react-router-dom';

// Shared Components
import { Toaster } from 'react-hot-toast'; // For showing toast notifications
import PreLoader from './components/pages/shared/preLoader/PreLoader'; // Preloader component
import ScrollToTopButton from './components/pages/shared/ScrollTopBtn'; // Scroll to top button
import { ProtectedRoute } from './components/routes/ProtectedRoute'; // Protect routes for authentication
import { AuthProvider } from './components/contexts/providers/AuthProvider'; // Context provider for authentication

// Error Handlers
import ErrorBoundary from './components/errorHandlers/ErrorBoundary'; // Error boundary to catch JS errors
import NotFoundPageError from './components/errorHandlers/NotFoundPageError'; // Fallback page for 404 errors

// Lazy Loaded Components (Public Routes)
const Navbar = lazy(() => import('./components/pages/shared/navbar/Navbar'));
const Home = lazy(() => import('./components/pages/public/home/Home'));
const About = lazy(() => import('./components/pages/public/about/About'));
const Skills = lazy(() => import('./components/pages/public/skills/Skills'));
const Projects = lazy(() => import('./components/pages/public/projects/Projects'));
const Contact = lazy(() => import('./components/pages/public/contact/Contact'));
const Footer = lazy(() => import('./components/pages/public/footer/Footer'));
const Education = lazy(() => import('./components/pages/public/education/Education'));
const Certificates = lazy(() => import('./components/pages/public/certificates/Certificates'));

// Lazy Loaded Components (Admin Routes)
const AdminSkills = lazy(() => import('./components/pages/admin/adminSkills/AdminSkills'));
const AdminProjects = lazy(() => import('./components/pages/admin/adminProjects/AdminProjects'));

// Authentication Components
const AdminLogin = lazy(() => import('./components/pages/admin/AdminLogin'));

// Root Layout with Navbar
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// Public routes layout
const PublicLayout = () => {
  return <Outlet />;
};

// Public routes that are accessible by everyone
const PublicRoutes = () => {
  return (
    <main className='main'>
      <ScrollToTopButton /> {/* Button to scroll back to top */}
      <Suspense fallback={<PreLoader />}>
        {/* Suspense to display PreLoader while components are loading */}
        <Home />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

// Layout wrapper for admin routes
const AdminLayout = () => {
  return (
    <main className="main">
      <Suspense fallback={<PreLoader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

// Create router with React Router v6+ syntax without server-side fetching
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPageError />,
    children: [
      {
        path: "",
        element: <PublicLayout />,
        children: [
          { index: true, element: <PublicRoutes /> }
        ]
      },
      {
        path: "admin/login",
        element: <AdminLogin />
      },
      {
        path: "admin",
        element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
        children: [
          { index: true, element: <Navigate to="skills" /> },
          { path: "skills", element: <AdminSkills /> },
          { path: "projects", element: <AdminProjects /> }
        ]
      }
    ]
  }
]);

function App() {
  // Initialize AOS (Animate On Scroll) library for animations
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <ErrorBoundary> {/* Catch any errors in the app and show fallback UI */}
      <AuthProvider> {/* Provide authentication context to child components */}
        <main id='App'>
          {/* Toast notifications setup */}
          <Toaster
            position="top-right"
            containerStyle={{
              position: 'fixed',
              zIndex: 10000,
            }}
            toastOptions={{
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
                maxWidth: '500px',
              },
            }}
          />
          {/* Suspense: Displays PreLoader while waiting for the lazy-loaded components */}
          <Suspense fallback={<PreLoader />}>
            <RouterProvider router={router} />
          </Suspense>
        </main>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;