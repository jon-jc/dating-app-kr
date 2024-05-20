
import { Button } from "@/components/ui/button"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div>
      <div>
        <Button className="rounded-full" size="icon" variant="outline">
          <Image
            alt="User Avatar"
            className="rounded-full"
            height={40}
            src="/model.png"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          />
        </Button>
      </div>
      <div className="w-[400px]">
        <div className="bg-gray-100 dark:bg-gray-800 p-6">
          <div className="flex items-center gap-4">
            <Image
              alt="User Avatar"
              className="rounded-full"
              height={64}
              src="/model.png"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width={64}
            />
            <div>
              <h3 className="text-lg font-semibold">Hana Kim</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Seoul, Korea</p>
            </div>
          </div>
        </div>
        <Tabs className="border-b" defaultValue="about">
          <TabsList className="flex">
            <TabsTrigger value="about">About & Photos</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
          </TabsList>
          <TabsContent className="p-6" value="about">
            <div className="space-y-4">
              <p>
                Hi there! I am Hana, a 27-year-old marketing professional living in Seoul. I love exploring new cafes,
                watching Korean dramas, and going on hikes in the beautiful mountains around the city. I am looking for a
                kind, thoughtful partner to share my life with.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Age</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">27</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Seoul, Korea</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Occupation</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marketing</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Relationship Status</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Single</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Image
                  alt="Photo 1"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/model.png"
                  width={100}
                />
                <Image
                  alt="Photo 2"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/model.png"
                  width={100}
                />
                <Image
                  alt="Photo 3"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/model.png"
                  width={100}
                />
                <Image
                  alt="Photo 4"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/model.png"
                  width={100}
                />
                <Image
                  alt="Photo 5"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/model.png"
                  width={100}
                />
                <Image
                  alt="Photo 6"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/model.png"
                  width={100}
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent className="p-6" value="interests">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <CoffeeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm">Exploring Cafes</p>
              </div>
              <div className="flex items-center gap-2">
                <FilmIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm">Watching Korean Dramas</p>
              </div>
              <div className="flex items-center gap-2">
                <BackpackIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm">Hiking in the Mountains</p>
              </div>
              <div className="flex items-center gap-2">
                <LuggageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm">Traveling to New Places</p>
              </div>
              <div className="flex items-center gap-2">
                <BookIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm">Reading Fiction Novels</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function BackpackIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
    </svg>
  )
}


function BookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CoffeeIcon(props:  React.SVGProps<SVGSVGElement>) {
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
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  )
}


function FilmIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}


function LuggageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  )
}