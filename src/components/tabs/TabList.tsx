import { Tab } from '@headlessui/react';
import TabListItem from './TabListItem';

const TabList = () => {
  return (
    <Tab.List className="text-white mx-4 rounded-lg flex p-4 border-[1px] border-zinc-700 mb-4 bg-black">
      <div className="!overflow-x-auto">
        <div className="space-x-2 w-[485px] ">
          <TabListItem text="Projects" />
          <TabListItem text="Experience" />
          <TabListItem text="Education" />
          <TabListItem text="Contact" />
        </div>
      </div>
    </Tab.List>
  );
};

export default TabList;
