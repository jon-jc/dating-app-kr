import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CreateProfile() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
      <div className="p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Create Your Profile</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Share your unique personality and interests to find your perfect
              match.
            </p>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Age
                </label>
                <Input id="age" type="number" placeholder="Enter your age" />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Location
                </label>
                <Input id="location" placeholder="Enter your location" />
              </div>
              <div>
                <label
                  htmlFor="occupation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Occupation
                </label>
                <Input id="occupation" placeholder="Enter your occupation" />
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Bio
                </label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="min-h-[120px]"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Upload Photos</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Share your best photos to showcase your personality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/model.png"
                  width={200}
                  height={200}
                  alt="Photo 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/model.png"
                  width={200}
                  height={200}
                  alt="Photo 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/model.png"
                  width={200}
                  height={200}
                  alt="Photo 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/model.png"
                  width={200}
                  height={200}
                  alt="Photo 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Answer Prompts</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Share your interests, hobbies, and values to help others get to know
            you.
          </p>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Interests
              </label>
              <Textarea
                id="interests"
                placeholder="What are your interests?"
                className="min-h-[120px]"
              />
            </div>
            <div>
              <label
                htmlFor="hobbies"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Hobbies
              </label>
              <Textarea
                id="hobbies"
                placeholder="What are your hobbies?"
                className="min-h-[120px]"
              />
            </div>
            <div>
              <label
                htmlFor="values"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Values
              </label>
              <Textarea
                id="values"
                placeholder="What are your values?"
                className="min-h-[120px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
            Create Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
