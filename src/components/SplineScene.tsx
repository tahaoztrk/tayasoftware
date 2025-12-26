'use client';

import Spline from '@splinetool/react-spline';

export default function SplineScene() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <div className="spline-scene-inner">
                <Spline
                    scene="https://prod.spline.design/ujk0n7lFy85IIeOZ/scene.splinecode"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
}
