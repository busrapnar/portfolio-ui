import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  onPageChange: (title: string, description: string) => void;
};

const Sidebar = ({ onPageChange }: Props) => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/settings':
        onPageChange('Ayarlar', 'Manage your account settings and set e-mail preferences');
        break;
      case '/settings/post':
        onPageChange('Yazılar', 'Manage your posts settings');
        break;
      case '/settings/users':
        onPageChange('Kullanıcılar', 'Manage users settings');
        break;
      default:
        onPageChange('Settings', 'Manage your account settings and set e-mail preferences');
    }
  }, [location.pathname, onPageChange]);

  return (
    <div>
      <div className='flex flex-col gap-4 items-start'>
        <Link
          to="/settings"
          className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-10 focus:bg-muted hover:underline px-4'
        >
          Ayarlar
        </Link>
        <Link
          to="/settings/post"
          className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline px-4'
        >
          Yazılar
        </Link>
        <Link
          to="/settings/users"
          className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline px-4'
        >
          Kullanıcılar
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;