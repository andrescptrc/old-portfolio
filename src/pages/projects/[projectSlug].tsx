import Image from 'next/image';
import { useRouter } from 'next/router';
import MainLayout from '../../components/layout/MainLayout';
import { PROJECTS } from '../../constants/projects.constants';
import { IoLinkSharp } from 'react-icons/io5';
import Link from 'next/link';

const ProjectPage = () => {
  const router = useRouter();
  const { projectSlug } = router.query;

  if (!projectSlug) return <h1>Loading...</h1>;

  const { title, tags, description, images, link } =
    PROJECTS[projectSlug as string];

  return (
    <MainLayout dontShowTab>
      <div className="text-white mx-4 rounded-lg p-4 border-[1px] border-zinc-700">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="rounded-lg flex flex-wrap gap-2 text-white mb-4">
          {tags.map((tag, index) => (
            <span
              className="rounded-full bg-purple-500/20 p-0.5 px-3 text-purple-500 text-sm"
              key={`tag-${index}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="pb-4">{description}</p>
        {link && (
          <Link href={link} passHref>
            <a
              className="rounded-full bg-zinc-800 p-0.5 px-3 text-indigo-500 flex w-fit items-center mb-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLinkSharp className="w-5 h-5 font-bold mr-2" />
              {link}
            </a>
          </Link>
        )}

        <div className="space-y-6">
          {images.map((image, index) => (
            <div
              className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
              key={`image-${index}`}
            >
              <Image
                src={image}
                className="transition-all duration-300 ease-in"
                placeholder="blur"
                blurDataURL={image}
                layout="fill"
                objectFit="cover"
                alt="Soluciones Cloud"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectPage;
