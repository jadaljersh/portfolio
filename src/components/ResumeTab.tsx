// @ts-nocheck
import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Download, Briefcase, GraduationCap, Code, CheckCircle, Search, Printer, Copy, Sparkles } from "lucide-react";
import { personalInfo, resumeItems, educationItems, skillGroups } from "../data";
import { motion } from "motion/react";

export default function ResumeTab() {
  const [skillSearch, setSkillSearch] = useState("");
  const [expandedWorkId, setExpandedWorkId] = useState<string | null>("exp-1");
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSkills = skillGroups.map(group => {
    const skills = group.skills.filter(s => s.name.toLowerCase().includes(skillSearch.toLowerCase()));
    return { ...group, skills };
  }).filter(group => group.skills.length > 0);

  return (
    <div id="resume-container" className="space-y-6 animate-fade-in print:bg-white print:text-black">
      
      {/* Printable Resume Wrapper */}
      <div className="bg-white rounded-lg shadow-sm border border-[#D1D5DB] p-6 sm:p-10 relative overflow-hidden print:border-none print:shadow-none print:p-0">
        
        {/* Top styling elements - not printed */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#2563EB] print:hidden" />
      
        {/* 1. Resume Header */}
        <div className="border-b border-[#E5E7EB] pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 print:pb-6">
          <div>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-2">
            </h1>

            <p className="text-gray-500 text-sm mt-2 max-w-xl leading-relaxed print:text-slate-700 font-normal">
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-xs text-gray-500 font-medium shrink-0 md:text-right print:text-slate-900">
            <span className="flex items-center md:justify-end gap-2" id="contact-email">
              <Mail className="h-3.5 w-3.5 text-[#2563EB] print:text-black shrink-0" />
              <button onClick={handleCopyEmail} className="hover:text-[#2563EB] hover:underline cursor-pointer font-bold">
                {personalInfo.contact.email}
              </button>
            </span>
            <span className="flex items-center md:justify-end gap-2" id="contact-location">
              <MapPin className="h-3.5 w-3.5 text-[#2563EB] print:text-black shrink-0" />
              {personalInfo.contact.location}
            </span>
            <span className="flex items-center md:justify-end gap-2 print:hidden" id="contact-linkedin">
              <Linkedin className="h-3.5 w-3.5 text-[#2563EB] shrink-0" />
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] hover:underline font-bold">
                linkedin.com/in/jad-aljersh
              </a>
            </span>
            <span className="flex items-center md:justify-end gap-2 print:hidden" id="contact-github">
              <Github className="h-3.5 w-3.5 text-[#2563EB] shrink-0" />
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] hover:underline font-bold">
                github.com/jadaljersh
              </a>
            </span>
          </div>
        </div>

        {/* 2. Work Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 print:gap-6 print:pt-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3 mb-4 print:pb-2">
              <Briefcase className="h-5 w-5 text-[#2563EB] print:text-black" />
              <h2 className="font-sans font-extrabold text-lg text-gray-900 tracking-tight">
                Work Experience
              </h2>
            </div>

            <div className="relative border-l-2 border-[#D1D5DB] ml-3 pl-6 space-y-8">
              {resumeItems.map((job) => {
                const isExpanded = expandedWorkId === job.id;
                return (
                  <div key={job.id} className="relative group">
                    {/* Ring timeline indicator */}
                    <span className={`absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 bg-white transition-all duration-300 ${
                      isExpanded ? "border-[#2563EB] scale-110" : "border-[#D1D5DB] group-hover:border-[#2563EB]"
                    }`} />

                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <div>
                        <h3 className="font-sans font-bold text-gray-900 text-base">
                          {job.role}
                        </h3>
                        <p className="text-gray-500 font-semibold text-sm">
                          {job.company}
                        </p>
                      </div>
                      <span className="bg-[#F3F4F6] text-gray-600 px-2.5 py-1 rounded text-xs font-mono font-bold border border-[#D1D5DB] print:border print:bg-white shrink-0">
                        {job.duration}
                      </span>
                    </div>

                    <div className="mt-3 text-gray-600 text-sm leading-relaxed space-y-2">
                      <ul className="list-disc list-outside pl-4 space-y-1.5 font-normal">
                        {job.description.map((desc, index) => (
                          <li key={index} className="print:block">{desc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3 print:mt-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#2563EB]/5 print:bg-white text-[#2563EB] print:text-slate-800 border border-[#2563EB]/10 hover:bg-[#2563EB]/10 px-2 py-0.5 rounded text-[11px] font-bold transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Education Timeline Block */}
            <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3 mt-10 mb-4 print:pb-2 print:mt-6">
              <GraduationCap className="h-5 w-5 text-[#2563EB] print:text-black" />
              <h2 className="font-sans font-extrabold text-lg text-gray-900 tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {educationItems.map((edu) => (
                <div key={edu.id} className="p-4 bg-[#F9FAFB] print:bg-white rounded border border-[#D1D5DB] print:border-none print:p-0">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1.5">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-500 font-semibold text-xs sm:text-sm">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 shrink-0">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1 font-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Skill & Mastery Side Column */}
          <div className="space-y-6 print:break-before-page">
            <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3 mb-4 print:pb-2">
              <Code className="h-5 w-5 text-[#2563EB] print:text-black" />
              <h2 className="font-sans font-extrabold text-lg text-gray-900 tracking-tight">
                Technical Expertise
              </h2>
            </div>

            {/* Skill search bar - not printed */}
            <div className="relative mb-4 print:hidden">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search specific tools/skills..."
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-[#D1D5DB] rounded text-xs bg-[#F9FAFB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all"
                id="skill-search-input"
              />
            </div>

            {/* Skill Blocks listed with animated proficiency ranges */}
            <div className="space-y-5">
              {filteredSkills.map((group) => (
                <div key={group.category} className="space-y-3.5">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="bg-[#F3F4F6] text-gray-750 border border-[#D1D5DB] px-2.5 py-1 rounded text-xs font-bold"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {filteredSkills.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-xs">
                  No expertise tools match your search criteria.
                </div>
              )}
            </div>

            {/* Continuous Integration Certifications segment */}
            <div className="pt-6 border-t border-[#E5E7EB] print:pt-4">
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#2563EB] print:hidden" />
                Trainings and Certifications
              </h5>
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 bg-[#F9FAFB] rounded border border-[#D1D5DB] flex gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#2563EB] shrink-0 animate-pulse" />
                  <div>
                    <strong className="text-gray-800 font-bold">Weather Spotter Certification</strong>
                    <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Earned 2023 | NWS Los Angeles/Oxnard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
