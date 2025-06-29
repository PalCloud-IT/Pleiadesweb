'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Rocket, 
  Brain, 
  Globe, 
  Satellite, 
  Zap, 
  Target,
  ArrowRight,
  ChevronDown,
  Mail
} from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black smooth-scroll">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Pleiades
            <span className="text-[#00aaff]"> Corporation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Pioneering the future through revolutionary aerospace technologies and 
            next-generation artificial intelligence solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-effect border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-[#00aaff] mb-2">2022</div>
                <div className="text-white">Company Founded</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-[#00aaff] mb-2">Seed</div>
                <div className="text-white">Funding Round</div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-[#00aaff] mb-2">∞</div>
                <div className="text-white">Possibilities</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => router.push('/aerospace')}
              className="bg-[#003f88] hover:bg-[#00aaff] transition-all duration-300 hover-lift"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Aerospace
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              onClick={() => router.push('/ai')}
              className="bg-[#003f88] hover:bg-[#00aaff] transition-all duration-300 hover-lift"
            >
              <Brain className="w-5 h-5 mr-2" />
              Discover NovusAI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('divisions')}
            className="animate-bounce text-white hover:text-[#00aaff] transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-20 relative">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#00aaff]">Divisions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Two specialized divisions working in harmony to push the boundaries of what's possible
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pleiades Aerospace */}
            <Card className="glass-effect border-gray-700 hover-lift cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003f88] to-[#00aaff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Pleiades Aerospace</CardTitle>
                <CardDescription className="text-gray-300">
                  Revolutionary rocket technology and satellite solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00aaff]">Iris-R2</div>
                    <div className="text-sm text-gray-400">In Development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00aaff]">35%</div>
                    <div className="text-sm text-gray-400">Progress</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  Developing next-generation launch vehicles and satellite technology for the future of space exploration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Launch Vehicles</Badge>
                  <Badge variant="secondary">Satellite Systems</Badge>
                  <Badge variant="secondary">Space Technology</Badge>
                </div>
                <Button 
                  className="w-full bg-[#003f88] hover:bg-[#00aaff] transition-colors"
                  onClick={() => router.push('/aerospace')}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* NovusAI */}
            <Card className="glass-effect border-gray-700 hover-lift cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003f88] to-[#00aaff] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">NovusAI</CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced AI for government, military, and scientific applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00aaff]">Late 2026</div>
                    <div className="text-sm text-gray-400">Expected Release</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00aaff]">10%</div>
                    <div className="text-sm text-gray-400">Core Progress</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  AI systems specialized in government analysis, scientific simulations, and aerospace calculations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Military Analysis</Badge>
                  <Badge variant="secondary">Scientific AI</Badge>
                  <Badge variant="secondary">Aerospace Computing</Badge>
                </div>
                <Button 
                  className="w-full bg-[#003f88] hover:bg-[#00aaff] transition-colors"
                  onClick={() => router.push('/ai')}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#00aaff]">Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-effect border-gray-700 text-center hover-lift">
              <CardHeader>
                <Globe className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                <CardTitle className="text-white">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Creating technologies that benefit humanity and advance our understanding of the universe.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gray-700 text-center hover-lift">
              <CardHeader>
                <Zap className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                <CardTitle className="text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Pushing the boundaries of what's possible through cutting-edge research and development.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gray-700 text-center hover-lift">
              <CardHeader>
                <Target className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                <CardTitle className="text-white">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Maintaining the highest standards in everything we do, from research to deployment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-[#00aaff]">Updated</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Get the latest updates on our groundbreaking developments and mission progress.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email to get updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black border-gray-600 text-white placeholder-gray-400"
                required
              />
              <Button 
                type="submit" 
                className="bg-[#003f88] hover:bg-[#00aaff] transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
            
            <p className="text-sm text-gray-400 mt-4">
              We only send important updates and mission-related announcements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}