export default function Home() {
  return <main><h1>GC Test App</h1><p>Hello from GitHub Control test!</p></main>;
}

interface Product {
  name: string;
  price: number;
  currency: string;
}

export function formatPrice(product: Product): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.currency,
  });
  return formatter.format(product.price);
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch('/api/products');
  return res.json();
}
