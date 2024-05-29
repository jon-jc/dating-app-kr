"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { HeartIcon, HomeIcon, MessageCircleIcon, UserIcon, PlusIcon, CoinsIcon } from "lucide-react";
import ProfilePage from "./profile-page";

const Landing = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full mx-auto">
            <ProfilePage />
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Profile</span>
            </Link>
            <Image
              alt="Profile"
              className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
              src="/model.png"
              width={500}
              height={500}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />
            <div className="bg-white dark:bg-gray-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Jiyeon, 27 (지연, 27)</h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Seoul (서울)
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <HeartIcon className="w-5 h-5 fill-primary" />
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                I love exploring new cafes and trying different cuisines. My
                hobbies include photography, reading, and traveling.
                <br />
                새로운 카페를 탐험하고 다양한 요리를 시도하는 것을 좋아합니다.
                제 취미는 사진 촬영, 독서, 여행입니다.
              </p>
            </div>
          </Card>
          <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full mx-auto">
            <ProfilePage />
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Profile</span>
            </Link>
            <Image
              alt="Profile"
              className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
              src="/model.png"
              width={500}
              height={500}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />
            <div className="bg-white dark:bg-gray-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Jiyeon, 27 (지연, 27)</h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Seoul (서울)
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <HeartIcon className="w-5 h-5 fill-primary" />
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                I love exploring new cafes and trying different cuisines. My
                hobbies include photography, reading, and traveling.
                <br />
                새로운 카페를 탐험하고 다양한 요리를 시도하는 것을 좋아합니다.
                제 취미는 사진 촬영, 독서, 여행입니다.
              </p>
            </div>
          </Card>
          <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full mx-auto">
            <ProfilePage />
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Profile</span>
            </Link>
            <Image
              alt="Profile"
              className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
              src="/model.png"
              width={500}
              height={500}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />
            <div className="bg-white dark:bg-gray-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Jiyeon, 27 (지연, 27)</h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Seoul (서울)
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <HeartIcon className="w-5 h-5 fill-primary" />
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                I love exploring new cafes and trying different cuisines. My
                hobbies include photography, reading, and traveling.
                <br />
                새로운 카페를 탐험하고 다양한 요리를 시도하는 것을 좋아합니다.
                제 취미는 사진 촬영, 독서, 여행입니다.
              </p>
            </div>
          </Card>
          <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full mx-auto">
            <ProfilePage />
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Profile</span>
            </Link>
            <Image
              alt="Profile"
              className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
              src="/model.png"
              width={500}
              height={500}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />
            <div className="bg-white dark:bg-gray-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Jiyeon, 27 (지연, 27)</h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Seoul (서울)
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <HeartIcon className="w-5 h-5 fill-primary" />
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                I love exploring new cafes and trying different cuisines. My
                hobbies include photography, reading, and traveling.
                <br />
                새로운 카페를 탐험하고 다양한 요리를 시도하는 것을 좋아합니다.
                제 취미는 사진 촬영, 독서, 여행입니다.
              </p>
            </div>
          </Card>
          <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full mx-auto">
            <ProfilePage />
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Profile</span>
            </Link>
            <Image
              alt="Profile"
              className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
              src="/model.png"
              width={500}
              height={500}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />
            <div className="bg-white dark:bg-gray-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Jiyeon, 27 (지연, 27)</h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Seoul (서울)
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <HeartIcon className="w-5 h-5 fill-primary" />
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                I love exploring new cafes and trying different cuisines. My
                hobbies include photography, reading, and traveling.
                <br />
                새로운 카페를 탐험하고 다양한 요리를 시도하는 것을 좋아합니다.
                제 취미는 사진 촬영, 독서, 여행입니다.
              </p>
            </div>
          </Card>
          <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full mx-auto">
            <ProfilePage />
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Profile</span>
            </Link>
            <Image
              alt="Profile"
              className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
              src="/model.png"
              width={500}
              height={500}
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
            />
            <div className="bg-white dark:bg-gray-950 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Jiyeon, 27 (지연, 27)</h3>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Seoul (서울)
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <HeartIcon className="w-5 h-5 fill-primary" />
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                I love exploring new cafes and trying different cuisines. My
                hobbies include photography, reading, and traveling.
                <br />
                새로운 카페를 탐험하고 다양한 요리를 시도하는 것을 좋아합니다.
                제 취미는 사진 촬영, 독서, 여행입니다.
              </p>
            </div>
          </Card>
   

        </div>
      </div>
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
    </main>
  );
};

export default Landing;
