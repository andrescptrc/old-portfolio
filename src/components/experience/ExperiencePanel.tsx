import { Tab } from '@headlessui/react';
import Link from 'next/link';

const ExperiencePanel = () => {
  return (
    <Tab.Panel>
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-1">Experience</h2>
        <p className="text-accent mb-8">Where I&apos;ve Worked</p>
        <div className="flex flex-col gap-8">
          <div className="border-l-4 border-l-zinc-800 px-4 py-2 relative">
            <div className="w-3 h-3 rounded-full bg-indigo-500 absolute top-[15px] -left-[8px]" />
            <p className="text-indigo-500 font-semibold text-lg mb-1">
              Front-end Developer -{' '}
              <Link href="https://ed.team/">
                <a className="text-accent font-normal hover:underline">
                  @EDteam
                </a>
              </Link>
            </p>
            <h3 className="mb-6 text-accent text-sm">Dec, 2020 - Sep, 2022</h3>
            <ul className="text-accent space-y-4 text-[15px]">
              <li className='before:content-["▹"] before:text-indigo-500 before:absolute before:left-0 before:top-0 pl-6 relative'>
                Development and maintenance of applications built with NextJs.
              </li>
              <li className='before:content-["▹"] before:text-indigo-500 before:absolute before:left-0 before:top-0 pl-6 relative'>
                Change the login flow between the static web and the app.
              </li>
              <li className='before:content-["▹"] before:text-indigo-500 before:absolute before:left-0 before:top-0 pl-6 relative'>
                Refactoring and improvement of the main app.
              </li>
              <li className='before:content-["▹"] before:text-indigo-500 before:absolute before:left-0 before:top-0 pl-6 relative'>
                Improvements in the purchase flow of subscriptions.
              </li>
              <li className='before:content-["▹"] before:text-indigo-500 before:absolute before:left-0 before:top-0 pl-6 relative'>
                Migration of the main app to TypeScript.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
};

export default ExperiencePanel;
