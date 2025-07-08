import { useState } from "react";
import { Menu, Search, User, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import CinematicCarousel from "@/components/CinematicCarousel";
const SpaceInterface = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [activeTab, setActiveTab] = useState("02"); // Set Projects as active by default

  const navigationItems = [{
    number: "01",
    label: "Overview",
    active: activeTab === "01"
  }, {
    number: "02",
    label: "Projects",
    active: activeTab === "02"
  }, {
    number: "03",
    label: "Discovery",
    active: activeTab === "03"
  }];
  const rightPanelCards = [{
    id: "01",
    title: "Journey to the Unknown",
    subtitle: "From the Sun and into the farthest reaches of the Solar System",
    tag: "Jupiter",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=300&h=200&fit=crop"
  }, {
    id: "02",
    title: "Planets from the Sun and into the Deep Space System",
    subtitle: "Explore distant worlds",
    tag: "Neptune",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=300&h=200&fit=crop"
  }];
  const planetNavigation = [{
    name: "Journey to the Unknown",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=80&h=80&fit=crop"
  }, {
    name: "Unleash Your Lunar Adventure",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=80&h=80&fit=crop"
  }, {
    name: "Ultimate Guide to Interplanetary Travel",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=80&h=80&fit=crop"
  }];

  const skills = [
    { title: "Unreal Engine", image: "https://img.icons8.com/nolan/240/unreal-engine.png" },
    { title: "Python", image: "https://cdn.brandfetch.io/idbpOFBgcc/w/398/h/398/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { title: "Wordpress", image: "https://cdn.brandfetch.io/idbnlnCBDY/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { title: "PHP", image: "https://cdn.brandfetch.io/idYqAg6C_T/w/200/h/200/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { title: "C++", image: "https://img.icons8.com/color/240/c-plus-plus-logo.png" },
    { title: "C#", image: "https://img.icons8.com/color/240/c-sharp-logo-2.png" },
    { title: "Node JS", image: "https://img.icons8.com/fluency/240/node-js.png" },
    { title: "Javascript", image: "https://img.icons8.com/color/240/javascript--v1.png" },
    { title: "VUE", image: "https://img.icons8.com/nolan/240/vue-js.png" },
    { title: "SQL", image: "https://img.icons8.com/external-soft-fill-juicy-fish/240/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png" },
    { title: "MySQL", image: "https://img.icons8.com/fluency/240/my-sql.png" },
    { title: "Reality Capture", image: "https://www.modenatechnologies.com/site/wp-content/uploads/2021/08/RealityCapture-Logo.jpg" },
    { title: "GIT", image: "https://img.icons8.com/color/240/git.png" },
    { title: "CSS", image: "https://img.icons8.com/ultraviolet/100/css.png" }
  ];
  return <div className="min-h-screen bg-background p-8 px-[33px]">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto h-screen bg-container-bg rounded-3xl overflow-hidden relative">
        
        {/* Top Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 p-6">
          <div className="flex justify-between items-center">
            {/* Left: Menu Button */}
            <Button variant="ghost" className="bg-sidebar-bg/80 backdrop-blur-sm text-sidebar-text hover:bg-sidebar-bg rounded-full p-3">
              <Menu className="w-5 h-5" />
            </Button>

            {/* Center: Language Selector */}
            <div className="flex items-center space-x-2 bg-sidebar-bg/80 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-4 h-4 text-sidebar-text" />
              <span className="text-sidebar-text text-sm">{selectedLanguage}</span>
              <span className="text-sidebar-text text-sm">PT</span>
              <span className="text-sidebar-text text-sm">FR</span>
            </div>

            {/* Right: Search and Profile */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="bg-sidebar-bg/80 backdrop-blur-sm text-sidebar-text hover:bg-sidebar-bg rounded-full p-3">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="bg-sidebar-bg/80 backdrop-blur-sm text-sidebar-text hover:bg-sidebar-bg rounded-full p-3">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 h-full">
          
          {/* Left Sidebar */}
          <div className="col-span-2 bg-sidebar-bg p-6 flex flex-col justify-center space-y-8">
            {navigationItems.map(item => <div key={item.number} onClick={() => setActiveTab(item.number)} className={`flex flex-col items-center space-y-2 cursor-pointer group transition-all duration-300 ${item.active ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${item.active ? 'bg-nav-item-bg border-nav-item text-nav-item' : 'border-sidebar-text/30 text-sidebar-text hover:border-nav-item hover:text-nav-item'}`}>
                  <span className="text-sm font-bold">{item.number}</span>
                </div>
                <span className="text-xs text-sidebar-text text-center opacity-70">{item.label}</span>
              </div>)}
          </div>

          {/* Main Content Area */}
          <div className="col-span-10 relative overflow-hidden">
            {activeTab === "02" ? (/* Cinematic Carousel */
          <CinematicCarousel />) : (/* Default Overview Content */
          <>
                {/* Hero Background */}
                <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url('/lovable-uploads/21902a73-f377-4f68-af39-db9f4f83a656.png')`
            }} />
                {/* Cosmic overlay */}
                <div className="absolute inset-0 bg-gradient-cosmic" />

                {/* Skills Section */}
                <div className="absolute top-1/2 left-8 right-8 transform -translate-y-1/2 z-20">
                  <div className="bg-sidebar-bg/80 backdrop-blur-sm rounded-2xl p-6 border border-card-foreground/10">
                    <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">Technical Skills</h2>
                    <div className="grid grid-cols-7 gap-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 group cursor-pointer">
                          <div className="w-12 h-12 bg-card/80 rounded-lg p-2 group-hover:bg-nav-item/20 transition-colors duration-300 flex items-center justify-center">
                            <img 
                              src={skill.image} 
                              alt={skill.title} 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <span className="text-xs text-card-foreground/80 text-center group-hover:text-nav-item transition-colors duration-300">
                            {skill.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-5 gap-6 items-end">
                    
                    {/* Left: Main Description */}
                    <div className="col-span-3 space-y-6">
                      <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-card-foreground leading-tight">
                          Bridging the Gap Between Earth and Space
                        </h1>
                        <p className="text-card-foreground/80 text-sm leading-relaxed max-w-md">
                          A different approach needed to space tourism, including prehistoric, 
                          exhibitions, and galleries.
                        </p>
                      </div>
                      
                      <Button className="bg-nav-item text-accent-foreground hover:bg-nav-item/90 rounded-full px-6 py-2">
                        Discover More
                      </Button>
                      
                      {/* Social Icons */}
                      <div className="flex space-x-4 pt-4">
                        <div className="w-8 h-8 bg-card-foreground/20 rounded-full" />
                        <div className="w-8 h-8 bg-card-foreground/20 rounded-full" />
                        <div className="w-8 h-8 bg-card-foreground/20 rounded-full" />
                      </div>
                    </div>

                    {/* Right: Planet Navigation */}
                    <div className="col-span-2 space-y-4">
                      {planetNavigation.map((planet, index) => <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-card">
                            <img src={planet.image} alt={planet.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-card-foreground/60 mb-1">{planet.name}</p>
                            <div className="w-6 h-6 bg-nav-item rounded-full flex items-center justify-center">
                              <ChevronDown className="w-3 h-3 text-accent-foreground" />
                            </div>
                          </div>
                        </div>)}
                    </div>

                  </div>
                </div>

                {/* Top right stats */}
                <div className="absolute top-24 right-8">
                  <div className="bg-nav-item/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                    <span className="text-nav-item font-bold">+48K</span>
                    <span className="text-card-foreground/80 text-xs">Enjoy travel with us</span>
                  </div>
                </div>
              </>)}
          </div>


        </div>
      </div>
    </div>;
};
export default SpaceInterface;