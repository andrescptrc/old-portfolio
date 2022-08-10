import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { FaEnvelope, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import TabGroup from '../components/tabs/TabGroup';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brayan Carreño | Portfolio</title>
      </Head>
      <main className="min-h-screen min-w-screen bg-black font-display">
        <div className="h-32 w-full gradient-background" />
        <div className="mx-4 border-[1px] border-base-100 rounded-lg flex flex-col justify-center items-center py-4 -mt-16 bg-black mb-4">
          <div className="relative">
            <Image
              src="/avatar/avatar.jpg"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h2 className="text-white text-2xl font-semibold">
              Brayan Carreño
            </h2>
            <div className="mt-4 space-y-2 text-base text-accent">
              <p>Front-end Developer • Cúcuta, Colombia</p>
              <p>I create things for the web.</p>
            </div>
          </div>
        </div>
        <div className="mx-4 rounded-lg flex justify-center space-x-8 py-4 text-white border-[1px] border-base-100 mb-4">
          <div className="rounded-full p-3 border-[1px] border-base-100">
            <FaEnvelope className="w-5 h-5" />
          </div>
          <div className="rounded-full p-3 border-[1px] border-base-100">
            <FaLinkedin className="w-5 h-5" />
          </div>
          <div className="rounded-full p-3 border-[1px] border-base-100">
            <FaGithubSquare className="w-5 h-5" />
          </div>
        </div>
        <div className="mx-4 rounded-lg flex flex-wrap justify-center gap-2 p-4 text-white border-[1px] border-base-100 mb-4">
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            next.js
          </span>
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            node.js
          </span>
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            tailwindcss
          </span>
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            react.js
          </span>
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            postgresql
          </span>
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            mongodb
          </span>
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            typescript
          </span>
          <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-primary">
            javascript
          </span>
        </div>
        <TabGroup />
        <footer className="py-6 text-center">
          <p className="text-accent">Built with Next.js</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
