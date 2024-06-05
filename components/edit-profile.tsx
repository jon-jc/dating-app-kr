import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EditProfile() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
      <div className="p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Edit Your Profile</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Update your information to keep your profile fresh and engaging.
            </p>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Age
                </label>
                <Input id="age" type="number" defaultValue="35" />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Location
                </label>
                <Input id="location" defaultValue="New York, NY" />
              </div>
              <div>
                <label
                  htmlFor="occupation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Occupation
                </label>
                <Input id="occupation" defaultValue="Software Engineer" />
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
                  defaultValue="I'm a software engineer with a passion for building innovative applications. In my free time, I enjoy hiking, reading, and spending time with my family."
                  className="min-h-[120px]"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Update Photos</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Replace your profile photos to showcase your latest look.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="Photo 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="Photo 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  width={200}
                  height={200}
                  alt="Photo 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
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
          <h2 className="text-3xl font-bold mb-4">Update Prompts</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Refresh your interests, hobbies, and values to keep your profile
            engaging.
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
                defaultValue="Reading, hiking, traveling, cooking"
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
                defaultValue="Photography, gardening, playing guitar"
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
                defaultValue="Family, honesty, sustainability, lifelong learning"
                className="min-h-[120px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
