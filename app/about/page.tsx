import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is a simple test application for GitHub Control integration testing.</p>
      <p>Built with Next.js and deployed via Docker.</p>
      <Link href="/">Back to home</Link>
    </main>
  );
}
