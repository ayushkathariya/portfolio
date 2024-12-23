export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-6">Currently Unavailable</h1>
        <div>
          <p className="text-lg font-light text-gray-700 dark:text-gray-300 mb-6">
            I’m unavailable at the moment, but you can still reach out to me.
            I’ll respond as soon as possible.
          </p>
          <a
            href="mailto:ayushkathariya7@gmail.com"
            className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            ayushkathariya7@gmail.com
          </a>
        </div>
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 Ayush Kathariya. Built with Next.js and Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
