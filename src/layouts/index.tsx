import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="relative max-w-screen-xl bg-background mx-auto">
      <div className='sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur'>
        <Header />
      </div>
      <div className='min-h-screen'>
      <Outlet />
      </div>
      <Footer />
      </main>
      
  );
};

export default Layout;