import React from "react";
import { BrickWall, Code } from "lucide-react";
import myImage from "../images/fiyin2.jpeg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left ">
        <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
          <img
            src={myImage}
            alt="Fiyinfoluwa"
            className="w-80 h-80 sm:w-60 sm:h-60 md:w-80  md:h-80 object-cover rounded-full shadow-lg animate-fade-in-delay-1"
          />
        </div>
        <div className="space-y-6 max-w-xl mt-6">
          <div className="space-y-8 ">
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border card-hover">
                <div className="flex items-start gap-4 animate-fade-in-delay-2">
                  <div className="flex flex-row items-center gap-5 p-3 bg-primary/10 rounded-4xl">
                    <div>
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold">Web developer</h4>
                      <p className="text-lg-foreground text-sm md:w-100">
                        I'm a creative web developer with 3 years of experience
                        building responsive, user-friendly interfaces using
                        React, JavaScript, HTML and Tailwind CSS. I love turning
                        ideas into engaging digital experiences across all
                        devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 ">
              <div className="gradient-border card-hover">
                <div className="flex items-start gap-4 animate-fade-in-delay-3">
                  <div className="flex flex-row items-center gap-5 p-3 bg-primary/10 rounded-4xl">
                    <div>
                      <BrickWall className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold">Mission</h4>
                      <p className="text-lg-foreground text-sm md:w-100">
                        My mission is to help startups and enterprises build
                        meaningful connections between their products and
                        satisfied, engaged customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-4">
              <a href="#contacts" className="normal-button">
                Get in touch
              </a>
              <a
                href="/cv/my-resume.pdf"
                download="Olaleke-Fiyinfoluwa-CV.pdf"
                className="px-6 py-2 border rounded-full border-primary text-primary hover:bg-primary/30 transition-colors duration-300 card-hover"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};
