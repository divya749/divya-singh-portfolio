// src/components/Portfolio.tsx
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Image from "next/image";


const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header/Hero Section with Profile Picture */}
      <header className="bg-stone-900 pt-20 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Profile Picture */}
            <div className="w-48 h-54 mt-1 rounded-full overflow-hidden bg-stone-800 flex-shrink-0">
                <Image
                src="/image.png"
                alt="Profile"
                width={192}
                height={250}
                unoptimized={true} // Prevents Next.js optimization issues
                className="w-48 h-54 object-cover"
                />

            </div>
            
            {/* Name and Intro */}
            <div>
              <h1 className="text-5xl md:text-7xl font-light mb-4 text-stone-50">
                Divya Singh
              </h1>
              <h2 className="text-xl md:text-2xl font-light text-stone-400 mb-8">
                Associate Engineer
              </h2>
              <div className="max-w-2xl">
                <p className="text-stone-300 leading-relaxed">
                I am an Application Developer with 2+ years of experience specializing in AI technologies and enterprise-level Web applications. 
                I have helped deliver robust Java applications and integrated complex systems using development tools and frameworks.
                I have worked on AI-driven projects with IBM watsonx.ai and also tackled Workday Integrations to deliver automation solutions and seamless system Integrations. 

                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section - Now with warm background */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-12 text-stone-900">Relevant Experience</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-amber-200 pl-8 relative">
              <div className="absolute w-3 h-3 bg-amber-200 rounded-full -left-[7px] top-0"></div>
              <h3 className="text-xl font-medium text-stone-900">Associate Engineer</h3>
              <p className="text-amber-900 mb-4">IBM • 2022-Present</p>
                <ul className="list-disc space-y-4 ml-4">
                <li>
                    <p className="text-stone-600 leading-relaxed text-justify">
                    Engineered enterprise web applications using Java, Spring framework, and React.js, integrating RESTful APIs and implementing responsive UI with Bootstrap and Tailwind-CSS.
                    </p>
                </li>
                <li>
                    <p className="text-stone-600 leading-relaxed text-justify">
                    Tested a Middleware solution using Postman, developing JSLT transformation scripts and managing defects through JIRA and Elastic monitoring.
                    </p>
                </li>
                <li>
                    <p className="text-stone-600 leading-relaxed text-justify">
                    Leveraged IBM watsonx.ai and Llama 3 models for text generation, RAG, and sentiment analysis, while automating HR processes through Watson Orchestrate.
                    </p>
                </li>
                <li>
                    <p className="text-stone-600 leading-relaxed text-justify">
                    Led Workday Integrations team, managing stakeholder requirements and delivering technical solutions through Workday Studio and EIB integrations.
                    </p>
                </li>
                </ul>
            
            </div>

            
          </div>
        </div>
      </section>

      {/* Selected Works Section - Now with cool background */}
        <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-light mb-12 text-stone-900">Selected Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { title: "E-commerce Website", description: "A website showcasing digital products it sells on Gumroad", techStack: "React.js, Tailwind CSS", github: "https://github.com/user/ecommerce" },
                { title: "AI Chatbot", description: "An intelligent chatbot using Groq API", techStack: "Python, TensorFlow", github: "https://github.com/user/chatbot" },
                { title: "Employee Resignation Prediction", description: "Predicting employee attrition using ML models", techStack: "Python, Scikit-learn", github: "https://github.com/user/resignation-prediction" },
                { title: "Saliency Prediction", description: "Predicting focus areas in 360-degree media", techStack: "Python, Keras", github: "https://github.com/user/saliency" },
                { title: "Autonomous Car Simulation", description: "Simulating self-autonomous car behavior", techStack: "Python, Keras, Deep Learning", github: "https://github.com/user/autonomous-car" },
                { title: "Audify", description: "A song recognition app", techStack: "Python, Tensorflow, Audio Processing", github: "https://github.com/user/audify" }
            ].map((project) => (
                <div key={project.title} className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-medium text-stone-900">{project.title}</h3>
                    <p className="text-stone-600 mt-2">{project.description}</p>
                    <p className="text-stone-500 mt-2"><strong>Tech Stack:</strong> {project.techStack}</p>
                </div>
                <a href={project.github} className="text-blue-600 hover:underline mt-4 block">GitHub Repo</a>
                </div>
            ))}
            </div>
        </div>
        </section>


      {/* Skills & Education Section - Now with neutral background */}
        <section className="py-16 px-6 bg-amber-50">
        <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-2xl font-light mb-8 text-stone-900">Skills & Technologies</h2>
                <p className="text-stone-600 text-justify">AI Applications | Machine Learning | Deep Learning | Java Web Development | Computer Vision | Multimedia Processing | Workday Integrations | Interpersonal Communication | Teamwork</p>
                <h2 className="text-2xl font-light mt-8 mb-4 text-stone-900">Programming Languages</h2>
                <p className="text-stone-600 text-justify">Java | Python | JavaScript | HTML | CSS | Kotlin </p>
                <h2 className="text-2xl font-light mt-8 mb-4 text-stone-900">Frameworks and Libraries</h2>
                <p className="text-stone-600 text-justify">React.js | Spring Framework | Bootstrap | Tailwind CSS | Node.js | Keras | Tensorflow | Scikit-learn </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-light mb-8 text-stone-900">Education & Certifications</h2>
                <div className="space-y-6">
                <div className="pt-6 border-t border-neutral-200">
                    <h3 className="text-lg font-medium text-stone-900">Bachelor&apos;s Degree</h3>
                    <p className="text-stone-600">Bachelor of Technology</p>
                    <p className="text-stone-500">Indian Institute of Technology, Jodhpur • 2022</p>   
                </div>
                <div className="pt-6 border-t border-neutral-200">
                    <h3 className="text-lg font-medium text-stone-900">Professional Certifications</h3>
                    <p className="text-stone-500">AWS Certified Cloud Practitioner, <i>AWS</i></p>
                    <p className="text-stone-500">Professional Machine Learning Engineer, <i>Google</i></p>
                    <p className="text-stone-500">Fundamentals of Deep Learning, <i>NVIDIA</i></p>
                    <p className="text-stone-500">Building Transformer-based NLP Applications, <i>NVIDIA</i></p>
                    <p className="text-stone-500">Workday Integrations, <i>Workday</i></p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>


      {/* Testimonials Section - Now with rose background */}
    {/*  <section className="py-16 px-6 bg-rose-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-12 text-stone-900">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-stone-600 italic">
                "By featuring positive feedback from others, your potential clients won't have to 
                take your word for it, instead they can hear and learn from others' experiences."
              </p>
              <footer className="mt-4 text-rose-600">— Satisfied Client</footer>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-stone-600 italic">
                "Your expertise and dedication to our project made all the difference. 
                The results exceeded our expectations."
              </p>
              <footer className="mt-4 text-rose-600">— Regular Client</footer>
            </blockquote>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <footer className="py-16 px-6 bg-stone-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-8 text-stone-50">Connect with me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a href="mailto:divya.singh.ds1111@gmail.com" className="flex items-center gap-3 text-stone-300 hover:text-stone-50 transition-colors">
                <Mail className="w-5 h-5" />
                divya.singh.ds1111@gmail.com
              </a>
              <a href="tel:+91-7007632378" className="flex items-center gap-3 text-stone-300 hover:text-stone-50 transition-colors">
                <Phone className="w-5 h-5" />
                +91-7007632378
              </a>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/divya749" className="text-stone-300 hover:text-stone-50 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/divya-singh007" className="text-stone-300 hover:text-stone-50 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;