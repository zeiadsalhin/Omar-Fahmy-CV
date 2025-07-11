import { useEffect, useState } from 'react';

interface AnimationSteps {
    [key: string]: boolean;
}

// Custom hook for sequential animation control
// This hook manages the visibility of elements in a sequence with a delay
// It takes the number of steps and delay increment as parameters
const useAnimationSequence = (steps: number = 4, delayIncrement: number = 300) => {
    const [show, setShow] = useState<AnimationSteps>({
        greeting: false,
        typewriter: false,
        buttons: false,
        image: false,
    });

    useEffect(() => {
        const stepsArray = Array.from({ length: steps }, (_, i) => () =>
            setShow((s) => ({ ...s, [`step${i + 1}`]: true }))
        );

        stepsArray.forEach((step, i) => setTimeout(step, 500 + i * delayIncrement));
    }, [steps, delayIncrement]);

    return show;
};

export default useAnimationSequence;
