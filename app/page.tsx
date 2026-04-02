export default function Home() {
  return <main><h1>GC Test App</h1><p>Hello from GitHub Control test!</p></main>;
}

export async function toggleWishlist(productId: string) {
  const res = await fetch(`/api/wishlist/${productId}`, { method: 'POST' });
  if (!res.ok) throw new Error('Wishlist toggle failed');
  return res.json();
}
