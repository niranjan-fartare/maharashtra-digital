import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Maharashtra.Digital
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</Link>
          <Link href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          <ModeToggle />
          <Button variant="default">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}