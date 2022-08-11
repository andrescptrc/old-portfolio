import { ReactNode } from 'react';
import ProfilePicture from '../profile/ProfilePicture';
import TabGroup from '../tabs/TabGroup';

const MainLayout = ({ children, dontShowTab }: MainLayoutProps) => {
  console.log(dontShowTab);
  return (
    <main className="min-h-screen min-w-screen bg-black font-display">
      <div className="h-32 w-full gradient-background" />
      <div className="container grid grid-cols-1 lg:grid-cols-12 mx-auto">
        <ProfilePicture />
        {!dontShowTab && <TabGroup />}
        {children}
      </div>
      <footer className="py-6 text-center">
        <p className="text-accent">Built with Next.js</p>
      </footer>
    </main>
  );
};

type MainLayoutProps = {
  children: ReactNode;
  dontShowTab?: boolean;
};

export default MainLayout;
