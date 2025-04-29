export const size = (px: number): string => {
    const minViewport = 1024;
    const maxViewport = 1920;

    const minSize = (px * minViewport) / maxViewport;
    const slope = (px - minSize) / (maxViewport - minViewport);
    const yAxisIntersection = minSize - slope * minViewport;

    const fluid = `calc(${yAxisIntersection.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw)`;

    return `clamp(${minSize.toFixed(2)}px, ${fluid}, ${px}px)`;
};
