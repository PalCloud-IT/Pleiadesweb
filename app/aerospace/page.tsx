'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Rocket, 
  Satellite, 
  Target, 
  Gauge,
  Calendar,
  MapPin,
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  Wrench
} from 'lucide-react';

export default function AerospacePage() {
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
              <Rocket className="w-12 h-12 text-[#00aaff] mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Pleiades <span className="text-[#00aaff]">Aerospace</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              Developing revolutionary rocket technology and advanced satellite systems for the future of space exploration
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

      {/* Iris-R2 Rocket Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Iris-R2 <span className="text-[#00aaff]">Rocket</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship launch vehicle currently in development, designed for reliability, efficiency, and versatility
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Wrench className="w-6 h-6 mr-2 text-[#00aaff]" />
                    Development Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Overall Progress</span>
                      <span className="text-[#00aaff] font-bold">35%</span>
                    </div>
                    <Progress value={35} className="h-3 bg-gray-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Engine Design</span>
                      <span className="text-[#00aaff] font-bold">60%</span>
                    </div>
                    <Progress value={60} className="h-3 bg-gray-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Guidance Systems</span>
                      <span className="text-[#00aaff] font-bold">25%</span>
                    </div>
                    <Progress value={25} className="h-3 bg-gray-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Testing Phase</span>
                      <span className="text-[#00aaff] font-bold">10%</span>
                    </div>
                    <Progress value={10} className="h-3 bg-gray-700" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="w-6 h-6 mr-2 text-[#00aaff]" />
                    Target Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Payload to LEO</span>
                    <span className="text-[#00aaff] font-bold">15,000 kg (Target)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Payload to GTO</span>
                    <span className="text-[#00aaff] font-bold">8,500 kg (Target)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Height</span>
                    <span className="text-[#00aaff] font-bold">70 meters (Planned)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Diameter</span>
                    <span className="text-[#00aaff] font-bold">3.7 meters (Planned)</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div 
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-2xl hover-lift"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg')`,
                }}
              ></div>
              <p className="text-gray-400 mt-4">Earth from space - our ultimate destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Features */}
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
              Planned <span className="text-[#00aaff]">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities we're developing for the Iris-R2 rocket system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect border-gray-700 hover-lift">
              <CardHeader className="text-center">
                <Rocket className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                <CardTitle className="text-white">Reusable Design</CardTitle>
                <CardDescription className="text-gray-300">
                  Cost-effective reusable first stage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-[#003f88] text-white w-full justify-center">
                  In Development
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gray-700 hover-lift">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                <CardTitle className="text-white">Precision Guidance</CardTitle>
                <CardDescription className="text-gray-300">
                  Advanced autonomous guidance systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-[#003f88] text-white w-full justify-center">
                  Design Phase
                </Badge>
              </CardContent>
            </Card>

            <Card className="glass-effect border-gray-700 hover-lift">
              <CardHeader className="text-center">
                <Satellite className="w-12 h-12 text-[#00aaff] mx-auto mb-4" />
                <CardTitle className="text-white">Multi-Payload</CardTitle>
                <CardDescription className="text-gray-300">
                  Flexible payload configurations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-[#003f88] text-white w-full justify-center">
                  Concept Stage
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Schedule */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development <span className="text-[#00aaff]">Timeline</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our planned development milestones for the Iris-R2 project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-gray-700">
              <CardContent className="p-8 text-center">
                <Clock className="w-16 h-16 text-[#00aaff] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Mission Schedule Coming Soon</h3>
                <p className="text-gray-300 mb-6">
                  As the Iris-R2 rocket is still in its developmental phase, we will announce our 
                  launch schedule and mission timeline once we reach key development milestones.
                </p>
                <Badge variant="secondary" className="bg-[#003f88] text-white text-lg px-6 py-2">
                  Development in Progress
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