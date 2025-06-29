'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Rocket, 
  Satellite, 
  Brain, 
  Globe,
  Calendar,
  Users,
  Target,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Iris-R2 Concept Development',
      category: 'aerospace',
      status: 'Research',
      description: 'Early-stage concept development for next-generation rocket system.',
      longDescription: 'The Iris-R2 project represents our ambitious vision for future rocket technology. Currently in the research and concept development phase, we are exploring innovative approaches to rocket design, propulsion systems, and guidance technology. This project serves as the foundation for our aerospace division and represents our long-term commitment to space exploration.',
      completion: 15,
      team: 3,
      startDate: '2023-01-15',
      expectedCompletion: '2027-06-30',
      technologies: ['Rocket Design', 'Propulsion Research', 'Guidance Systems'],
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg'
    },
    {
      id: 2,
      title: 'Satellite Technology Research',
      category: 'aerospace',
      status: 'Planning',
      description: 'Research into satellite communication and deployment systems.',
      longDescription: 'Our satellite technology research focuses on understanding current satellite systems and exploring opportunities for innovation. This foundational research will inform our future satellite projects and help us identify areas where we can contribute to advancing satellite technology.',
      completion: 8,
      team: 2,
      startDate: '2024-03-01',
      expectedCompletion: '2026-12-31',
      technologies: ['Satellite Systems', 'Communication', 'Space Technology'],
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg'
    },
    {
      id: 3,
      title: 'NovusAI Foundation',
      category: 'ai',
      status: 'Research',
      description: 'Foundational research for specialized AI applications.',
      longDescription: 'The NovusAI project represents our exploration into artificial intelligence applications for specialized fields including government analysis, scientific computing, and aerospace calculations. Currently in the research phase, we are studying existing AI technologies and identifying opportunities for innovation in these critical areas.',
      completion: 5,
      team: 2,
      startDate: '2023-06-01',
      expectedCompletion: '2026-11-30',
      technologies: ['AI Research', 'Machine Learning', 'Scientific Computing'],
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg'
    },
    {
      id: 4,
      title: 'Space Mission Analysis',
      category: 'research',
      status: 'Concept',
      description: 'Theoretical analysis of future space exploration missions.',
      longDescription: 'This project involves studying and analyzing potential future space missions, including Mars exploration scenarios. We are developing our understanding of mission planning, resource requirements, and the role that AI could play in optimizing space missions. This work provides valuable learning opportunities and helps shape our long-term vision.',
      completion: 3,
      team: 2,
      startDate: '2024-01-01',
      expectedCompletion: '2028-12-31',
      technologies: ['Mission Analysis', 'Space Exploration', 'Strategic Planning'],
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg'
    },
    {
      id: 5,
      title: 'Earth Observation Study',
      category: 'research',
      status: 'Planning',
      description: 'Research into Earth observation and climate monitoring applications.',
      longDescription: 'Our Earth observation study examines how satellite technology and AI can be combined to better understand climate patterns and environmental changes. This research project helps us understand the potential applications of our future technologies in addressing global challenges.',
      completion: 2,
      team: 1,
      startDate: '2024-06-01',
      expectedCompletion: '2026-12-31',
      technologies: ['Earth Observation', 'Climate Research', 'Data Analysis'],
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg'
    },
    {
      id: 6,
      title: 'Advanced Computing Research',
      category: 'ai',
      status: 'Concept',
      description: 'Exploring advanced computing approaches for AI applications.',
      longDescription: 'This early-stage research project explores advanced computing concepts that could enhance AI capabilities in the future. We are studying various approaches including quantum-inspired algorithms and specialized computing architectures that could benefit our long-term AI development goals.',
      completion: 1,
      team: 1,
      startDate: '2024-09-01',
      expectedCompletion: '2028-06-30',
      technologies: ['Advanced Computing', 'AI Research', 'Algorithm Development'],
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'aerospace', name: 'Aerospace', icon: Rocket },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain },
    { id: 'research', name: 'Research', icon: Target }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Research': return 'bg-blue-600';
      case 'Planning': return 'bg-yellow-600';
      case 'Concept': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

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
            Our <span className="text-[#00aaff]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Early-stage research and development initiatives laying the foundation for future breakthroughs
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-[#003f88] hover:bg-[#00aaff]'
                      : 'border-gray-600 text-white hover:border-[#00aaff]'
                  } transition-colors`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="glass-effect border-gray-700 hover-lift group">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  <div className="h-full bg-gradient-to-t from-black/60 to-transparent rounded-t-lg flex items-end p-4">
                    <Badge className={`${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-[#00aaff] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-[#00aaff]">{project.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#003f88] to-[#00aaff] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.team} team member{project.team !== 1 ? 's' : ''}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.startDate).getFullYear()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-[#003f88] hover:bg-[#00aaff] transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black border-gray-700 max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-white text-2xl">{project.title}</DialogTitle>
                        <DialogDescription className="text-gray-300">
                          Detailed project information and current status
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div 
                          className="h-64 bg-cover bg-center rounded-lg"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        ></div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                          <p className="text-gray-300">{project.longDescription}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-white mb-2">Project Details</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Status</span>
                                <Badge className={`${getStatusColor(project.status)} text-white text-xs`}>
                                  {project.status}
                                </Badge>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Progress</span>
                                <span className="text-[#00aaff]">{project.completion}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Team Size</span>
                                <span className="text-white">{project.team} member{project.team !== 1 ? 's' : ''}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-white mb-2">Timeline</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Started</span>
                                <span className="text-white">
                                  {new Date(project.startDate).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Target</span>
                                <span className="text-white">
                                  {new Date(project.expectedCompletion).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-white mb-2">Focus Areas</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="bg-[#003f88] text-white">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <p className="text-gray-300 text-sm">
                            <strong className="text-white">Note:</strong> This project is in early development stages. 
                            Timelines and specifications are subject to change as we continue our research and development efforts.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}