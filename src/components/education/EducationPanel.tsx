import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

const EducationPanel = () => {
  return (
    <Tab.Panel>
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-1">Education</h2>
        <p className="text-accent mb-8">Where I&apos;ve Studied</p>
        <div className="flex flex-col gap-8 mb-8">
          <div className="border-l-4 border-l-zinc-800 px-4 py-2 relative">
            <div className="w-3 h-3 rounded-full bg-primary absolute top-[15px] -left-[8px]" />
            <p className="text-primary font-semibold text-lg mb-1">
              Ingeniería de Sistemas -{' '}
              <Link href="https://www.unipamplona.edu.co/">
                <a className="text-accent font-normal hover:underline">
                  @UniPamplona
                </a>
              </Link>
            </p>
            <h3 className="mb-2 text-accent text-sm">May, 2018 - Present</h3>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-1">Online Education</h2>
        <p className="text-accent mb-8">Where I&apos;ve Studied</p>
        <div className="flex flex-col gap-6">
          <div className="p-4 border-base-100 flex">
            <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/udemy-logo.png"
                className="object-cover transition-opacity duration-300 ease-in-out"
                alt="Udemy Logo"
                layout="fill"
              />
            </div>
            <div className="ml-4">
              <Link href="https://www.udemy.com/certificate/UC-a1c353f6-6bb4-403c-8e2b-4ca2d0a984d1/">
                <a className="text-primary font-semibold hover:underline">
                  Javascript Moderno
                </a>
              </Link>
              <p className="text-accent text-sm">
                Udemy - ID UC-a1c353f6-6bb4-403c-8e2b-4ca2d0a984d1
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
};

export default EducationPanel;
