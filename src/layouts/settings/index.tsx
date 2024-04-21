import React, { useState } from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Sidebar from './sidebar';

type Props = {};

const SettingsLayout = (props: Props) => {
  const [pageTitle, setPageTitle] = useState('Settings');
  const [pageDescription, setPageDescription] = useState(
    'Manage your account settings and set e-mail preferences'
  );

  const handlePageChange = (title: string, description: string) => {
    setPageTitle(title);
    setPageDescription(description);
  };

  return (
    <main className="max-w-screen-xl min-w-sm mx-auto">
      <Header />
      <div className="mt-16 min-h-screen rounded-lg border p-10 min-w-[835px]">
        <div className="mb-8">
          <div className="space-y-0.5">
            <h1 className="text-2xl font-bold tracking-tight">{pageTitle}</h1>
            <p className="text-muted-foreground text-sm">{pageDescription}</p>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="mt-5 shrink-0 bg-border h-[1px] w-full"
          ></div>
        </div>
        <div className="flex mt-3 gap-3">
          <div className="w-[20%]">
            <Sidebar onPageChange={handlePageChange} />
          </div>
          <div className="w-[70%] h-full">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SettingsLayout;