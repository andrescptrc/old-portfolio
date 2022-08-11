export const PROJECTS: Record<string, ProjectT> = {
  kakaroto: {
    title: 'App - EDteam',
    tags: ['Next.js', 'React', 'Typescript', 'TailwindCSS'],
    description:
      'A web application for visualization and sale of courses. Generate your signatures, interact in the community, read blogs and more.',
    images: [
      '/projects/kakaroto.png',
      '/projects/kakaroto-1.png',
      '/projects/kakaroto-2.png'
    ],
    link: 'https://app.ed.team/'
  },
  soluciones: {
    title: 'SolucionesCloud - CMS',
    tags: ['React', 'Typescript', 'Vite', 'React Query', 'TailwindCSS'],
    description:
      'A web application to visualize the different services your company has offered. Manage your customers, your contacts, your suppliers, upload your CSV files and your invoices.',
    images: ['/projects/cloud.png', '/projects/cloud-1.png']
  },
  countries: {
    title: 'Countries List',
    tags: ['React', 'SASS'],
    description:
      'A web application to visualize different country data. Filter countries by continents and their name.',
    images: ['/projects/countries.jpg', '/projects/countries-1.jpg']
  }
};

type ProjectT = {
  title: string;
  tags: string[];
  description: string;
  images: string[];
  link?: string;
};
