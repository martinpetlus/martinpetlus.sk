import { Inter } from 'next/font/google';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const IconSize = 40;

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-zinc-900 text-red-500">
      <div className="flex flex-grow">
        <div className="m-auto">
          <h1 className="mb-4 text-4xl font-bold">
            <span className={inter.className}>Martin Petluš</span>
          </h1>
          <p className="grid grid-cols-4">
            <a
              href="https://github.com/martinpetlus"
              title="My GitHub profile"
              className="mx-auto"
            >
              <FaGithub className="text-red-500" size={IconSize} />
            </a>
            <a
              href="https://www.linkedin.com/in/martinpetlus/"
              title="My LinkedIn profile"
              className="mx-auto"
            >
              <FaLinkedin className="text-red-500" size={IconSize} />
            </a>
            <a
              href="https://twitter.com/martinpetlus"
              title="My Twitter profile"
              className="mx-auto"
            >
              <FaTwitter className="text-red-500" size={IconSize} />
            </a>
            <a
              href="https://sledujbyty.sk/"
              title="Sleduj Byty"
              className="mx-auto"
            >
              <Image
                src="/logo.svg"
                alt="Sleduj Byty"
                width={IconSize}
                height={IconSize}
                priority
              />
            </a>
          </p>
        </div>
      </div>
      <div className="py-2 text-center">
        <span className={inter.className}>© {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
