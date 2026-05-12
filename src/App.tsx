import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Salayverse from './pages/Salayverse';
import SalayverseSearch from './pages/SalayverseSearch';
import AppDetail from './pages/AppDetail';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoutes';
import BlogEdit from './pages/BlogEdit';
import ErrorPage from './pages/Error404';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-slate-950/70 overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/salayverse" element={<Salayverse />} />
            <Route path="/salayverse/search" element={<SalayverseSearch />} />
            <Route path="/salayverse/app/:id" element={<AppDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<PrivateRoute><BlogEdit /></PrivateRoute>} />
            <Route path="/edit/:slug" element={<PrivateRoute><BlogEdit /></PrivateRoute>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <ScrollToTop />
          <Footer />
          <BackToTop />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;