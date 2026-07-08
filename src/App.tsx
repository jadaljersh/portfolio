/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  Compass, MapPin, Mail, Globe, Layers, Activity, FileText, 
  LayoutGrid, ArrowUpRight, Github, Linkedin, Map as MapIcon, Code2,
  ChartBarIcon,
  ChartColumnStacked
} from "lucide-react";
import { personalInfo, portfolioItems } from "./data";
import ResumeTab from "./components/ResumeTab";
import PortfolioGrid from "./components/PortfolioGrid";
import { motion, AnimatePresence } from "motion/react";

type TabType = "resume" | "development" | "maps" | "visualization" | "projects";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("resume");

  // Filter items based on selected tab content
  const devItems = portfolioItems.filter(item => item.type === 'dev');
  const mapItems = portfolioItems.filter(item => item.type === 'map');
  const projectItems = portfolioItems.filter(item => item.type === 'project');
  const visualizationItems = portfolioItems.filter(item => item.type === 'visualization');
  
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] flex flex-col justify-between font-sans selection:bg-[#2563EB]/10 selection:text-[#2563EB] relative border-4 border-[#D1D5DB]">
      
      {/* 1. Subtle Georeference Dot Grid Background Overlay (Visual Accents) */}
      <div className="absolute inset-0 bg-[radial-gradient(#D1D5DB_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      {/* Main Container Section */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-8 sm:py-10 relative z-10 flex-grow space-y-8">
        
        {/* 2. Top Header Navigation Rail */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-[#D1D5DB] rounded-lg px-6 py-4 shadow-sm print:hidden">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
              <Compass className="h-4 w-4 text-[#2563EB] animate-pulse" />
            </div>
            <div>
              <h2 className="font-sans font-extrabold text-[#111827] tracking-tight text-lg leading-none">
                {personalInfo.name}
              </h2>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            <a 
              href={personalInfo.contact.github} 
              target="https://github.com/jadaljersh" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded border border-[#D1D5DB] hover:border-[#2563EB] text-gray-500 hover:text-[#2563EB] shadow-xs transition"
              title="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href={personalInfo.contact.linkedin} 
              target="https://www.linkedin.com/in/jad-aljersh" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded border border-[#D1D5DB] hover:border-[#2563EB] text-gray-500 hover:text-[#2563EB] shadow-xs transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href={`mailto:${personalInfo.contact.email}`}
              className="px-4 py-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded shadow-md flex items-center gap-1.5 transition text-center cursor-pointer"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact Me</span>
            </a>
          </div>
        </header>

        {/* 3. Hero / Introduction Panel */}
        <section className="bg-white rounded-lg p-6 sm:p-10 border border-[#D1D5DB] shadow-sm relative overflow-hidden print:border-none print:shadow-none print:p-0">
          
          {/* Full-width Text segment */}
          <div className="space-y-5">
            <h1 className="font-sans font-extrabold text-5xl sm:text-6xl text-[#111827] leading-tight mb-2 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-[#2563EB] font-bold text-lg sm:text-xl tracking-tight">
              {personalInfo.title}
            </p>

            {/* Removed max-w-2xl so text stretches naturally across the wide container */}
            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed text-justify font-normal">
              {personalInfo.bio}
            </p>

            {/* Micro details row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-400 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gray-400" />
                {personalInfo.contact.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-gray-400" />
                Geographic Information Systems Analyst
              </span>
            </div>
          </div>

        </section>

        {/* 4. Top Tab Switcher & Segment controller */}
        <div className="space-y-6 pt-2 print:hidden">
          <div className="flex justify-center bg-white border border-[#D1D5DB] rounded-lg p-1.5 shadow-sm">
            <nav className="flex space-x-1 overflow-x-auto pb-px w-full" aria-label="Tabs">
              
              <button
                onClick={() => setActiveTab("resume")}
                className={`py-2.5 px-4 sm:px-6 rounded font-sans font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer flex-1 justify-center ${
                  activeTab === "resume"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-gray-500 hover:text-[#2563EB] hover:bg-gray-50"
                }`}
                id="tab-resume"
              >
                <FileText className="h-4 w-4" />
                Resume
              </button>

              <button
                onClick={() => setActiveTab("development")}
                className={`py-2.5 px-4 sm:px-6 rounded font-sans font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer flex-1 justify-center ${
                  activeTab === "development"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-gray-500 hover:text-[#2563EB] hover:bg-gray-50"
                }`}
                id="tab-development"
              >
                <Code2 className="h-4 w-4" />
                Development
              </button>

              <button
                onClick={() => setActiveTab("maps")}
                className={`py-2.5 px-4 sm:px-6 rounded font-sans font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer flex-1 justify-center ${
                  activeTab === "maps"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-gray-500 hover:text-[#2563EB] hover:bg-gray-50"
                }`}
                id="tab-maps"
              >
                <MapIcon className="h-4 w-4" />
                Maps
              </button>

              <button
                onClick={() => setActiveTab("visualization")}
                className={`py-2.5 px-4 sm:px-6 rounded font-sans font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer flex-1 justify-center ${
                  activeTab === "visualization"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-gray-500 hover:text-[#2563EB] hover:bg-gray-50"
                }`}
                id="tab-visualization"
              >
                <ChartColumnStacked className="h-4 w-4" />
                Data Visualization
              </button>

              <button
                onClick={() => setActiveTab("projects")}
                className={`py-2.5 px-4 sm:px-6 rounded font-sans font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer flex-1 justify-center ${
                  activeTab === "projects"
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-gray-500 hover:text-[#2563EB] hover:bg-gray-50"
                }`}
                id="tab-projects"
              >
                <LayoutGrid className="h-4 w-4" />
                Projects
              </button>

            </nav>
          </div>

          {/* 5. Dynamic Tab Viewport with Framer Motion Animate Presence */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "resume" && (
                <motion.div
                  key="resume"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <ResumeTab />
                </motion.div>
              )}

              {activeTab === "development" && (
                <motion.div
                  key="development"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-base font-bold uppercase tracking-widest text-gray-500">Development Assemblies</h2>
                      <div className="h-px bg-[#D1D5DB] flex-1 mx-6"></div>
                      <span className="text-xs font-mono text-gray-400 uppercase">{devItems.length} Assemblies</span>
                    </div>
                    <PortfolioGrid items={portfolioItems} defaultType="dev" />
                  </div>
                </motion.div>
              )}

              {activeTab === "maps" && (
                <motion.div
                  key="maps"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-base font-bold uppercase tracking-widest text-gray-500">Maps</h2>
                      <div className="h-px bg-[#D1D5DB] flex-1 mx-6"></div>
                      <span className="text-xs font-mono text-gray-400 uppercase">{mapItems.length} Maps</span>
                    </div>
                    <PortfolioGrid items={portfolioItems} defaultType="map" />
                  </div>
                </motion.div>
              )}
              {activeTab === "visualization" && (
                <motion.div
                  key="visualization"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-base font-bold uppercase tracking-widest text-gray-500">Data Visualization</h2>
                      <div className="h-px bg-[#D1D5DB] flex-1 mx-6"></div>
                      <span className="text-xs font-mono text-gray-400 uppercase">{visualizationItems.length} Visualizations</span>
                    </div>
                    <PortfolioGrid items={portfolioItems} defaultType="visualization" />
                  </div>
                </motion.div>
              )}
              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-base font-bold uppercase tracking-widest text-gray-500">Featured Projects</h2>
                      <div className="h-px bg-[#D1D5DB] flex-1 mx-6"></div>
                      <span className="text-xs font-mono text-gray-400 uppercase">{projectItems.length} Projects</span>
                    </div>
                    <PortfolioGrid items={portfolioItems} defaultType="project" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* 6. Footer containing continuous georeference projections */}
      <footer className="bg-white border-t border-[#D1D5DB] py-6 sm:py-8 mt-16 print:hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">&copy; 2026 Jad Aljersh · Professional GIS Portfolio</p>
          </div>
          
          {/* Subtle real-time status output */}
          <div className="flex items-center gap-3 font-mono bg-[#F9FAFB] px-3 py-1.5 rounded border border-[#D1D5DB] shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Available for collaboration</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
