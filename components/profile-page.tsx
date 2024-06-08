"use client";
import { Button } from "@/components/ui/button";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import {
  CoffeeIcon,
  FilmIcon,
  BackpackIcon,
  LuggageIcon,
  BookIcon,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-4">
        <Button className="rounded-full" size="icon" variant="outline">
          <Image
            alt="User Avatar"
            className="rounded-full"
            height={40}
            src="/model.png"
            style={{
              aspectRatio: "1 / 1",
              objectFit: "cover",
            }}
            width={40}
          />
        </Button>
      </div>
      <div className="max-w-md mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <Image
              alt="User Avatar"
              className="rounded-full"
              height={64}
              src="/model.png"
              style={{
                aspectRatio: "1 / 1",
                objectFit: "cover",
              }}
              width={64}
            />
            <div>
              <h3 className="text-lg font-semibold">Hana Kim</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Seoul, Korea
              </p>
            </div>
          </div>
        </div>
        <Tabs className="border-b mt-4" defaultValue="about">
          <TabsList className="flex">
            <TabsTrigger value="about" className="flex-1">
              About & Photos
            </TabsTrigger>
          </TabsList>
          <TabsContent className="p-6" value="about">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Age</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">27</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Seoul, Korea
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Occupation</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Marketing
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Relationship Status</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Single
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
