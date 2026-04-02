export default function Home() {
  return <main><h1>GC Test App</h1><p>Hello from GitHub Control test!</p></main>;
}

export function calculateDiscount(price: number, percent: number): number {
  return price - (price * percent / 100);
}
