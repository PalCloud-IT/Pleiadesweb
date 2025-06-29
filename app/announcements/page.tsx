'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  ArrowRight,
  Rocket,
  Brain,
  Award,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function AnnouncementsPage() {
  const [expandedAnnouncement, setExpandedAnnouncement] = useState<number | null>(null);

  const announcements = [
    {
      id: 1,
      title: 'Pleiades Corporation Officially Founded',
      category: 'Company',
      date: '2022-09-15',
      preview: 'Two ambitious Year 9 students launch their vision for the future of space exploration.',
      content: 'Elias Samuel and Edward Christie, both Year 9 students in the British school system, have officially founded Pleiades Corporation with the ambitious goal of revolutionizing space exploration and AI technology. What started as a shared dream between friends has now become a formal venture with clear objectives in aerospace and artificial intelligence development.',
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg',
      type: 'Company Launch',
      featured: true
    },
    {
      id: 2,
      title: 'Iris-R2 Rocket Development Begins',
      category: 'Aerospace',
      date: '2023-03-01',
      preview: 'Initial design phase commences for our flagship rocket system.',
      content: 'We are excited to announce the beginning of development for the Iris-R2 rocket system. Our team has completed initial feasibility studies and is now moving into the design phase. The Iris-R2 represents our vision for efficient, reliable launch vehicles that will make space more accessible. While still in early development, we are committed to creating innovative solutions for the aerospace industry.',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      type: 'Development Start',
      featured: true
    },
    {
      id: 3,
      title: 'NovusAI Project Initiated',
      category: 'AI',
      date: '2023-06-15',
      preview: 'Beginning development of advanced AI systems for specialized applications.',
      content: 'Pleiades Corporation has initiated the NovusAI project, focusing on developing artificial intelligence systems specifically designed for government analysis, military applications, and scientific simulations. While the project is in its early stages, our research team is exploring cutting-edge approaches to AI that could revolutionize how complex calculations and analyses are performed in aerospace and defense sectors.',
      image: 'https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg',
      type: 'Project Launch',
      featured: false
    },
    {
      id: 4,
      title: 'Seed Funding Round Announced',
      category: 'Company',
      date: '2024-01-10',
      preview: 'Pleiades Corporation opens seed funding round to accelerate development.',
      content: 'We are pleased to announce that Pleiades Corporation has opened its seed funding round. This funding will enable us to accelerate the development of both the Iris-R2 rocket system and NovusAI platform. We are seeking strategic investors who share our vision for the future of space exploration and artificial intelligence. The funds will be used primarily for research and development, team expansion, and initial prototype development.',
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg',
      type: 'Funding',
      featured: false
    },
    {
      id: 5,
      title: 'Research Partnerships Established',
      category: 'Research',
      date: '2024-08-20',
      preview: 'Collaborations with academic institutions to support our development goals.',
      content: 'Pleiades Corporation has established research partnerships with several academic institutions to support our technology development efforts. These collaborations will provide access to specialized knowledge, research facilities, and academic expertise that will be crucial for the development of both our aerospace and AI technologies. We believe that combining academic research with entrepreneurial vision is key to breakthrough innovation.',
      image: 'https://images.pexels.com/photos/87009/earth-blue-planet-globe-planet-87009.jpeg',
      type: 'Partnership',
      featured: false
    },
    {
      id: 6,
      title: 'Development Milestones Achieved',
      category: 'Achievement',
      date: '2024-11-30',
      preview: 'Significant progress made in both Iris-R2 and NovusAI development.',
      content: 'We are proud to announce that both our major projects have reached important development milestones. The Iris-R2 rocket design has progressed significantly with completed initial engine specifications and guidance system concepts. Meanwhile, NovusAI has achieved its first successful test runs in controlled simulation environments. While we still have substantial work ahead, these milestones represent important steps toward our ultimate goals.',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      type: 'Milestone',
      featured: false
    }
  ];

  const toggleAnnouncement = (id: number) => {
    setExpandedAnnouncement(expandedAnnouncement === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Aerospace': return Rocket;
      case 'AI': return Brain;
      case 'Achievement': return Award;
      case 'Company': return Users;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Aerospace': return 'bg-blue-600';
      case 'AI': return 'bg-purple-600';
      case 'Achievement': return 'bg-yellow-600';
      case 'Company': return 'bg-green-600';
      case 'Research': return 'bg-indigo-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Company Launch': return 'bg-green-600';
      case 'Development Start': return 'bg-blue-600';
      case 'Project Launch': return 'bg-purple-600';
      case 'Funding': return 'bg-yellow-600';
      case 'Partnership': return 'bg-indigo-600';
      case 'Milestone': return 'bg-orange-600';
      default: return 'bg-gray-600';
    }
  };

  const featuredAnnouncements = announcements.filter(a => a.featured);
  const regularAnnouncements = announcements.filter(a => !a.featured);

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
            Latest <span className="text-[#00aaff]">Announcements</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Follow our journey from startup to space exploration leaders
          </p>
        </div>
      </section>

      {/* Featured Announcements */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Major <span className="text-[#00aaff]">Milestones</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key moments in our company's development journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredAnnouncements.map((announcement) => {
              const CategoryIcon = getCategoryIcon(announcement.category);
              const isExpanded = expandedAnnouncement === announcement.id;
              
              return (
                <Card key={announcement.id} className="glass-effect border-gray-700 hover-lift">
                  <div 
                    className="h-48 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url('${announcement.image}')` }}
                  >
                    <div className="h-full bg-gradient-to-t from-black/60 to-transparent rounded-t-lg flex items-start justify-between p-4">
                      <Badge className={`${getCategoryColor(announcement.category)} text-white`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {announcement.category}
                      </Badge>
                      <Badge className={`${getTypeColor(announcement.type)} text-white`}>
                        {announcement.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-xl">{announcement.title}</CardTitle>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(announcement.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardDescription className="text-gray-300">
                      {announcement.preview}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {isExpanded && (
                      <div className="text-gray-300 leading-relaxed">
                        {announcement.content}
                      </div>
                    )}
                    
                    <Button 
                      onClick={() => toggleAnnouncement(announcement.id)}
                      className="w-full bg-[#003f88] hover:bg-[#00aaff] transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Show Less
                          <ChevronUp className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ChevronDown className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regular Announcements */}
      <section className="py-20 relative">
        <div className="absolute inset-0 satellite-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development <span className="text-[#00aaff]">Updates</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {regularAnnouncements.map((announcement) => {
              const CategoryIcon = getCategoryIcon(announcement.category);
              const isExpanded = expandedAnnouncement === announcement.id;
              
              return (
                <Card key={announcement.id} className="glass-effect border-gray-700 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div 
                        className="w-full md:w-48 h-32 bg-cover bg-center rounded-lg flex-shrink-0"
                        style={{ backgroundImage: `url('${announcement.image}')` }}
                      ></div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h3 className="text-xl font-semibold text-white">{announcement.title}</h3>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(announcement.date).toLocaleDateString()}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Badge className={`${getCategoryColor(announcement.category)} text-white`}>
                            <CategoryIcon className="w-3 h-3 mr-1" />
                            {announcement.category}
                          </Badge>
                          <Badge className={`${getTypeColor(announcement.type)} text-white`}>
                            {announcement.type}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-300">
                          {isExpanded ? announcement.content : announcement.preview}
                        </p>
                        
                        <Button 
                          onClick={() => toggleAnnouncement(announcement.id)}
                          variant="outline"
                          className="border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-black"
                        >
                          {isExpanded ? 'Show Less' : 'Read More'}
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 ml-2" />
                          ) : (
                            <ArrowRight className="w-4 h-4 ml-2" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}