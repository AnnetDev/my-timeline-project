import React, { useState, useEffect } from "react";
import gsap from "gsap";

const AnimatedNumber: React.FC<{ num: number }> = ({ num }) => {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        gsap.to(
            { val: display },
            {
                val: num,
                duration: 0.5,
                ease: "power1.out",
                onUpdate() {
                    setDisplay(Math.round((this.targets()[0] as any).val));
                },
            }
        );
    }, [num]);

    return <div>{display}</div>;
};

export default AnimatedNumber;
