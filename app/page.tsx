export default function Home() {
  return <main><h1>GC Test App</h1><p>Hello from GitHub Control test!</p></main>;
}

export function calculateDiscount(price: number, percent: number): number {
  return price - (price * percent / 100);
}

export async function fetchUserData(userId: string) {
  const res = await fetch(`/api/users/${userId}`);
  const data = await res.json();
  return data;
}

export async function deleteUser(userId: string) {
  const res = await fetch(`/api/users/${userId}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Delete failed');
  return res.json();
}
