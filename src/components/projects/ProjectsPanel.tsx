import { Tab } from '@headlessui/react';
import Image from 'next/image';

const ProjectsPanel = () => {
  return (
    <Tab.Panel className="w-full">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-1">Projects</h2>
        <p className="text-accent mb-8">What I've worked on</p>
        <div className="flex flex-col gap-8">
          <div className="border-[1px] border-base-100 rounded-lg overflow-hidden">
            <div className="relative w-full h-64  bg-cover bg-center">
              <Image
                src="/projects/kakaroto.png"
                className="transition-all duration-300 ease-in"
                placeholder="blur"
                blurDataURL="/projects/kakaroto.png"
                layout="fill"
                objectFit="cover"
                alt="Kakaroto"
                priority
              />
            </div>
            <h3 className="font-semibold p-4">App - EDTeam</h3>
          </div>
          <div className="border-[1px] border-base-100 rounded-lg overflow-hidden">
            <div className="relative w-full h-64  bg-cover bg-center">
              <Image
                src="/projects/cloud.png"
                className="transition-all duration-300 ease-in"
                placeholder="blur"
                blurDataURL="/projects/cloud.png"
                layout="fill"
                objectFit="cover"
                alt="Soluciones Cloud"
                priority
              />
            </div>
            <h3 className="font-semibold p-4">SolucionesCloud - CMS</h3>
          </div>
          <div className="border-[1px] border-base-100 rounded-lg overflow-hidden">
            <div className="relative w-full h-64  bg-cover bg-center">
              <Image
                src="/projects/countries.jpg"
                className="transition-all duration-300 ease-in"
                placeholder="blur"
                blurDataURL="/projects/countries.jpg"
                layout="fill"
                objectFit="cover"
                alt="Countries"
                priority
              />
            </div>
            <h3 className="font-semibold p-4">Countries List</h3>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
};

export default ProjectsPanel;
