/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tiZn3RVcgNj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-gray-500 dark:text-gray-400">Sign in to your account to continue.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <div className="mt-4 flex items-center justify-between text-sm">
            <Link href="#" className="font-medium text-gray-900 hover:underline dark:text-gray-50" prefetch={false}>
              Forgot password?
            </Link>
            <Link href="#" className="font-medium text-gray-900 hover:underline dark:text-gray-50" prefetch={false}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
