"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SignUp() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4 ">
      <Card>
        <CardHeader>
          <CardTitle className="">Sign Up</CardTitle>
          <CardDescription className="">
            Create an account to start tracking your job applications.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Keith Laranjo"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="keith@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Name</Label>
              <Input
                id="password"
                type="password"
                placeholder="Keith Laranjo"
                required
              />
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </form>
      </Card>
    </div>
  );
}
