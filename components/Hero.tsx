import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-6">Elevate Your Web Presence</h1>
          <p className="text-xl mb-8 text-muted-foreground">We craft cutting-edge web solutions that drive growth and innovation for businesses across Maharashtra and beyond.</p>
          <Button size="lg">Start Your Project</Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
            alt="Web Development"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}