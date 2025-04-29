export const size = (maxPx: number): string => {
    const minVW = 1024;
    const maxVW = 1920;
  
    const minPx = (maxPx * minVW) / maxVW;
    const slope = (maxPx - minPx) / (maxVW - minVW);
    const y = minPx - slope * minVW;
  
    return `clamp(${minPx.toFixed(2)}px, calc(${y.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw), ${maxPx}px)`;
  };
  

export const sizePlus = (px: number): string => {
    const minViewport = 320;  // минимальная ширина экрана
    const maxViewport = 1023; // максимальная ширина экрана

    const minSize = px; // минимальный размер, который указан в пикселях
    const maxSize = px * 1.2; // уменьшенный коэффициент для более умеренного увеличения

    // Вычисляем наклон (slope) и точку пересечения для fluid расчета
    const slope = (maxSize - minSize) / (maxViewport - minViewport);
    const yAxisIntersection = minSize - slope * minViewport;

    // Создаем плавный расчет размера в зависимости от ширины экрана
    const fluid = `calc(${yAxisIntersection.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw)`;

    // Возвращаем итоговый размер с использованием clamp
    return `clamp(${minSize.toFixed(2)}px, ${fluid}, ${maxSize.toFixed(2)}px)`;
};

export const sizeNumber = (value: number): number =>
    parseFloat(size(value)); // убирает единицы и возвращает число
  
