import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        🚧 No Projects Yet...
      </h1>
      <p className="text-lg md:text-xl text-gray-400 text-center max-w-lg">
        I&apos;m currently working on exciting ideas.
        <br /> Stay tuned — new projects will be added soon! 🚀
      </p>

      <div className="mt-10">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-600/50"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}
