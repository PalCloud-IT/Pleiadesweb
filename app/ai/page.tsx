'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Cpu, 
  Database, 
  Zap,
  Target,
  BarChart3,
  ArrowRight,
  Clock,
  CheckCircle,
  Atom,
  Telescope,
  Calculator,
  Shield,
  Globe
} from 'lucide-react';

export default function AIPage() {
  const capabilities = [
    {
      icon: Shield,
      title: 'Government & Military Analysis',
      description: 'Advanced intelligence analysis and strategic decision support systems',
      performance: 'Classified performance metrics'
    },
    {
      icon: Atom,
      title: 'Scientific Simulations',
      description: 'Advanced molecular dynamics, climate modeling, and physics simulations',
      performance: 'Target: 1000x faster than traditional methods'
    },
    {
      icon: Telescope,
      title: 'Aerospace Calculations',
      description: 'Orbital mechanics, trajectory optimization, and mission planning',
      performance: 'Target: 99.9% accuracy in trajectory predictions'
    }
  ];

  const benchmarks = [
    { task: 'Natural Language Understanding', score: 'In Development', competitor: 85 },
    { task: 'Scientific Reasoning', score: 'In Development', competitor: 72 },
    { task: 'Mathematical Problem Solving', score: 'In Development', competitor: 88 },
    { task: 'Code Generation', score: 'In Development', competitor: 81 },
    { task: 'Aerospace Calculations', score: 'In Development', competitor: 89 }
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
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Brain className="w-12 h-12 text-[#00aaff] mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Novus<span className="text-[#00aaff]">AI</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              Advanced artificial intelligence designed for government & military analysis, scientific simulations, and aerospace applications
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="glass-effect border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#00aaff] mb-2">
                    <Clock className="w-8 h-8 mx-auto" />
                  </div>
                  <div className="text-white">In Development</div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#00aaff] mb-2">Late 2026</div>
                  <div className="text-white">Expected Release</div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#00aaff] mb-2">∞</div>
                  <div className="text-white">Possibilities</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" disabled className="bg-gray-600 cursor-not-allowed">
                <Clock className="w-5 h-5 mr-2" />
                Coming Soon
              </Button>
              <Button size="lg" disabled className="bg-gray-600 cursor-not-allowed">
                Coming Soon
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development <span className="text-[#00aaff]">Status</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              NovusAI is currently in active development, with our team working on breakthrough capabilities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Current Development Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Core AI Architecture</span>
                    <span className="text-[#00aaff] font-bold">10%</span>
                  </div>
                  <Progress value={10} className="h-3 bg-gray-700" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Military Analysis Module</span>
                    <span className="text-[#00aaff] font-bold">5%</span>
                  </div>
                  <Progress value={5} className="h-3 bg-gray-700" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Scientific Simulation Engine</span>
                    <span className="text-[#00aaff] font-bold">8%</span>
                  </div>
                  <Progress value={8} className="h-3 bg-gray-700" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Aerospace Integration</span>
                    <span className="text-[#00aaff] font-bold">3%</span>
                  </div>
                  <Progress value={3} className="h-3 bg-gray-700" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planned Capabilities Section */}
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
              Planned <span className="text-[#00aaff]">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              NovusAI will excel in specialized applications where precision and security matter most
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="glass-effect border-gray-700 hover-lift">
                  <CardHeader className="text-center">
                    <IconComponent className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                    <CardTitle className="text-white">{capability.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="bg-[#003f88] text-white">
                      {capability.performance}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Benchmarks */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Target <span className="text-[#00aaff]">Performance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our development goals for NovusAI performance metrics
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Development Targets vs. Current Industry Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {benchmarks.map((benchmark, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{benchmark.task}</span>
                      <div className="flex space-x-4">
                        <span className="text-[#00aaff] font-bold">{benchmark.score}</span>
                        <span className="text-gray-400">{benchmark.competitor}%</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-700 rounded">
                        <div className="h-2 bg-[#00aaff] rounded animate-pulse" style={{width: '20%'}}></div>
                      </div>
                      <Progress value={benchmark.competitor} className="h-2 bg-gray-800 opacity-50" />
                    </div>
                  </div>
                ))}
                <div className="flex justify-center space-x-6 mt-6">
                  <div className="flex items-center">
                    <div className="w-4 h-2 bg-[#00aaff] rounded mr-2"></div>
                    <span className="text-white">NovusAI (Target)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-2 bg-gray-400 rounded mr-2"></div>
                    <span className="text-gray-400">Current Industry</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003f88] to-[#00aaff] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Target <span className="text-[#00aaff]">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized applications where NovusAI will make breakthrough contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-effect border-gray-700 hover-lift">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-[#00aaff]" />
                  Defense & Intelligence
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced threat analysis and strategic planning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Specialized AI capabilities for government and military applications, providing advanced analysis and decision support.
                </p>
                <Badge variant="secondary" className="bg-red-900 text-white">
                  Classified Development
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gray-700 hover-lift">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Cpu className="w-6 h-6 mr-2 text-[#00aaff]" />
                  Scientific Computing
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced simulations and research acceleration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Accelerating scientific research through advanced computational capabilities and simulation optimization.
                </p>
                <Badge variant="secondary" className="bg-[#003f88] text-white">
                  In Development
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gray-700 hover-lift">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-6 h-6 mr-2 text-[#00aaff]" />
                  Aerospace Engineering
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Mission planning and spacecraft optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Optimizing spacecraft design, mission trajectories, and aerospace system performance through advanced AI analysis.
                </p>
                <Badge variant="secondary" className="bg-[#003f88] text-white">
                  Planning Phase
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gray-700 hover-lift">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-6 h-6 mr-2 text-[#00aaff]" />
                  Climate Analysis
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Environmental monitoring and prediction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Advanced climate modeling and environmental analysis for better understanding of global systems.
                </p>
                <Badge variant="secondary" className="bg-[#003f88] text-white">
                  Research Phase
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}