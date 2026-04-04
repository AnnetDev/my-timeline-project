import React from "react";
import { size } from "../../../utils/size";
import { StyledCircleWrapper, CircularPaginationWrapper, Bullet } from "../styles/timeline-swiper";
import { slidesData } from "../../../../mocks/mockData";

interface Props {
    bulletsRef: React.RefObject<HTMLDivElement | null>;
    activeIndex: number;
    step: number;
    radius: number;
    onBulletClick: (index: number) => void;
}

const CircularPagination: React.FC<Props> = ({ bulletsRef, activeIndex, step, radius, onBulletClick }) => (
    <StyledCircleWrapper>
        <CircularPaginationWrapper
            ref={bulletsRef}
            style={{
                width: size(radius * 2),
                height: size(530),
            }}
        >
            {slidesData.map((_, i) => {
                const angle = i * step;
                const isActive = i === activeIndex;
                return (
                    <Bullet
                        key={i}
                        $active={isActive}
                        data-active={isActive ? "true" : "false"}
                        onClick={() => onBulletClick(i)}
                        style={{
                            transform: `
                                translate(-50%, -50%)
                                rotate(${angle}deg)
                                translate(${size(radius)})
                                rotate(${-angle}deg)
                            `,
                        } as React.CSSProperties}
                    >
                        <div className="bullet-number">{i + 1}</div>
                    </Bullet>
                );
            })}
        </CircularPaginationWrapper>
    </StyledCircleWrapper>
);

export default CircularPagination;
