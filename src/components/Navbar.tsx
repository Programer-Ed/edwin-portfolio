'use client';
import Switch from "./ui/Switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import  Link  from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed w-full py-2 px-4 z-[100] backdrop-blur-md dark:text-zinc-50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <h1 className="text-lg font-bold">Software Engineer</h1>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <div className="scale-75">
            <Switch />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="p-1 focus:outline-none">
              <svg 
                className="h-6 w-6"
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 mr-4 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <DropdownMenuItem>
                <a href="#README.md" className="w-full hover:text-blue-400">📄 README.md</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#projects" className="w-full hover:text-blue-400">✨ creations</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#contact" className="w-full hover:text-blue-400">💬 Contact</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Link
                    href="https://1drv.ms/w/s!Armvp48kcxT4cJhRKtKrRFFJy0Y?e=Q2J4sK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full hover:text-blue-400"
                  >
                    📝 Resume
                  </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 text-sm">
            <li><a href="#README.md" className="hover:text-blue-400">📄 README.md</a></li>
            <li><a href="#projects" className="hover:text-blue-400">✨ Creations</a></li>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-blue-400 text-sm focus:outline-none">
                More
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <DropdownMenuItem>
                  <a href="#contact" className="w-full hover:text-blue-400">💬 Contact</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="https://1drv.ms/w/s!Armvp48kcxT4cJhRKtKrRFFJy0Y?e=Q2J4sK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full hover:text-blue-400"
                  >
                    📝 Resume
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
          <div className="ml-4 scale-90">
            <Switch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
