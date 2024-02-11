export default function Layout({ children }: { children: React.ReactNode }) {
  return <div 
    className="flex items-center container mx-auto max-w-md bg-white p-4">{ children }</div>;
}
