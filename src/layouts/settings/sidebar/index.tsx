import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  onPageChange: (title: string, description: string) => void;
};

const Sidebar = ({ onPageChange }: Props) => {
  const location = useLocation();
  const {t} = useTranslation()
  useEffect(() => {
    switch (location.pathname) {
      case '/settings':
        onPageChange(`${t('settings')}`, `${t('settingDesc')}`);
        break;
      case '/settings/post':
        onPageChange(`${t('posts')}`, `${t('postDesc')}`);
        break;
      case '/settings/users':
        onPageChange(`${t('users')}`, `${t('usersDesc')}`);
        break;
      default:
        onPageChange(`${t('settings')}`, `${t('settingsDesc')}`);
    }
  }, [location.pathname, onPageChange]);

  return (
    <div>
      <div className='flex flex-col gap-4 items-start'>
        <Link
          to="/settings"
          className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-10 focus:bg-muted hover:underline px-4'
        >
          {t('settings')}
        </Link>
        <Link
          to="/settings/post"
          className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline px-4'
        >
          {t('posts')}
        </Link>
        <Link
          to="/settings/users"
          className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline px-4'
        >
          {t('users')}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;