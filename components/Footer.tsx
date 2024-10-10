import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Maharashtra.Digital
            </Link>
            <p className="text-muted-foreground mt-2">Crafting digital experiences that matter.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-foreground hover:text-primary transition-colors">Twitter</Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">LinkedIn</Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">GitHub</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2023 Maharashtra.Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}