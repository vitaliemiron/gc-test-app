export default function Home() {
  return <main><h1>GC Test App</h1><p>Hello from GitHub Control test!</p></main>;
}

export async function subscribeNewsletter(email: string) {
  const res = await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error('Subscription failed');
  return res.json();
}
