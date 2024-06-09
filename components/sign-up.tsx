import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[480px] space-y-8 rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#8e2de2] to-[#4a00e0]">
            <HeartIcon className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Luna Dating</h1>
          <p className="text-gray-500">The premier Korean dating app</p>
        </div>
        <div className="space-y-4">
          <Tabs defaultValue="sign-in">
            <TabsList className="grid grid-cols-2 rounded-lg bg-gray-100 p-1">
              <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email / Username</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email or username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-medium">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="#"
                    className="text-sm font-medium text-[#8e2de2] hover:underline"
                    prefetch={false}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo">Profile Photo</Label>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-gray-200">
                      <img src="/placeholder.svg" alt="Profile Photo" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="flex items-center justify-center space-x-4">
            <Button variant="outline" className="w-full">
              <ChromeIcon className="h-5 w-5 mr-2" />
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full">
              <FacebookIcon className="h-5 w-5 mr-2" />
              Sign in with Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
