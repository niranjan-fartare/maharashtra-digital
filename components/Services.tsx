import { Code, Smartphone, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: 'Web Development',
    description: 'Custom web applications tailored to your unique business needs.',
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: 'Responsive Design',
    description: 'Mobile-first designs that look great on all devices.',
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites that provide the best user experience.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}