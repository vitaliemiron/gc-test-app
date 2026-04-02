export default function Home() {
  return <main><h1>GC Test App</h1><p>Hello from GitHub Control test!</p></main>;
}

export async function addToCart(productId: string, quantity: number) {
  const res = await fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity }),
  });
  return res.json();
}
