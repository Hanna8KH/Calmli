import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';

window.THREE = THREE;

export const FogBackground = ({setFogIsInit}) => {
    const backgroundRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        import('vanta/dist/vanta.fog.min')
            .then(FOG => {
                if (backgroundRef.current) {
                    const _vantaEffect = FOG.default({
                        el: backgroundRef.current,
                        // mouseControls: true,
                        // touchControls: true,
                        // gyroControls: false,
                        // highlightColor: 0x1e87f0,
                        // midtoneColor: 0x04152e,
                        // lowlightColor: 0x2c1b57,
                        // baseColor: 0x2d1748,
                        // blurFactor: 0.55,
                        // speed: 1.5,
                        // zoom: 0.65,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                    });
                    setVantaEffect(_vantaEffect);
                    setFogIsInit(_vantaEffect);

                    return () => {
                        if (vantaEffect) vantaEffect.destroy();
                    };
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={backgroundRef}
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                zIndex: -10,
                position: 'absolute',
            }}
        />
    );
};
