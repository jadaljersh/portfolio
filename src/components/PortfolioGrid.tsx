// @ts-nocheck
import { useState, useMemo, useEffect } from "react";
import { PortfolioItem } from "../types";
import { Search, Tag, X, ExternalLink, Globe, Github, Scale, BarChart2, Lightbulb, TrendingUp, Compass, Eye } from "lucide-react";
import DataVizModal from "./DataVizModal";

interface GridProps {
  items: PortfolioItem[];
  defaultType?: 'map' | 'visualization'| 'dev' | 'project';
}

export default function PortfolioGrid({ items, defaultType }: GridProps) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    setSelectedTag(null);
  }, [defaultType]);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    items.forEach(item => {
      if (!defaultType || item.type === defaultType) {
        item.tags.forEach(t => tagsSet.add(t));
      }
    });
    return Array.from(tagsSet).sort();
  }, [items, defaultType]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (defaultType && item.type !== defaultType) {
        return false;
      }
      
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                            item.tagline.toLowerCase().includes(search.toLowerCase()) ||
                            item.description.toLowerCase().includes(search.toLowerCase());
      
      const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [items, search, selectedTag, defaultType]);

  return (
    <div className="space-y-6">
      
      {/* 1. Filtering & Search Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded border border-[#D1D5DB] shadow-sm">
        {/* Search input field */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] border border-[#D1D5DB] rounded text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all duration-200"
            id="portfolio-search-input"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xs font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Clear active tag button if filtered */}
        {selectedTag && (
          <button
            onClick={() => setSelectedTag(null)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1d4ed8] bg-[#2563EB]/5 px-3 py-2 rounded border border-[#2563EB]/15 cursor-pointer transition"
            id="clear-tag-btn"
          >
            Filter: {selectedTag} <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* 2. Quick Tags Horizontal Carousel */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Tag className="h-3.5 w-3.5 text-gray-400" />
          Tags:
        </span>
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded text-xs font-bold cursor-pointer transition ${
            !selectedTag 
              ? "bg-[#2563EB] text-white shadow" 
              : "bg-white text-gray-650 hover:bg-gray-100 border border-[#D1D5DB]"
          }`}
        >
          All Tags
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded text-xs font-bold whitespace-nowrap cursor-pointer transition ${
              selectedTag === tag 
                ? "bg-[#2563EB] text-white shadow" 
                : "bg-white text-gray-600 hover:bg-gray-50 border border-[#D1D5DB] hover:border-[#2563EB]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 3. Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded border border-[#D1D5DB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#2563EB] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            id={`portfolio-card-${item.id}`}
          >
            <div>
              {/* Card Image Cover */}
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden border-b border-[#D1D5DB]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image overlay tags or decorations */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5">
                    <Eye className="h-3.5 w-3.5" /> View
                  </span>
                </div>
              </div>

              {/* Card Specifications */}
              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <span className="text-[9px] font-extrabold text-[#2563EB] uppercase tracking-widest block">
                    {item.type === 'map' ? '' : item.type === 'dev' ? '' : ''}
                  </span>
                  <h3 className="font-sans font-extrabold text-gray-900 text-base leading-snug group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#2563EB] font-bold line-clamp-1 italic font-mono">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-gray-550 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Tags footer */}
            <div className="px-5 pb-5 pt-2 border-t border-gray-50 flex flex-wrap gap-1">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F3F4F6] text-gray-600 px-2.5 py-0.5 rounded text-[10px] font-bold border border-[#D1D5DB]"
                >
                  {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[9px] font-bold">
                  +{item.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="col-span-full bg-[#F9FAFB] rounded border border-dashed border-[#D1D5DB] py-16 text-center text-gray-400">
            <Compass className="h-10 w-10 text-gray-350 mx-auto mb-3" />
            <h4 className="font-bold text-gray-700 text-sm mb-1">No Matches Listed</h4>
            <p className="text-xs max-w-sm mx-auto leading-relaxed">
              Try selection reset or looking up other tags.
            </p>
          </div>
        )}
      </div>

      {/* 4. Details Modal / Drawer Backed by Backdrop */}
      {selectedItem && (
        ['vis-1', 'vis-4'].includes(selectedItem.id) ? (
          <DataVizModal 
            selectedItem={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        ) : (
          <div className="fixed inset-0 bg-[#111827]/70 backdrop-blur-xs z-50 flex justify-center items-center p-4 overflow-y-auto animate-fade-in" id="portfolio-modal">
            <div className="bg-white rounded border border-[#D1D5DB] w-full max-w-4xl shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col justify-between">
              
              <div className="bg-[#F9FAFB] border-b border-[#D1D5DB] p-4 sm:px-6 flex justify-between items-center shrink-0">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                  }}
                  className="h-8 w-8 rounded bg-white hover:bg-gray-100 border border-[#D1D5DB] flex items-center justify-center text-gray-500 hover:text-gray-800 transition shadow-xs cursor-pointer"
                  id="close-modal-btn"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
  
              <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
                
                <div className="space-y-2">
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                    {selectedItem.title}
                  </h2>
                  <p className="text-[#2563EB] font-bold text-sm sm:text-base tracking-tight italic">
                    {selectedItem.tagline}
                  </p>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  
                  <div className="md:col-span-2 space-y-4">
                    <div className="aspect-[4/3] rounded overflow-hidden shadow-sm border border-[#D1D5DB] relative group/modal-img">
                      <a
                        href={selectedItem.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative cursor-zoom-in"
                        title="Click to view full-resolution image hosted on ArcGIS Online"
                      >
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          className="w-full h-full object-cover group-hover/modal-img:scale-[1.02] transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/modal-img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/95 text-gray-800 text-xs font-bold px-3 py-1.5 rounded shadow-sm border border-gray-200 flex items-center gap-1.5">
                            <ExternalLink className="h-3.5 w-3.5 text-[#2563EB]" />
                            Full Screen
                          </span>
                        </div>
                      </a>
                    </div>
  
                    {(selectedItem.links?.demo || selectedItem.links?.github || selectedItem.links?.docs || (selectedItem.customLinks && selectedItem.customLinks.length > 0)) && (
                      <div className="bg-[#F9FAFB] p-4 rounded border border-[#D1D5DB] space-y-2.5">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">External Assets</span>
                        
                        {selectedItem.links?.demo && (
                          <a
                            href={selectedItem.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between text-xs font-bold text-gray-700 bg-white hover:text-[#2563EB] hover:border-[#2563EB]/30 p-2.5 rounded border border-[#D1D5DB] transition"
                          >
                            <span className="flex items-center gap-1.5">
                              <ExternalLink className="h-3.5 w-3.5 text-gray-600" /> 
                              Project
                            </span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        
                        {selectedItem.links?.docs && (
                          <a
                            href={selectedItem.links.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between text-xs font-bold text-gray-700 bg-white hover:text-[#2563EB] hover:border-[#2563EB]/30 p-2.5 rounded border border-[#D1D5DB] transition"
                          >
                            <span className="flex items-center gap-1.5">
                              <Compass className="h-3.5 w-3.5 text-gray-600" />
                            {selectedItem.links.docsLabel || "Project Documentation"}
                            </span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
  
                        {selectedItem.customLinks && selectedItem.customLinks.map((customLinkItem, indexValue) => (
                          <a
                            key={indexValue}
                            href={customLinkItem.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between text-xs font-bold text-gray-700 bg-white hover:text-[#2563EB] hover:border-[#2563EB]/30 p-2.5 rounded border border-[#D1D5DB] transition"
                          >
                            <span className="flex items-center gap-1.5">
                              <ExternalLink className="h-3.5 w-3.5 text-gray-600" />
                              {customLinkItem.linkTitle}
                            </span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
  
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Project Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedItem.tags.map((tagValue) => (
                          <span key={tagValue} className="bg-[#F3F4F6] text-gray-750 px-2 py-0.5 rounded text-xs border border-[#D1D5DB] font-bold">
                            {tagValue}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
  
                  <div className="md:col-span-3 space-y-6">
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Summary</span>
                      <p className="text-gray-650 text-sm sm:text-base leading-relaxed font-normal">
                        {selectedItem.description}
                      </p>
                    </div>
  
                    {selectedItem.metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#2563EB]/5 p-4 rounded border border-[#2563EB]/15">
                        {selectedItem.metrics.map((metricItem) => (
                          <div key={metricItem.label} className="space-y-0.5">
                            <span className="text-[9px] font-bold text-[#2563EB] uppercase tracking-wider">{metricItem.label}</span>
                            <p className="text-sm font-extrabold text-gray-800">{metricItem.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
  
                    {selectedItem.details && (
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <div className="space-y-2.5">
                          <div className="flex gap-2.5 items-start">
                            <span className="h-5 w-5 rounded bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-650 shrink-0 text-xs font-bold">
                              <Scale className="h-3 w-3" />
                            </span>
                            <div>
                              <strong className="text-xs sm:text-sm text-gray-900 block font-sans font-bold">Challenge</strong>
                              <p className="text-gray-550 text-xs sm:text-sm mt-0.5 leading-relaxed font-normal">{selectedItem.details.challenge}</p>
                            </div>
                          </div>
  
                          <div className="flex gap-2.5 items-start">
                            <span className="h-5 w-5 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 text-xs font-bold">
                              <Lightbulb className="h-3 w-3" />
                            </span>
                            <div>
                              <strong className="text-xs sm:text-sm text-gray-900 block font-sans font-bold">Solution</strong>
                              <p className="text-gray-550 text-xs sm:text-sm mt-0.5 leading-relaxed font-normal">{selectedItem.details.solution}</p>
                            </div>
                          </div>
  
                          <div className="flex gap-2.5 items-start">
                            <span className="h-5 w-5 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 text-xs font-bold">
                              <TrendingUp className="h-3 w-3" />
                            </span>
                            <div>
                              <strong className="text-xs sm:text-sm text-gray-900 block font-sans font-bold">Impact</strong>
                              <p className="text-gray-550 text-xs sm:text-sm mt-0.5 leading-relaxed font-normal">{selectedItem.details.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
  
                  </div>
                </div>
  
              </div>
  
              <div className="bg-[#F9FAFB] border-t border-[#D1D5DB] px-6 py-4 flex justify-end shrink-0">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                  }}
                  className="bg-white hover:bg-gray-50 border border-[#D1D5DB] text-gray-700 font-bold px-4 py-2 rounded text-xs transition cursor-pointer"
                >
                  Close
                </button>
              </div>
  
            </div>
          </div>
        )
      )}
  
    </div>
  );
}