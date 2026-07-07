import { X, ExternalLink, Github, Globe } from "lucide-react";
import InteractiveHeatmap from "./InteractiveHeatmap";
import InteractiveLineChart from "./InteractiveLineChart";
export default function DataVizModal({ selectedItem, onClose }: { selectedItem: any, onClose: () => void }) {
  const dynamicHeight = selectedItem.id === 'vis-1' ? 'h-[80vh]' : selectedItem.id === 'vis-4' ? 'max-h-[60vh]' : 'max-h-[70vh]';
  return (
    <div className="fixed inset-0 bg-[#111827]/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in">
      <div className={`bg-white rounded border border-[#D1D5DB] w-full max-w-5xl ${dynamicHeight} shadow-2xl flex flex-col overflow-hidden relative`}>

        {/* Header Bar */}
        <div className="bg-[#F9FAFB] border-b border-[#D1D5DB] p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest border border-purple-200">
              Interactive Visualization
            </span>
            <h2 className="font-sans font-extrabold text-lg text-gray-900">
              {selectedItem.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded bg-white hover:bg-gray-100 border border-[#D1D5DB] flex items-center justify-center text-gray-500 hover:text-gray-800 transition cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Split Screen Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          
        {/* Left Side: Now uses a simple vertical stack with a gap */}
          <div className="md:w-3/5 bg-gray-50 border-r border-[#D1D5DB] p-6 flex flex-col justify-start gap-6 overflow-y-auto">
            
            {/* Map/Chart Container - removes flex-1 so it only takes up its own height */}
            <div className="w-full flex items-center justify-center min-h-[300px]">
              {selectedItem.id === 'vis-1' && <InteractiveHeatmap />}
              {selectedItem.id === 'vis-4' && <InteractiveLineChart />}
              
              {!['vis-1', 'vis-4'].includes(selectedItem.id) && (
                 <div className="text-gray-400 font-bold text-sm">Visualization not found.</div>
              )}
            </div>

            {/* Project Stack - Now hugs right under the map wrapper */}
            <div className="space-y-1.5 w-full">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Project Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedItem.tags?.map((tagValue: string) => (
                  <span key={tagValue} className="bg-[#F3F4F6] text-gray-750 px-2 py-0.5 rounded text-xs border border-[#D1D5DB] font-bold">
                    {tagValue}
                  </span>
                ))}
              </div>
            </div>

          </div>




          
          {/* Right Side: Documentation & Context (Now 30% width) */}
          <div className="md:w-[30%] p-6 sm:p-8 overflow-y-auto bg-white space-y-6">
          
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Summary</span>
              <p className="text-gray-650 text-sm leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          {selectedItem.metrics && (
              <div className="grid grid-cols-1 gap-3 bg-[#2563EB]/5 p-4 rounded border border-[#2563EB]/15 mt-2">
                {selectedItem.metrics.map((met: any) => (
                  <div key={met.label} className="space-y-0.5">
                    <span className="text-[9px] font-bold text-[#2563EB] uppercase tracking-wider">{met.label}</span>
                    <p className="text-sm font-extrabold text-gray-800">{met.value}</p>
                  </div>
                ))}
              </div>
            )}
            {/* Render any links if they exist */}
            {(selectedItem.links?.demo || selectedItem.links?.github) && (
              <div className="bg-[#F9FAFB] p-4 rounded border border-[#D1D5DB] space-y-2.5">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">Resources</span>
                
                {selectedItem.links.github && (
                  <a href={selectedItem.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-bold text-gray-700 bg-white hover:text-[#2563EB] hover:border-[#2563EB]/30 p-2 rounded border border-[#D1D5DB] transition">
                    <span className="flex items-center gap-1.5"><Github className="h-3.5 w-3.5" /> Repository</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            )}
          </div>
          
        </div>

                <div className="bg-[#F9FAFB] border-t border-[#D1D5DB] px-6 py-4 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-50 border border-[#D1D5DB] text-gray-700 font-bold px-4 py-2 rounded text-xs transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}