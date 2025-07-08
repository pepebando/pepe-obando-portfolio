import { useState } from "react";
import { Play, Plus, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  duration: string;
  rating: string;
  genre: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

const CinematicCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextProjects, setNextProjects] = useState([1, 2]);

  const projects: Project[] = [
    {
      id: 1,
      title: "THE SKIN MAKER",
      subtitle: "HORROR SERIES",
      year: "2023",
      duration: "1h 27min",
      rating: "18+",
      genre: "Horror",
      description: "Si no tuviera una idea para crear algo yo creo que que vivía lo normal, y me concentraría en todos los detalles de su funcionamiento y no querías agente esta idea me queda mal.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      category: "VR Experience",
      featured: true
    },
    {
      id: 2,
      title: "SKIN WALKER: HUNTING",
      subtitle: "HORROR MOVIE",
      year: "2023",
      duration: "2h 06min",
      rating: "18+",
      genre: "Psycho Terror",
      description: "A group of young people decide to go out to their family's cabin in the woods for a weekend, they will be the ones who end up hunted. Skin Walker: A living creature that no one can describe, and that few live to tell its story.",
      image: "https://images.unsplash.com/photo-1573007217579-42b89ee8e570?w=800&h=400&fit=crop",
      category: "Game Development"
    },
    {
      id: 3,
      title: "SEE YOU AT THE GRAVE",
      subtitle: "COMEDY SERIES",
      year: "2023",
      duration: "56m 53sec",
      rating: "12+",
      genre: "Comedy",
      description: "When you come to think that death cannot be more inevitable; now you have to live with realities that show satire on people fighting. About life and death. Produced by WolvesClub Studio. Graphics 2023.",
      image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&h=400&fit=crop",
      category: "Web Development"
    },
    {
      id: 4,
      title: "ARCHITECTURAL DREAMS",
      subtitle: "ARCHVIZ PROJECT",
      year: "2024",
      duration: "15min",
      rating: "G",
      genre: "Documentary",
      description: "Immersive architectural visualization showcasing modern design and construction techniques.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",
      category: "ArchViz"
    },
    {
      id: 5,
      title: "VR MEDICAL TRAINING",
      subtitle: "INTERACTIVE EXPERIENCE",
      year: "2024",
      duration: "30min",
      rating: "G",
      genre: "Educational",
      description: "Virtual reality training modules for medical professionals and students.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      category: "VR/Medical"
    }
  ];

  const currentProject = projects[currentIndex];
  const nextProjectsList = nextProjects.map(index => projects[index % projects.length]);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
    setNextProjects(prev => prev.map(index => (index - 1 + projects.length) % projects.length));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
    setNextProjects(prev => prev.map(index => (index + 1) % projects.length));
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-container-bg via-container-bg to-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${currentProject.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-container-bg/90 via-container-bg/60 to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 h-full p-8 flex">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 max-w-2xl">
          {/* Category Badge */}
          <div className="flex items-center space-x-4">
            <span className="bg-nav-item text-accent-foreground text-xs px-3 py-1 rounded font-bold tracking-wider">
              {currentProject.subtitle}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-nav-item fill-current" />
              <span className="text-card-foreground/80 text-sm">Add to favorites</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-7xl font-black text-card-foreground leading-none tracking-tighter">
              {currentProject.title.split(" ").map((word, index) => (
                <div key={index} className="block">
                  {word}
                  {index === 0 && (
                    <span className="text-nav-item text-8xl ml-2">
                      {currentProject.id}
                    </span>
                  )}
                </div>
              ))}
            </h1>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-6 text-card-foreground/80">
              <span className="bg-nav-item text-accent-foreground text-xs px-2 py-1 rounded">
                {currentProject.year}
              </span>
              <span className="bg-nav-item text-accent-foreground text-xs px-2 py-1 rounded">
                {currentProject.rating}
              </span>
              <span className="text-sm">{currentProject.duration}</span>
              <span className="text-sm">{currentProject.genre}</span>
            </div>

            <p className="text-card-foreground/90 text-sm leading-relaxed max-w-md">
              {currentProject.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="bg-nav-item hover:bg-nav-item/90 text-accent-foreground rounded-lg px-8 py-3 font-bold">
              <Play className="w-5 h-5 mr-2" />
              PLAY
            </Button>
            <Button variant="outline" className="border-card-foreground/30 text-card-foreground hover:bg-card-foreground/10 rounded-lg px-6 py-3">
              WATCH TRAILER
            </Button>
          </div>

          {/* Image Carousel */}
          <div className="flex space-x-4 mt-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`w-20 h-12 bg-cover bg-center rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                  index === currentIndex 
                    ? 'border-nav-item shadow-lg scale-110' 
                    : 'border-border/30 hover:border-nav-item/50'
                }`}
                style={{ backgroundImage: `url(${project.image})` }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Content - Empty space */}
        <div className="flex-1">
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-glass-overlay backdrop-blur-sm rounded-full flex items-center justify-center text-card-foreground hover:bg-nav-item/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-glass-overlay backdrop-blur-sm rounded-full flex items-center justify-center text-card-foreground hover:bg-nav-item/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-nav-item w-8' : 'bg-card-foreground/30 hover:bg-card-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Close Button */}
      <button className="absolute top-8 right-8 w-10 h-10 bg-glass-overlay backdrop-blur-sm rounded-full flex items-center justify-center text-card-foreground hover:bg-nav-item/20 transition-all duration-300">
        <Plus className="w-5 h-5 rotate-45" />
      </button>
    </div>
  );
};

export default CinematicCarousel;