import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Header from "./header";

export default function NotificationsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Notifications</h2>
          <Button variant="ghost">Mark all as read</Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <Image
                src="/placeholder.svg"
                width={48}
                height={48}
                alt="User 1"
              />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Jane Doe</div>
              <p className="text-gray-500">You have a new match!</p>
            </div>
            <div className="text-gray-500 text-sm">2h ago</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <Image
                src="/placeholder.svg"
                width={48}
                height={48}
                alt="User 2"
              />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">John Smith</div>
              <p className="text-gray-500">You have a new message!</p>
            </div>
            <div className="text-gray-500 text-sm">1h ago</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <Image
                src="/placeholder.svg"
                width={48}
                height={48}
                alt="User 3"
              />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Sarah Lee</div>
              <p className="text-gray-500">Your profile was viewed!</p>
            </div>
            <div className="text-gray-500 text-sm">30m ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
