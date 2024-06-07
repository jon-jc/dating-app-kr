import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { PhoneCallIcon, UserSearchIcon } from "lucide-react";

export default function Chat() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 w-64 p-4">
        <div className="flex items-center justify-end mb-4">
          <Button variant="ghost" size="icon">
            <UserSearchIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              <Avatar>
                <Image src="/model.png" alt="User 1" width={32} height={32} />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">User 1</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                  Hey, are you free tonight?
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                2:30 PM
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              <Avatar>
                <Image src="/model.png" alt="User 2" width={32} height={32} />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">User 2</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                  Sounds good, lets meet up!
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                1:45 PM
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              <Avatar>
                <Image src="/model.png" alt="User 3" width={32} height={32} />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">User 3</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                  I am so excited for our date!
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                12:30 PM
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <Image src="/model.png" alt="User 1" width={32} height={32} />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">User 1</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Online
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <PhoneCallIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <VideoIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoveHorizontalIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="flex items-start gap-3">
            <Avatar>
              <Image src="/model.png" alt="User 1" width={32} height={32} />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
              <div className="font-medium">User 1</div>
              <div className="text-sm">Hey, are you free tonight?</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                2:30 PM
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
              <div className="text-sm">Sounds good, lets meet up!</div>
              <div className="text-xs text-gray-300 mt-1">1:45 PM</div>
            </div>
            <Avatar>
              <Image src="/model.png" alt="You" width={32} height={32} />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar>
              <Image src="/model.png" alt="User 1" width={32} height={32} />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
              <div className="font-medium">User 1</div>
              <div className="text-sm">I am so excited for our date!</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                12:30 PM
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4">
          <div className="relative">
            <Textarea
              placeholder="Type a message..."
              className="pr-16 resize-none"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3"
            >
              <SendIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
