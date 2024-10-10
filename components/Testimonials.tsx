import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: 'Priya Sharma',
    company: 'TechInnovate Solutions',
    quote: 'Maharashtra.Digital transformed our online presence. Their expertise in web development is unmatched!',
  },
  {
    name: 'Rahul Desai',
    company: 'GreenEarth Initiatives',
    quote: 'Working with Maharashtra.Digital was a game-changer for our non-profit. They delivered beyond our expectations.',
  },
  {
    name: 'Anita Patel',
    company: 'FutureTech Industries',
    quote: 'The team at Maharashtra.Digital are true professionals. They brought our vision to life with precision and creativity.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}