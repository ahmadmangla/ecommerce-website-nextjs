import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="container mx-auto max-w-3xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">404</div>
              <p className="text-lg text-gray-500 dark:text-gray-400">Oops, something went wrong!</p>
              <p className="text-lg text-gray-500 dark:text-gray-400">We're sorry, but the page you were trying to access is currently unavailable.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
