import { Tab } from '@headlessui/react';
import ContactPanel from '../contact/ContactPanel';
import EducationPanel from '../education/EducationPanel';
import ExperiencePanel from '../experience/ExperiencePanel';
import ProjectsPanel from '../projects/ProjectsPanel';
import TabList from './TabList';

const TabGroup = () => {
  return (
    <div className="col-span-1 lg:col-span-8 lg:-mt-16">
      <Tab.Group>
        <TabList />
        <Tab.Panels
          as="div"
          className="text-white mx-4 rounded-lg flex gap-2 p-4 border-[1px] border-zinc-700"
        >
          <ProjectsPanel />
          <ExperiencePanel />
          <EducationPanel />
          <ContactPanel />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabGroup;
