import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='bg-[#101415]'>
    
    <div className="relative ">
      <div className='sticky top-0 z-50 w-full border-b border-border/40 bg-[#101415]/95 backdrop-blur supports-[backdrop-filter]:bg-[#101415]/60'>
        <Header />
      </div>
      <div className='min-h-screen max-w-screen-xl mx-auto'>
      <Outlet />
      </div>
      <Footer />
      </div>
      </main>
  );
};

export default Layout;