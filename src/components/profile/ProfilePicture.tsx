import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { VscFilePdf } from 'react-icons/vsc';

const ProfilePicture = () => {
  return (
    <div className="col-span-1 lg:col-span-4">
      <div className="mx-4 border-[1px] border-base-100 rounded-lg flex flex-col justify-center items-center py-4 -mt-16 bg-black mb-4">
        <div className="relative">
          <Image
            src="/avatar/avatar.jpg"
            width={100}
            height={100}
            className="rounded-full"
            alt="Brayan Carreño"
          />
        </div>
        <div className="text-center">
          <h2 className="text-white text-2xl font-semibold">Brayan Carreño</h2>
          <div className="mt-4 space-y-2 text-base text-accent">
            <p>Front-end Developer • Cúcuta, Colombia</p>
            <p>I create things for the web.</p>
          </div>
        </div>
      </div>
      <div className="mx-4 rounded-lg flex justify-center space-x-8 py-4 text-white border-[1px] border-base-100 mb-4">
        <Link href="mailto:andrebrayan74@gmail.com" passHref>
          <a
            className="rounded-full p-3 border-[1px] border-base-100 hover:bg-base-100 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/in/brayan-carre%C3%B1o-460b70217/"
          passHref
        >
          <a
            className="rounded-full p-3 border-[1px] border-base-100 hover:bg-base-100 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </Link>
        <Link href="https://github.com/andrescptrc" passHref>
          <a
            className="rounded-full p-3 border-[1px] border-base-100 hover:bg-base-100 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="w-5 h-5" />
          </a>
        </Link>
        <Link href="/curriculum/brayan-carreño-resume.pdf" passHref>
          <a
            className="rounded-full p-3 border-[1px] border-base-100 hover:bg-base-100 cursor-pointer"
            download
            target="_blank"
          >
            <VscFilePdf className="w-5 h-5" />
          </a>
        </Link>
      </div>
      <div className="mx-4 rounded-lg flex flex-wrap justify-center gap-2 p-4 text-white border-[1px] border-base-100 mb-4">
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          next.js
        </span>
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          node.js
        </span>
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          tailwindcss
        </span>
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          react.js
        </span>
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          postgresql
        </span>
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          mongodb
        </span>
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          typescript
        </span>
        <span className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500">
          javascript
        </span>
      </div>
    </div>
  );
};

export default ProfilePicture;
