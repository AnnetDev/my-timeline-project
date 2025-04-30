// minus scaling
export const size = (maxPx: number): string => {
    const minVW = 1024;
    const maxVW = 1920;

    const minPx = (maxPx * minVW) / maxVW;
    const slope = (maxPx - minPx) / (maxVW - minVW);
    const y = minPx - slope * minVW;
  
    return `clamp(${minPx.toFixed(2)}px, calc(${y.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw), ${maxPx}px)`;
  };
  
// plus scaling
export const sizePlus = (px: number): string => {
    const minViewport = 320;
    const maxViewport = 1023;
    const minSize = px;
    const maxSize = px * 1.3;

    const slope = (maxSize - minSize) / (maxViewport - minViewport);
    const yAxisIntersection = minSize - slope * minViewport;

    const fluid = `calc(${yAxisIntersection.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw)`;

    return `clamp(${minSize.toFixed(2)}px, ${fluid}, ${maxSize.toFixed(2)}px)`;
};