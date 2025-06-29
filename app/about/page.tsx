'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  Lightbulb,
  Shield,
  Heart,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible through cutting-edge research and development.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Maintaining the highest standards in everything we do, from research to deployment.'
    },
    {
      icon: Heart,
      title: 'Purpose',
      description: 'Creating technologies that benefit humanity and advance our understanding of the universe.'
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Delivering solutions that make a meaningful difference in science and exploration.'
    }
  ];

  const leadership = [
    {
      name: 'Elias Samuel',
      role: 'CEO & Founder',
      background: '13 year old in British school system, visionary entrepreneur',
      expertise: 'Strategic leadership, aerospace innovation'
    },
    {
      name: 'Edward Christie',
      role: 'COO',
      background: '13 year old in British school system, operations specialist',
      expertise: 'Operations management, business development'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-[#00aaff]">Pleiades</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Founded in 2022 by two ambitious Year 6 students with a vision to revolutionize 
            space exploration and artificial intelligence technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#00aaff]">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To accelerate humanity's expansion into space and enhance our scientific understanding 
                through revolutionary aerospace technologies and advanced artificial intelligence systems.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe that the future belongs to those who dare to dream beyond Earth's atmosphere 
                and those who harness the power of intelligent systems to solve humanity's greatest challenges.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="glass-effect border-gray-700">
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 text-[#00aaff] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">2022</div>
                    <div className="text-gray-300 text-sm">Company Founded</div>
                  </CardContent>
                </Card>
                <Card className="glass-effect border-gray-700">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-[#00aaff] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">Seed</div>
                    <div className="text-gray-300 text-sm">Funding Round</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-[#00aaff]" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    To be the leading force in space exploration and AI development, 
                    enabling humanity to become a multi-planetary species while solving 
                    Earth's most pressing challenges through intelligent technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="w-6 h-6 mr-2 text-[#00aaff]" />
                    Current Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Currently in our seed funding round, we are developing the Iris-R2 rocket 
                    and NovusAI system. Both projects are in active development with promising 
                    early results and strong investor interest.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#00aaff]">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="glass-effect border-gray-700 text-center hover-lift">
                  <CardHeader>
                    <IconComponent className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                    <CardTitle className="text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#00aaff]">Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Young visionaries with ambitious goals and the determination to achieve them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="glass-effect border-gray-700 hover-lift">
                <CardHeader>
                  <CardTitle className="text-white">{leader.name}</CardTitle>
                  <CardDescription className="text-[#00aaff]">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-300">{leader.background}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.split(', ').map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-[#003f88] text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f88] to-[#00aaff] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#00aaff]">Story</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">2022 - The Beginning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Elias Samuel and Edward Christie, two ambitious Year 6 students, decided to pursue 
                    their shared dream of starting a rocket company. What began as a bold idea between 
                    friends has evolved into a serious venture with real potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">2023 - Foundation and Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Formal establishment of Pleiades Corporation with initial concept development 
                    for the Iris-R2 rocket and early research into AI applications for aerospace. 
                    The foundation was laid for both our aerospace and AI divisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">2024 - Development Phase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Active development of both the Iris-R2 rocket system and NovusAI platform began. 
                    Initial designs, prototyping, and research partnerships were established to support 
                    our ambitious technical goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">2025 - Present Day</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Currently in our seed funding round, we continue to develop our core technologies 
                    while building strategic partnerships and preparing for the next phase of growth. 
                    Both the Iris-R2 and NovusAI projects are making significant progress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}