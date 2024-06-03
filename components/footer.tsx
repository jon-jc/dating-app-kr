import {
  CoinsIcon,
  HomeIcon,
  Link,
  MessageCircleIcon,
  PlusIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const FooterPage = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm dark:shadow-none">
      <nav className="flex items-center gap-4">
        <Link href="/">
          <Button className="rounded-full" size="icon" variant="ghost">
            <HomeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </Button>
        </Link>
        <Button className="rounded-full" size="icon" variant="ghost">
          <Link href="/profile">
            <MessageCircleIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </Link>
        </Button>
        <Button className="rounded-full" size="icon" variant="ghost">
          <Link href="/profile">
            <UserIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </Link>
        </Button>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="rounded-full" size="icon" variant="ghost">
          <PlusIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </Button>
        <Link href="/tokens">
          <Button className="rounded-full" size="icon" variant="ghost">
            <CoinsIcon className="w-6 h-6 text-primary" />
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default FooterPage;
