import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';

const TabListItem = ({ text }: TabListItemProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={classNames(
            { 'bg-blue-500': selected },
            'font-bold bg-zinc-800 py-2 px-4 rounded-md text-white'
          )}
        >
          {text}
        </button>
      )}
    </Tab>
  );
};

type TabListItemProps = {
  text: string;
};

export default TabListItem;
