import { useState } from 'react';
import temperatureData from '../data/lasTempsChart.json';

export default function InteractiveHeatmap() {
  const [tooltipData, setTooltipData] = useState<{ xPos: number, yPos: number, tempValue: number, dayValue: number, hourValue: number } | null>(null);

  const daysList = Array.from({ length: 365 }, (_, indexValue) => indexValue + 1);
  const hoursList = Array.from({ length: 24 }, (_, indexValue) => indexValue);
    const formatDayToDate = (dayOfYear: number) => {
    const date = new Date(2023, 0, dayOfYear);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}`;
  };
    const getHeatmapColor = (tempValue: number) => {
        if (tempValue <= 0) return '#E4E4F7';
        if (tempValue <= 2) return '#E4E1FD';
        if (tempValue <= 4) return '#DBCBFF';
        if (tempValue <= 6) return '#D1A9FF';
        if (tempValue <= 8) return '#BF88FF';
        if (tempValue <= 10) return '#A373E5';
        if (tempValue <= 12) return '#8F5BBF';
        if (tempValue <= 14) return '#733DA3';
        if (tempValue <= 16) return '#5D2F8F';
        if (tempValue <= 18) return '#420078';
        if (tempValue <= 20) return '#32007E';
        if (tempValue <= 22) return '#2A0099';
        if (tempValue <= 24) return '#1400A0';
        if (tempValue <= 32) return '#0f51d4';
        if (tempValue <= 34) return '#0f75d4';
        if (tempValue <= 36) return '#0f8cd4';
        if (tempValue <= 40) return '#0fa6d4';
        if (tempValue <= 43) return '#0fbdd4';
        if (tempValue <= 47) return '#1db9ac';
        if (tempValue <= 51) return '#1DB976';
        if (tempValue <= 54) return '#1BB25A';
        if (tempValue <= 57) return '#0BA93F';
        if (tempValue <= 60) return '#0c9602';
        if (tempValue <= 62) return '#0BA40B';
        if (tempValue <= 64) return '#12B812';
        if (tempValue <= 66) return '#11D411';
        if (tempValue <= 68) return '#89F00F';
        if (tempValue <= 70) return '#C2F800';
        if (tempValue <= 72) return '#dffc00';
        if (tempValue <= 74) return '#FFDF00';
        if (tempValue <= 76) return '#FFAE00';
        if (tempValue <= 78) return '#FF8C00';
        if (tempValue <= 80) return '#FF702E';
        if (tempValue <= 82) return '#FF4300';
        if (tempValue <= 84) return '#FF2E00';
        if (tempValue <= 86) return '#E6142E';
        if (tempValue <= 88) return '#BC1F32';
        if (tempValue <= 90) return '#9B2323';
        if (tempValue <= 92) return '#830000';
        if (tempValue <= 94) return '#730000';
        if (tempValue <= 96) return '#840029';
        if (tempValue <= 98) return '#BD005F';
        if (tempValue <= 100) return '#E7098B';
        if (tempValue <= 102) return '#F419CE';
        if (tempValue <= 103) return '#f058d6';
        if (tempValue <= 104) return '#ef7edc';

        return '#6c0084';
    };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center font-sans">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Mean Hourly Temperature at Harry Reid Int'l (1994-2023)</h3>
      
      <div className="flex w-full">
        {/* Y-Axis */}
        <div className="flex flex-col justify-between pr-2 text-xs text-gray-500 py-1 shrink-0">
          <span>23:00</span>
          <span>12:00</span>
          <span>00:00</span>
        </div>

        {/* Heatmap Grid - Removed gaps and fixed widths to force it to fit */}
        <div className="flex w-full bg-gray-200 border border-gray-300">
          {daysList.map(currentDay => (
            <div key={currentDay} className="flex-1 flex flex-col">
              {hoursList.slice().reverse().map(currentHour => {
                const tempValue = (temperatureData as any)[currentHour.toString()]?.[currentDay.toString()] || 0;
                return (
                  <div
                    key={`${currentDay}-${currentHour}`}
                    // h-6 doubles the vertical height. w-full makes it fill the flex column.
                    className="w-full h-6 cursor-pointer hover:ring-1 hover:ring-black hover:z-10 relative"
                    style={{ backgroundColor: getHeatmapColor(tempValue) }}
                    onMouseEnter={(eventData) => setTooltipData({ xPos: eventData.clientX, yPos: eventData.clientY, tempValue, dayValue: currentDay, hourValue: currentHour })}
                    onMouseLeave={() => setTooltipData(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* X-Axis */}
      <div className="flex justify-between w-full mt-2 text-xs text-gray-500 pl-10 pr-2 shrink-0">
        <span>Jan 1</span>
        <span>Jul 1</span>
        <span>Dec 31</span>
      </div>

      {/* Tooltip */}
      {tooltipData && (
        <div 
          className="fixed bg-white border border-gray-300 text-xs font-bold p-2 shadow-lg rounded pointer-events-none z-50"
          style={{ top: tooltipData.yPos - 40, left: tooltipData.xPos + 10 }}
        >
        <span className="text-gray-700">
        {formatDayToDate(tooltipData.dayValue)} at {tooltipData.hourValue.toString().padStart(2, '0')}:00 {' '}
          </span>
          <span style={{ color: getHeatmapColor(tooltipData.tempValue) }}>
            {Math.round(tooltipData.tempValue)}°F
          </span>
        </div>
      )}
    </div>
  );
}