"use client";
import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  HeartIcon,
  HomeIcon,
  MessageCircleIcon,
  UserIcon,
  PlusIcon,
  CoinsIcon,
} from "lucide-react";
import ProfilePage from "./profile-page";
import TinderCard from "react-tinder-card";

interface Profile {
  name: string;
  location: string;
  hobbies: string;
  image: string;
}

const profiles: Profile[] = [
  {
    name: "Jiyeon, 27 (지연, 27)",
    location: "Seoul (서울)",
    hobbies:
      "I love exploring new cafes and trying different cuisines. My hobbies include photography, reading, and traveling. 새로운 카페를 탐험하고 다양한 요리를 시도하는 것을 좋아합니다. 제 취미는 사진 촬영, 독서, 여행입니다.",
    image: "/model.png",
  },
  {
    name: "Minho, 30 (민호, 30)",
    location: "Busan (부산)",
    hobbies:
      "I enjoy hiking, beach volleyball, and playing the guitar. I also love cooking and experimenting with new recipes. 저는 하이킹, 비치 발리볼, 기타 연주를 즐깁니다. 요리와 새로운 레시피 실험도 좋아합니다.",
    image: "/model.png",
  },
  {
    name: "Soojin, 25 (수진, 25)",
    location: "Incheon (인천)",
    hobbies:
      "I am passionate about painting, yoga, and attending art galleries. I also enjoy reading mystery novels. 저는 그림 그리기, 요가, 미술 전시회 방문에 열정적입니다. 또한 미스터리 소설 읽기를 좋아합니다.",
    image: "/model.png",
  },
  {
    name: "Jisoo, 28 (지수, 28)",
    location: "Daegu (대구)",
    hobbies:
      "My interests include running, watching movies, and learning new languages. I also love playing board games. 제 관심사는 달리기, 영화 감상, 새로운 언어 배우기입니다. 또한 보드 게임을 즐깁니다.",
    image: "/model.png",
  },
  {
    name: "Hyunwoo, 32 (현우, 32)",
    location: "Gwangju (광주)",
    hobbies:
      "I love playing basketball, traveling, and photography. I also enjoy trying different street foods. 저는 농구, 여행, 사진 촬영을 좋아합니다. 또한 다양한 길거리 음식을 시도하는 것을 즐깁니다.",
    image: "/model.png",
  },
  {
    name: "Eunji, 26 (은지, 26)",
    location: "Daejeon (대전)",

    hobbies:
      "My hobbies include dancing, baking, and reading science fiction books. I also enjoy going to concerts. 제 취미는 춤추기, 베이킹, 공상 과학 책 읽기입니다. 또한 콘서트에 가는 것을 즐깁니다.",
    image: "/model.png",
  },
];

const Landing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(profiles.length - 1);
  const [lastDirection, setLastDirection] = useState<string | undefined>();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(profiles.length)
        .fill(0)
        .map(() => React.createRef<any>()),
    []
  );

  const swiped = (direction: string, nameToDelete: string, index: number) => {
    setLastDirection(direction);
    setCurrentIndex(index - 1);
    currentIndexRef.current = index - 1;
  };

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`);
  };

  const swipe = async (dir: string) => {
    if (currentIndex >= 0 && currentIndex < profiles.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-4 md:p-6 relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 font-bold">
          DISLIKE
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 font-bold">
          LIKE
        </div>
        <div className="max-w-6xl mx-auto flex justify-center relative pb">
          {profiles.map((profile, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe absolute"
              key={profile.name}
              onSwipe={(dir) => swiped(dir, profile.name, index)}
              onCardLeftScreen={() => outOfFrame(profile.name, index)}
              preventSwipe={["up", "down"]}
            >
              <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out w-full mx-auto">
                <ProfilePage />
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Profile</span>
                </Link>
                <Image
                  alt="Profile"
                  className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                  src={profile.image}
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
                      <h3 className="font-bold text-lg sm:text-xl">
                        {profile.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        {profile.location}
                      </p>
                    </div>
                    <Button
                      className="rounded-full"
                      size="icon"
                      variant="ghost"
                    >
                      <HeartIcon className="w-5 h-5 fill-primary" />
                    </Button>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                    {profile.hobbies}
                  </p>
                </div>
              </Card>
            </TinderCard>
          ))}
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
