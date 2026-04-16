import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>GC Test App</h1>
      <p>Hello from GitHub Control test!</p>
      <Link href="/about">About</Link>
    </main>
  );
}
