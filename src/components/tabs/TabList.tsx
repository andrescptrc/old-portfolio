import { Tab } from '@headlessui/react';
import TabListItem from './TabListItem';

const TabList = () => {
  return (
    <Tab.List className="text-white mx-4 rounded-lg flex gap-2 p-4 border-[1px] border-zinc-700 mb-4 flex-wrap">
      <TabListItem text="Projects" />
      <TabListItem text="Experience" />
      <TabListItem text="Education" />
      <TabListItem text="Contact" />
    </Tab.List>
  );
};

export default TabList;
