import { Tab } from '@headlessui/react';
import Link from 'next/link';

const ContactPanel = () => {
  return (
    <Tab.Panel>
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-1">Contact Me</h2>
        <p className="text-accent mb-8">
          Want to build something great?, write to me! I will always be willing
          to work with you!
        </p>
        <div className="flex">
          <Link href="mailto:andrebrayan74@gmail.com">
            <a className="border-[1px] border-indigo-500 rounded-lg px-4 py-2 text-indigo-500 hover:bg-indigo-500 hover:text-white">
              Send me an email
            </a>
          </Link>
        </div>
      </div>
    </Tab.Panel>
  );
};

export default ContactPanel;
