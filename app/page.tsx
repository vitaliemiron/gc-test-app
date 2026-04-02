export default function Home() {
  return <main><h1>GC Test App</h1><p>Hello from GitHub Control test!</p></main>;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
}

export async function getReviews(productId: string): Promise<Review[]> {
  const res = await fetch(`/api/products/${productId}/reviews`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();
}

export async function submitReview(productId: string, rating: number, comment: string) {
  const res = await fetch(`/api/products/${productId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rating, comment }),
  });
  if (!res.ok) throw new Error('Failed to submit review');
  return res.json();
}
