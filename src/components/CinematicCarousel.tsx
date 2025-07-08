import { useState, useEffect } from "react";
import { Play, Plus, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  const [showGallery, setShowGallery] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { title: 'All', tags: '' },
    { title: 'Unreal Engine', tags: 'ue' },
    { title: 'Web', tags: 'web' },
    { title: 'Videogames', tags: 'games' },
    { title: 'Mixed Reality', tags: 'mr' },
    { title: 'Virtual Reality', tags: 'vr' },
    { title: 'Archviz', tags: 'archviz' },
    { title: 'Python', tags: 'py' },
    { title: 'APPs', tags: 'app' }
  ];

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/dataProjectCard.json');
        const data = await response.json();
        
        // Transform the JSON data to match the Project interface
        const transformedProjects = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          year: "2024", // Default values since not in JSON
          duration: "30min",
          rating: "G",
          genre: "Project",
          description: Array.isArray(item.description) ? item.description.join(" ") : item.description,
          image: item.image,
          category: item.tags.join(", "),
          featured: item.id === 1
        }));
        
        setProjects(transformedProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback to default project if JSON fails to load
        setProjects([{
          id: 1,
          title: "Advanced Architectural Visualization",
          subtitle: "Archviz in Unreal Engine 5.5",
          year: "2024",
          duration: "30min",
          rating: "G",
          genre: "ArchViz",
          description: "This is a placeholder description",
          image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop",
          category: "ue, archviz",
          featured: true
        }]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category.includes(selectedCategory)
      );
      setFilteredProjects(filtered);
    }
    setCurrentIndex(0); // Reset to first project when filtering
  }, [selectedCategory, projects]);

  const currentProject = filteredProjects[currentIndex] || projects[0];
  const nextProjectsList = nextProjects.map(index => filteredProjects[index % filteredProjects.length]);

  // Show loading state while projects are being fetched
  if (isLoading || !currentProject) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-container-bg via-container-bg to-black flex items-center justify-center">
        <div className="text-card-foreground">Loading...</div>
      </div>
    );
  }


  if (showGallery) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-container-bg">
        {/* Main Content Grid */}
        <div className="h-full flex">
          {/* Left Side - Full Screen Video Player */}
          <div className="flex-1 relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentProject.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Video Player Controls */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Play className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{currentProject.title}</h2>
              <div className="flex items-center space-x-4 text-sm opacity-80">
                <span>{currentProject.year}</span>
                <span>{currentProject.duration}</span>
                <span>{currentProject.rating}</span>
              </div>
            </div>

            {/* Close Button */}
            <Button 
              onClick={() => setShowGallery(false)}
              variant="ghost" 
              size="sm" 
              className="absolute top-6 right-6 text-white hover:bg-white/20"
            >
              <Plus className="w-5 h-5 rotate-45" />
            </Button>
          </div>

        </div>
      </div>
    );
  }

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
            <Button 
              onClick={() => setShowGallery(true)}
              className="bg-nav-item hover:bg-nav-item/90 text-accent-foreground rounded-lg px-8 py-3 font-bold"
            >
              <Play className="w-5 h-5 mr-2" />
              PLAY
            </Button>
            <Button variant="outline" className="border-card-foreground/30 text-card-foreground hover:bg-card-foreground/10 rounded-lg px-6 py-3">
              WATCH TRAILER
            </Button>
          </div>

          {/* Image Carousel */}
          <div className="mt-8 max-w-xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {filteredProjects.map((project, index) => (
                  <CarouselItem key={project.id} className="pl-4 basis-1/4">
                    <div
                      className="flex flex-col items-center space-y-3 cursor-pointer transition-all duration-300"
                      onClick={() => setCurrentIndex(index)}
                    >
                      <div
                        className={`w-32 h-24 bg-cover bg-center rounded-xl transition-all duration-300 border-2 ${
                          index === currentIndex 
                            ? 'border-nav-item shadow-xl scale-105' 
                            : 'border-transparent hover:border-nav-item/30 hover:scale-102'
                        }`}
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="text-center">
                        <p className="text-card-foreground text-sm font-medium leading-tight max-w-32">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-card-foreground border-card-foreground/30 hover:bg-card-foreground/10" />
              <CarouselNext className="text-card-foreground border-card-foreground/30 hover:bg-card-foreground/10" />
            </Carousel>
          </div>
        </div>

        {/* Right Sidebar - Categories (positioned to match the red box in design) */}
        <div className="absolute top-8 right-8 w-64 bg-container-bg/80 backdrop-blur-sm rounded-lg p-6 border border-card-foreground/10">
          <h3 className="text-card-foreground font-bold text-lg mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.tags}
                onClick={() => setSelectedCategory(category.tags)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.tags
                    ? 'text-nav-item bg-nav-item/20 border border-nav-item/30'
                    : 'text-card-foreground/70 hover:text-card-foreground hover:bg-card-foreground/5'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CinematicCarousel;