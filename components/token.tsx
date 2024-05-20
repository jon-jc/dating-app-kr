import Link from "next/link";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

export default function Tokens() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] py-20 px-4 md:px-6 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlock Exclusive Connections
        </h1>
        <p className="text-lg md:text-xl max-w-[600px] mb-8">
          Elevate your dating experience with our premium token system. Access
          exclusive features and connect with like-minded individuals.
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-full bg-white text-[#8B5CF6] px-6 py-3 text-lg font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          href="#"
        >
          Explore Packages
        </Link>
      </section>
      <section className="py-16 px-4 md:px-6" id="pricing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Choose Your Token Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-[#8B5CF6] py-6 px-8">
                <h3 className="text-2xl font-bold text-white">Starter</h3>
                <p className="text-lg text-white">
                  Get started with our basic plan
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                    100 Tokens
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                    Basic Features
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                    Limited Connections
                  </li>
                </ul>
                <Button className="w-full">Get Starter</Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-[#EC4899] py-6 px-8">
                <h3 className="text-2xl font-bold text-white">Premium</h3>
                <p className="text-lg text-white">Unlock exclusive features</p>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#EC4899]" />
                    500 Tokens
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#EC4899]" />
                    Advanced Features
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#EC4899]" />
                    Unlimited Connections
                  </li>
                </ul>
                <Button className="w-full">Get Premium</Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-[#8B5CF6] py-6 px-8">
                <h3 className="text-2xl font-bold text-white">Elite</h3>
                <p className="text-lg text-white">
                  Enjoy our top-tier experience
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                    1000 Tokens
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                    Premium Features
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                    Exclusive Connections
                  </li>
                </ul>
                <Button className="w-full">Get Elite</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Secure Checkout
          </h2>
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8 space-y-6">
              <div>
                <Label htmlFor="name">Name on Card</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <div className="flex items-center gap-2">
                    <Select>
                      <SelectTrigger id="expiry-month">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger id="expiry-year">
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                        <SelectItem value="2030">2030</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="flex justify-between items-center">
                <Button variant="outline">Pay with PayPal</Button>
                <Button>Pay with Card</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
