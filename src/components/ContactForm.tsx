import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    projectDescription: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-container-bg via-container-bg to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-nav-item/30 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-nav-item/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-nav-item/25 -rotate-12"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="max-w-6xl w-full grid grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Marketing Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-card-foreground/90 text-lg font-medium">
                Let's Work Together!
              </h2>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-nav-item">
                  Contact Me
                </h1>
                <p className="text-card-foreground text-xl">
                  Tell me about your <span className="font-bold">Project!</span>
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-8">
              <div className="w-10 h-10 bg-nav-item rounded-full flex items-center justify-center cursor-pointer hover:bg-nav-item/80 transition-colors">
                <Facebook className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-nav-item rounded-full flex items-center justify-center cursor-pointer hover:bg-nav-item/80 transition-colors">
                <Instagram className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-nav-item rounded-full flex items-center justify-center cursor-pointer hover:bg-nav-item/80 transition-colors">
                <Linkedin className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-nav-item rounded-full flex items-center justify-center cursor-pointer hover:bg-nav-item/80 transition-colors">
                <Twitter className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-4">
              <p className="text-card-foreground/70 text-sm">
                Ready to bring your ideas to life?{" "}
                <span className="text-nav-item cursor-pointer hover:underline">
                  Let's get started!
                </span>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-sidebar-bg/60 backdrop-blur-sm rounded-2xl p-8 border border-card-foreground/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  required
                />
              </div>

              {/* Project Type */}
              <div>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="bg-container-bg/50 border-card-foreground/20 text-card-foreground">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="game-development">Game Development</SelectItem>
                    <SelectItem value="database-design">Database Design</SelectItem>
                    <SelectItem value="3d-modeling">3D Modeling</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Description */}
              <div>
                <Textarea
                  placeholder="Tell me about your project... What are your goals, requirements, and timeline?"
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                  className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50 min-h-[120px]"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-nav-item hover:bg-nav-item/90 text-accent-foreground font-bold py-3 rounded-lg text-lg"
              >
                Send Message 🚀
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;