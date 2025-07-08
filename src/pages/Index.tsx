import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import FilterButton from "@/components/FilterButton";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  color: string;
  tags: string[];
}

const projects: Project[] = [
  {
    "id": 1,
    "title": "Advanced Architectural Visualization",
    "subtitle": "Archviz in Unreal Engine 5.5",
    "image": "/imgs/archviztello/m12.jpg",
    "description": "Archviz in Unreal Engine 5.5",
    "color":"bg-titlep1",
    "tags":["ue","archviz"]
  },
  {
    "id": 2,
    "title": "Architectural Visualization",
    "subtitle": "Archviz in Unreal Engine 5.5",
    "image": "/imgs/EKS1/2.png",
    "description": "Archviz in Unreal Engine 5.5",
    "color":"bg-titlep2",
    "tags":["ue","archviz"]
  },
  {
    "id": 3,
    "title": "Chiquita web page",
    "subtitle": "Wordpress site",
    "image": "/imgs/chiquita/1.png",
    "description": "Wordpress site",
    "color":"bg-titlep3",
    "tags":["web","wp"]
  },
  {
    "id": 4,
    "title": "Mambofoods web page",
    "subtitle": "Wordpress site",
    "image": "/imgs/mambo/1.png",
    "description": "Wordpress site",
    "color":"bg-titlep4",
    "tags":["web","wp"]
  },
  {
    "id": 5,
    "title": "Create your own Coca-Cola can",
    "subtitle": "App for corporative events",
    "image": "/imgs/cocacan/2.png",
    "description": "App for corporative events",
    "color":"bg-titlep5",
    "tags":["ue","py"]
  },
  {
    "id": 6,
    "title": "Poetas y escritores Miami",
    "subtitle": "Wordpress site",
    "image": "/imgs/poetas/5.png",
    "description": "Wordpress site",
    "color":"bg-titlep6",
    "tags":["web","wp"]
  },
  {
    "id": 7,
    "title": "Activa tu Higado",
    "subtitle": "3D WebGL Website",
    "image": "/imgs/higado/1.png",
    "description": "3D site",
    "color":"bg-titlep1",
    "tags":["web","3D","wp"]
  },
  {
    "id": 8,
    "title": "Mejora tu memoria",
    "subtitle": "PHP/HTML Game Website",
    "image": "/imgs/memoria/1.png",
    "description": "PHP/HTML Game Website",
    "color":"bg-titlep2",
    "tags":["web","3D","wp","games"]
  },
  {
    "id": 9,
    "title": "Tecman Store page",
    "subtitle": "Wordpress site E-Commerce",
    "image": "/imgs/tecman/1.png",
    "description": "Wordpress site E-Commerce",
    "color":"bg-titlep3",
    "tags":["web","wp"]
  },
  {
    "id": 10,
    "title": "Mifex",
    "subtitle": "Wordpress site",
    "image": "/imgs/mifex/1.png",
    "description": "Wordpress site",
    "color":"bg-titlep4",
    "tags":["web","wp"]
  },
  {
    "id": 11,
    "title": "Solo Survival Shooter with Dynamic Arenas",
    "subtitle": "3D Singleplayer Videogame",
    "image": "/imgs/juggernaut/1.png",
    "description": "3D Singleplayer Videogame",
    "color":"bg-titlep5",
    "tags":["ue","games"]
  },
  {
    "id": 12,
    "title": "Multiplayer PvP Minigame Arena",
    "subtitle": "3D Multiplayer Videogame",
    "image": "/imgs/evil/1.jpeg",
    "description": "3D Multiplayer Videogame",
    "color":"bg-titlep6",
    "tags":["ue","games","app"]
  },
  {
    "id": 13,
    "title": "Nestogeno (Nestle) VR Experience",
    "subtitle": "VR Experience for companies",
    "image": "/imgs/nestogeno/1.png",
    "description": "VR Experience for companies",
    "color":"bg-titlep1",
    "tags":["ue","VR"]
  },
  {
    "id": 16,
    "title": "Dexkedol- Pharma VR Activation",
    "subtitle": "VR Experience for Pharmaceutical companies",
    "image": "/imgs/dexkedol/6.png",
    "description": "Dexkedol- for Pharmaceutical companies",
    "color":"bg-titlep4",
    "tags":["ue","vr"]
  },
  {
    "id": 17,
    "title": "EKS - VR for Archviz",
    "subtitle": "VR Experience for Architecture",
    "image": "/imgs/eks-vina/1.png",
    "description": "VR Experience for Architecture",
    "color":"bg-titlep5",
    "tags":["ue","vr","archviz"]
  },
  {
    "id": 18,
    "title": "Inducorp VR ",
    "subtitle": "VR Experience for companies",
    "image": "/imgs/inducorp/2.png",
    "description": "VR Experience for companies",
    "color":"bg-titlep6",
    "tags":["ue","vr"]
  },
  {
    "id": 19,
    "title": "Create your own story Videogame",
    "subtitle": "3D Singleplayer Videogame",
    "image": "/imgs/nilah/1.png",
    "description": "3D Singleplayer Videogame",
    "color":"bg-titlep1",
    "tags":["ue","games","app"]
  },
  {
    "id": 22,
    "title": "Mixed Reality apartment decorator",
    "subtitle": "MXR Quest 3",
    "image": "/imgs/mxrdecor/1.jpg",
    "description": "MXR Quest 3",
    "color":"bg-titlep4",
    "tags":["ue","mr"]
  },
  {
    "id": 24,
    "title": "Neurobion VR/MXR Experience",
    "subtitle": "VR/MXR Experience for Pharmaceutical companies",
    "image": "/imgs/neurobion/1.png",
    "description": "VR/MXR Experience for Pharmaceutical companies",
    "color":"bg-titlep1",
    "tags":["ue","mr","vr"]
  },
  {
    "id": 26,
    "title": "BYD- VR Test Drive",
    "subtitle": "VR Test Drive",
    "image": "/imgs/byd/1.png",
    "description": "VR Test Drive",
    "color":"bg-titlep3",
    "tags":["ue","vr"]
  },
  {
    "id": 28,
    "title": "Tecnofarma- VR Experience",
    "subtitle": "VR/MXR Experience for Pharmaceutical companies",
    "image": "/imgs/rodilla/1.png",
    "description": "VR/MXR Experience for Pharmaceutical companies",
    "color":"bg-titlep4",
    "tags":["vr","ue"]
  },
  {
    "id": 30,
    "title": "Neurobion spacelaunch- VR Experience",
    "subtitle": "VR Experience for companies",
    "image": "/imgs/launch/2.png",
    "description": "VR Experience for companies",
    "color":"bg-titlep5",
    "tags":["vr","ue"]
  },
  {
    "id": 31,
    "title": "Dynamic Aquarium",
    "subtitle": "Python and UE5 Integration",
    "image": "/imgs/acuario/1.png",
    "description": "Python and UE5 Integration",
    "color":"bg-titlep5",
    "tags":["ue","web","py"]
  },
  {
    "id": 32,
    "title": "Box Game VR",
    "subtitle": "VR Experience for Pharmaceutical companies",
    "image": "/imgs/box/1.png",
    "description": "VR Experience for Pharmaceutical companies",
    "color":"bg-titlep5",
    "tags":["vr","ue"]
  }
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Extract unique tags and create filters
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag.toLowerCase()));
    });
    return Array.from(tagSet);
  }, []);

  const filters = useMemo(() => [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "vr", label: "VR/AR/MXR", count: projects.filter(p => p.tags.some(tag => ['vr', 'mr', 'VR'].includes(tag))).length },
    { id: "games", label: "Games", count: projects.filter(p => p.tags.includes('games')).length },
    { id: "web", label: "Web", count: projects.filter(p => p.tags.includes('web')).length },
    { id: "ue", label: "Unreal Engine", count: projects.filter(p => p.tags.includes('ue')).length },
    { id: "archviz", label: "ArchViz", count: projects.filter(p => p.tags.includes('archviz')).length },
  ], []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    
    return projects.filter(project => {
      if (activeFilter === "vr") {
        return project.tags.some(tag => ['vr', 'mr', 'VR'].includes(tag));
      }
      return project.tags.includes(activeFilter);
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gradient-space">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the frontiers of immersive technology, interactive experiences, and digital innovation
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                label={filter.label}
                isActive={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                count={filter.count}
              />
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-aurora bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              With a passion for pushing the boundaries of technology, I specialize in creating immersive experiences 
              that bridge the physical and digital worlds. My expertise spans across Virtual Reality, Augmented Reality, 
              Mixed Reality, game development, and web technologies.
            </p>
            <p>
              From architectural visualizations in Unreal Engine to interactive web experiences and VR applications 
              for major corporations, I bring innovative ideas to life through cutting-edge development and creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-nebula bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to reality? Let's collaborate on your next immersive project.
          </p>
          <div className="flex justify-center">
            <div className="px-8 py-4 bg-gradient-cosmic text-primary-foreground rounded-full hover:shadow-glow-primary transition-all duration-300 cursor-pointer">
              Contact Me
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Pepe Obando. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
