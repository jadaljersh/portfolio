import { useState } from 'react';
import tempLinesData from '../data/laxLinearAverages.json';


export default function InteractiveLineChart() {
  const [hoverData, setHoverData] = useState<{ xPos: number, yPosMax: number, yPosMin: number, data: any } | null>(null);

  const chartWidth = 800;
  const chartHeight = 400;
  const padding = 40;

  // Calculate the min and max to set our chart boundaries
  const minTemp = Math.floor(Math.min(...tempLinesData.map(d => d.TMINSmooth))) - 5;
  const maxTemp = Math.ceil(Math.max(...tempLinesData.map(d => d.TMAXSmooth))) + 5;
  const tempRange = maxTemp - minTemp;

  const getX = (indexValue: number) => padding + (indexValue / (tempLinesData.length - 1)) * (chartWidth - padding * 2);
  const getY = (tempValue: number) => chartHeight - padding - ((tempValue - minTemp) / tempRange) * (chartHeight - padding * 2);

  const highPoints = tempLinesData.map((d, i) => `${getX(i)},${getY(d.TMAXSmooth)}`).join(' ');
  const lowPoints = tempLinesData.map((d, i) => `${getX(i)},${getY(d.TMINSmooth)}`).join(' ');

  const getOffset = (targetTemp: number) => {
    const percentage = ((targetTemp - minTemp) / tempRange) * 100;
    // Math.max/min ensures the percentage never goes below 0% or above 100%
    return `${Math.max(0, Math.min(100, percentage))}%`;
  };

  const handleMouseMove = (eventData: React.MouseEvent<SVGSVGElement>) => {
    const rect = eventData.currentTarget.getBoundingClientRect();
    const mouseX = eventData.clientX - rect.left;
    const scaleX = chartWidth / rect.width;
    const svgX = mouseX * scaleX;

    let closestIndex = Math.round(((svgX - padding) / (chartWidth - padding * 2)) * (tempLinesData.length - 1));
    
    if (closestIndex < 0) closestIndex = 0;
    if (closestIndex >= tempLinesData.length) closestIndex = tempLinesData.length - 1;

    const dataPoint = tempLinesData[closestIndex];
    
    setHoverData({
      xPos: getX(closestIndex),
      yPosMax: getY(dataPoint.TMAXSmooth),
      yPosMin: getY(dataPoint.TMINSmooth),
      data: dataPoint
    });
  };

  const monthLabels = [
    { indexValue: 0, labelString: 'Jan' },
    { indexValue: 31, labelString: 'Feb' },
    { indexValue: 59, labelString: 'Mar' },
    { indexValue: 90, labelString: 'Apr' },
    { indexValue: 120, labelString: 'May' },
    { indexValue: 151, labelString: 'Jun' },
    { indexValue: 181, labelString: 'Jul' },
    { indexValue: 212, labelString: 'Aug' },
    { indexValue: 243, labelString: 'Sep' },
    { indexValue: 273, labelString: 'Oct' },
    { indexValue: 304, labelString: 'Nov' },
    { indexValue: 334, labelString: 'Dec' }
  ];

  return (
    <div className="w-full relative font-sans">
      <h2 className="text-l font-bold text-black mb-4 text-center">
        Average Daily Maximum and Minimum Temperatures in Los Angeles, CA
      </h2>
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="w-full h-auto bg-gray-50 border border-gray-200 rounded cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverData(null)}
      >
        {/* 👇 UPDATED: Added userSpaceOnUse and explicit y1/y2 boundaries */}
        <linearGradient 
          id="thermalGradient" 
          x1="0" 
          y1={chartHeight - padding}
          x2="0" 
          y2={padding}
          gradientUnits="userSpaceOnUse"
        >
<stop offset={getOffset(-Infinity)} stopColor="#D3D3D3" />
          <stop offset={getOffset(0)} stopColor="#E4E4F7" />
          <stop offset={getOffset(1)} stopColor="#E8E8FA" />
          <stop offset={getOffset(2)} stopColor="#E4E1FD" />
          <stop offset={getOffset(3)} stopColor="#E0D7FF" />
          <stop offset={getOffset(4)} stopColor="#DBCBFF" />
          <stop offset={getOffset(5)} stopColor="#D6B3FF" />
          <stop offset={getOffset(6)} stopColor="#D1A9FF" />
          <stop offset={getOffset(7)} stopColor="#CC99FF" />
          <stop offset={getOffset(8)} stopColor="#BF88FF" />
          <stop offset={getOffset(9)} stopColor="#B380FF" />
          <stop offset={getOffset(10)} stopColor="#A373E5" />
          <stop offset={getOffset(11)} stopColor="#9966CC" />
          <stop offset={getOffset(12)} stopColor="#8F5BBF" />
          <stop offset={getOffset(13)} stopColor="#804DB3" />
          <stop offset={getOffset(14)} stopColor="#733DA3" />
          <stop offset={getOffset(15)} stopColor="#663399" />
          <stop offset={getOffset(16)} stopColor="#5D2F8F" />
          <stop offset={getOffset(17)} stopColor="#4B0082" />
          <stop offset={getOffset(18)} stopColor="#420078" />
          <stop offset={getOffset(19)} stopColor="#3A0088" />
          <stop offset={getOffset(20)} stopColor="#32007E" />
          <stop offset={getOffset(21)} stopColor="#2A0099" />
          <stop offset={getOffset(22)} stopColor="#20008B" />
          <stop offset={getOffset(23)} stopColor="#1A00B3" />
          <stop offset={getOffset(24)} stopColor="#1400A0" />
          <stop offset={getOffset(25)} stopColor="#0000FF" />
          <stop offset={getOffset(26)} stopColor="#0000E5" />
          <stop offset={getOffset(27)} stopColor="#0000CC" />
          <stop offset={getOffset(28)} stopColor="#0000B2" />
          <stop offset={getOffset(29)} stopColor="#000099" />
          <stop offset={getOffset(30)} stopColor="#00007F" />
          <stop offset={getOffset(31)} stopColor="#0f36d4" />
          <stop offset={getOffset(32)} stopColor="#0f51d4" />
          <stop offset={getOffset(33)} stopColor="#0f68d4" />
          <stop offset={getOffset(34)} stopColor="#0f75d4" />
          <stop offset={getOffset(35)} stopColor="#0f85d4" />
          <stop offset={getOffset(36)} stopColor="#0f8cd4" />
          <stop offset={getOffset(37)} stopColor="#0f96d4" />
          <stop offset={getOffset(38)} stopColor="#0fa6d4" />
          <stop offset={getOffset(39)} stopColor="#0fb3d4" />
          <stop offset={getOffset(40)} stopColor="#0fbdd4" />
          <stop offset={getOffset(41)} stopColor="#0fcad4" />
          <stop offset={getOffset(42)} stopColor="#0fd4d4" />
          <stop offset={getOffset(43)} stopColor="#0fd4d4" />
          <stop offset={getOffset(44)} stopColor="#1fcfc6" />
          <stop offset={getOffset(45)} stopColor="#0ec7b0" />
          <stop offset={getOffset(46)} stopColor="#18C1A7" />
          <stop offset={getOffset(47)} stopColor="#02B8BA" />
          <stop offset={getOffset(48)} stopColor="#13BDC4" />
          <stop offset={getOffset(49)} stopColor="#1EB7BD" />
          <stop offset={getOffset(50)} stopColor="#1BA89F" />
          <stop offset={getOffset(51)} stopColor="#20B2AA" />
          <stop offset={getOffset(52)} stopColor="#21B880" />
          <stop offset={getOffset(53)} stopColor="#22C281" />
          <stop offset={getOffset(54)} stopColor="#1DB976" />
          <stop offset={getOffset(55)} stopColor="#19C46C" />
          <stop offset={getOffset(56)} stopColor="#1BB25A" />
          <stop offset={getOffset(57)} stopColor="#22C257" />
          <stop offset={getOffset(58)} stopColor="#0BA93F" />
          <stop offset={getOffset(59)} stopColor="#0DAA2E" />
          <stop offset={getOffset(60)} stopColor="#0A8900" />
          <stop offset={getOffset(61)} stopColor="#009800" />
          <stop offset={getOffset(62)} stopColor="#0BA40B" />
          <stop offset={getOffset(63)} stopColor="#0FAB0F" />
          <stop offset={getOffset(64)} stopColor="#12B812" />
          <stop offset={getOffset(65)} stopColor="#14C714" />
          <stop offset={getOffset(66)} stopColor="#11D411" />
          <stop offset={getOffset(67)} stopColor="#08ED08" />
          <stop offset={getOffset(68)} stopColor="#89F00F" />
          <stop offset={getOffset(69)} stopColor="#ADFF2F" />
          <stop offset={getOffset(70)} stopColor="#C2F800" />
          <stop offset={getOffset(71)} stopColor="#D8FF00" />
          <stop offset={getOffset(72)} stopColor="#dffc00" />
          <stop offset={getOffset(73)} stopColor="#FFFF00" />
          <stop offset={getOffset(74)} stopColor="#FFDF00" />
          <stop offset={getOffset(75)} stopColor="#FFD100" />
          <stop offset={getOffset(76)} stopColor="#FFAE00" />
          <stop offset={getOffset(77)} stopColor="#FFB600" />
          <stop offset={getOffset(78)} stopColor="#FF8C00" />
          <stop offset={getOffset(79)} stopColor="#FF762E" />
          <stop offset={getOffset(80)} stopColor="#FF702E" />
          <stop offset={getOffset(81)} stopColor="#FF5900" />
          <stop offset={getOffset(82)} stopColor="#FF4300" />
          <stop offset={getOffset(83)} stopColor="#FF4500" />
          <stop offset={getOffset(84)} stopColor="#FF2E00" />
          <stop offset={getOffset(85)} stopColor="#FF0000" />
          <stop offset={getOffset(86)} stopColor="#E6142E" />
          <stop offset={getOffset(87)} stopColor="#DC143C" />
          <stop offset={getOffset(88)} stopColor="#BC1F32" />
          <stop offset={getOffset(89)} stopColor="#B22222" />
          <stop offset={getOffset(90)} stopColor="#9B2323" />
          <stop offset={getOffset(91)} stopColor="#8B0000" />
          <stop offset={getOffset(92)} stopColor="#830000" />
          <stop offset={getOffset(93)} stopColor="#800000" />
          <stop offset={getOffset(94)} stopColor="#730000" />
          <stop offset={getOffset(95)} stopColor="#660000" />
          <stop offset={getOffset(96)} stopColor="#840029" />
          <stop offset={getOffset(97)} stopColor="#A70D54" />
          <stop offset={getOffset(98)} stopColor="#BD005F" />
          <stop offset={getOffset(99)} stopColor="#D60071" />
          <stop offset={getOffset(100)} stopColor="#E7098B" />
          <stop offset={getOffset(101)} stopColor="#EA09A6" />
          <stop offset={getOffset(102)} stopColor="#F419CE" />
          <stop offset={getOffset(103)} stopColor="#FF1AEE" />
          <stop offset={getOffset(104)} stopColor="#FF77F5" />
          <stop offset={getOffset(105)} stopColor="#FFACFF" />
          <stop offset={getOffset(106)} stopColor="#FFC0CB" />
          <stop offset={getOffset(107)} stopColor="#FFC7E5" />
          <stop offset={getOffset(108)} stopColor="#FFC5FB" />
          <stop offset={getOffset(109)} stopColor="#FFDDFF" />
          <stop offset={getOffset(110)} stopColor="#FFDDFC" />
          <stop offset={getOffset(111)} stopColor="#FFE6FF" />
          <stop offset={getOffset(112)} stopColor="#FFDDFC" />
          <stop offset={getOffset(113)} stopColor="#FFE6FF" />
          <stop offset={getOffset(114)} stopColor="#FFECFD" />
          <stop offset={getOffset(115)} stopColor="#FFF2FE" />
          <stop offset={getOffset(116)} stopColor="#FFF5FE" />
        </linearGradient>

        {monthLabels.map(monthItem => (
          <g key={monthItem.labelString}>
            <line x1={getX(monthItem.indexValue)} y1={padding} x2={getX(monthItem.indexValue)} y2={chartHeight - padding} stroke="#e5e7eb" strokeWidth="1" />
            <text x={getX(monthItem.indexValue)} y={chartHeight - 15} fontSize="12" fill="#6b7280" textAnchor="middle">{monthItem.labelString}</text>
          </g>
        ))}

        <polyline points={highPoints} fill="none" stroke="url(#thermalGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        <polyline points={lowPoints} fill="none" stroke="url(#thermalGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {hoverData && (
          <g>
            <line x1={hoverData.xPos} y1={padding} x2={hoverData.xPos} y2={chartHeight - padding} stroke="#111827" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx={hoverData.xPos} cy={hoverData.yPosMax} r="4" fill="#fff" stroke="#FF4300" strokeWidth="2" />
            <circle cx={hoverData.xPos} cy={hoverData.yPosMin} r="4" fill="#fff" stroke="#0f51d4" strokeWidth="2" />
          </g>
        )}
      </svg>

      {hoverData && (
        <div
          className="absolute bg-white border border-gray-300 text-xs p-3 shadow-lg rounded pointer-events-none flex flex-col gap-1 z-50 transform -translate-x-1/2 -translate-y-full min-w-[100px]"
          style={{
            left: `${(hoverData.xPos / chartWidth) * 100}%`,
            top: `${(hoverData.yPosMax / chartHeight) * 100}%`,
            marginTop: '-12px'
          }}
        >
          <span className="font-bold text-gray-700 border-b border-gray-100 pb-1 mb-1 text-center">
            {hoverData.data.Month.toString().padStart(2, '0')}/{hoverData.data.Day.toString().padStart(2, '0')}
          </span>
          <div className="flex justify-between gap-4">
            <span className="text-gray-500 font-bold">High</span>
            <span className="text-orange-600 font-extrabold">{Math.round(hoverData.data.TMAXSmooth)}°F</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-500 font-bold">Low</span>
            <span className="text-blue-600 font-extrabold">{Math.round(hoverData.data.TMINSmooth)}°F</span>
          </div>
        </div>
      )}
    </div>
  );
}