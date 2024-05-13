'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { HeartPulseIcon } from "lucide-react"

const Landing = () => {
  return (
    <main className="flex flex-col min-h-[100dvh]">
  
    <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Profile</span>
          </Link>
          <Image
            alt="Profile"
            className="object-cover w-full h-64"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white dark:bg-gray-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">Jiyeon, 27</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Seoul</p>
              </div>
              <Button className="rounded-full" size="icon" variant="ghost">
                <HeartIcon className="w-5 h-5 fill-primary" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              I love exploring new cafes and trying different cuisines. My hobbies include photography, reading, and
              traveling.
            </p>
          </div>
        </Card>
        <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Profile</span>
          </Link>
          <Image
            alt="Profile"
            className="object-cover w-full h-64"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white dark:bg-gray-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">Minsu, 30</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Busan</p>
              </div>
              <Button className="rounded-full" size="icon" variant="ghost">
                <HeartIcon className="w-5 h-5 fill-primary" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              I am an avid hiker and love exploring the great outdoors. In my free time, I also enjoy playing the
              guitar and learning new languages.
            </p>
          </div>
        </Card>
        <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Profile</span>
          </Link>
          <Image
            alt="Profile"
            className="object-cover w-full h-64"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white dark:bg-gray-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">Yuna, 25</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Seoul</p>
              </div>
              <Button className="rounded-full" size="icon" variant="ghost">
                <HeartIcon className="w-5 h-5 fill-primary" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              I am a passionate foodie who loves trying new restaurants and experimenting with recipes in the kitchen.
              In my free time, I enjoy painting and going to art exhibitions.
            </p>
          </div>
        </Card>
        <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Profile</span>
          </Link>
          <Image
            alt="Profile"
            className="object-cover w-full h-64"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white dark:bg-gray-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">Seungmin, 28</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Incheon</p>
              </div>
              <Button className="rounded-full" size="icon" variant="ghost">
                <HeartIcon className="w-5 h-5 fill-primary" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              I am a passionate traveler who loves exploring new cultures and cuisines. In my free time, I enjoy going
              to the gym, reading books, and attending music concerts.
            </p>
          </div>
        </Card>
        <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Profile</span>
          </Link>
          <Image
            alt="Profile"
            className="object-cover w-full h-64"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white dark:bg-gray-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">Eunbi, 26</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Daegu</p>
              </div>
              <Button className="rounded-full" size="icon" variant="ghost">
                <HeartIcon className="w-5 h-5 fill-primary" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              I am a passionate about fashion and love to keep up with the latest trends. In my free time, I enjoy
              going to the movies, attending art exhibitions, and volunteering at local animal shelters.
            </p>
          </div>
        </Card>
        <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Profile</span>
          </Link>
          <Image
            alt="Profile"
            className="object-cover w-full h-64"
            height={500}
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="bg-white dark:bg-gray-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">Jaemin, 29</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Gwangju</p>
              </div>
              <Button className="rounded-full" size="icon" variant="ghost">
                <HeartIcon className="w-5 h-5 fill-primary" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              I am an avid reader and love discussing books with others. In my free time, I also enjoy hiking, playing
              chess, and learning new skills like coding and photography.
            </p>
          </div>
        </Card>
      </div>
    </div>
    <footer className="bg-white dark:bg-gray-950 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm dark:shadow-none">
      <nav className="flex items-center gap-4">
        <Link href="#">
          <HomeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </Link>
        <Link href="#">
          <MessageCircleIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </Link>
        <Link href="#">
          <UserIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="rounded-full" size="icon" variant="ghost">
          <PlusIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </Button>
        <Button className="rounded-full" size="icon" variant="ghost">
          <CoinsIcon className="w-6 h-6 text-primary" />
        </Button>
      </div>
    </footer>
  </main>
)
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
)
}


function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
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
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
)
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
)
}


function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
}


function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
)
}


function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
)
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
}
  


export default Landing