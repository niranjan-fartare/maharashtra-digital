import { Cpu, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Smart Governance',
    description: 'Leveraging technology to streamline government processes and enhance citizen services.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Digital Security',
    description: 'Ensuring robust cybersecurity measures to protect digital infrastructure and citizen data.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Rapid Innovation',
    description: 'Fostering a culture of innovation to drive rapid technological advancements across the state.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Empowering Digital Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}