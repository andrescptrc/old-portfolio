import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ProfilePicture from '../components/profile/ProfilePicture';
import TabGroup from '../components/tabs/TabGroup';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brayan Carreño | Portfolio</title>
      </Head>
      <main className="min-h-screen min-w-screen bg-black font-display">
        <div className="h-32 w-full gradient-background" />
        <ProfilePicture />
        <TabGroup />
        <footer className="py-6 text-center">
          <p className="text-accent">Built with Next.js</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
