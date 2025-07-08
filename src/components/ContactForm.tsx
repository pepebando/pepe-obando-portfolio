import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    country: "",
    zipCode: "",
    email: "",
    password: "",
    confirmPassword: ""
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
                Don't Miss Your Chance!
              </h2>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-nav-item">
                  Signup Now
                </h1>
                <p className="text-card-foreground text-xl">
                  and <span className="font-bold">Get Rewarded!</span>
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

            {/* Already have account */}
            <div className="pt-4">
              <p className="text-card-foreground/70 text-sm">
                Already have an account?{" "}
                <span className="text-nav-item cursor-pointer hover:underline">
                  Sign In Here
                </span>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-sidebar-bg/60 backdrop-blur-sm rounded-2xl p-8 border border-card-foreground/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-20 bg-container-bg/50 border-card-foreground/20 text-card-foreground">
                    <SelectValue placeholder="🇺🇸" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44</SelectItem>
                    <SelectItem value="+33">🇫🇷 +33</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Enter your Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="flex-1 bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                />
              </div>

              {/* Address Line 1 & 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Address Line 1"
                    value={formData.addressLine1}
                    onChange={(e) => handleInputChange("addressLine1", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Address Line 2"
                    value={formData.addressLine2}
                    onChange={(e) => handleInputChange("addressLine2", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
              </div>

              {/* State & Country */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Country"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
              </div>

              {/* Zip Code */}
              <div>
                <Input
                  placeholder="Zip Code/Postal Code"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                />
              </div>

              {/* Email */}
              <div>
                <Input
                  type="email"
                  placeholder="Add your Email address Here"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    type="password"
                    placeholder="Create new password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="bg-container-bg/50 border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/50"
                  />
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-card-foreground/60 text-center">
                Password must contain Special character, Capital & simple letters and a number.
              </p>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-nav-item hover:bg-nav-item/90 text-accent-foreground font-bold py-3 rounded-lg text-lg"
              >
                LET ME IN! 🚀
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;