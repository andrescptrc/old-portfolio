import type { NextPage } from 'next';
import Head from 'next/head';

import ProfilePicture from '../components/profile/ProfilePicture';
import TabGroup from '../components/tabs/TabGroup';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brayan Carreño | Portfolio</title>
      </Head>
      <main className="min-h-screen min-w-screen bg-black font-display">
        <div className="h-32 w-full bg-planet-1-pattern" />
        <div className="container grid grid-cols-1 lg:grid-cols-12 mx-auto">
          <ProfilePicture />
          <TabGroup />
        </div>
      </main>
    </>
  );
};

export default Home;
