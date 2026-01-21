import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Capsule = ({ position, rotation, color1, color2, scale = 1, floatProps }) => {
    const ref = useRef();

    useFrame(() => {
        // Add subtle continuous rotation independent of Float
        if (ref.current) {
            ref.current.rotation.x += 0.002;
            ref.current.rotation.y += 0.003;
        }
    });

    return (
        <Float {...floatProps}>
            <group ref={ref} position={position} rotation={rotation} scale={scale}>
                {/* Bottom Half */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
                    <meshStandardMaterial color={color1} roughness={0.3} metalness={0.1} />
                </mesh>
                <mesh position={[0, -1, 0]}>
                    <sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI]} />
                    <meshStandardMaterial color={color1} roughness={0.3} metalness={0.1} />
                </mesh>

                {/* Top Half */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
                    <meshStandardMaterial color={color2} roughness={0.3} metalness={0.1} />
                </mesh>
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
                    <meshStandardMaterial color={color2} roughness={0.3} metalness={0.1} />
                </mesh>
            </group>
        </Float>
    );
};

const Tablet = ({ position, rotation, color, scale = 1, floatProps }) => {
    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x += 0.003;
            ref.current.rotation.z += 0.004;
        }
    });

    return (
        <Float {...floatProps}>
            <group ref={ref} position={position} rotation={rotation} scale={scale}>
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.4, 32]} />
                    <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
                </mesh>
                {/* Line in the middle for detail */}
                <mesh position={[0, 0.21, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <boxGeometry args={[0.05, 1.8, 0.02]} />
                    <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
                </mesh>
            </group>
        </Float>
    );
};

const PALETTE = ['#22c55e', '#f97316', '#ffffff', '#e2e8f0', '#16a34a', '#ea580c'];

export const PackagingModel = () => {
    const items = useMemo(() => {
        const temp = [];
        // Generate 30 items
        for (let i = 0; i < 30; i++) {
            const isCapsule = Math.random() > 0.4;
            // Random position in a cloud
            const x = (Math.random() - 0.5) * 12; // Spread wider
            const y = (Math.random() - 0.5) * 8;
            const z = (Math.random() - 0.5) * 6; // Some depth

            // Random rotation
            const rot = [Math.random() * Math.PI, Math.random() * Math.PI, 0];

            // Random smaller scale: between 0.2 and 0.5
            const scale = 0.2 + Math.random() * 0.3;

            // Random colors
            const c1 = PALETTE[Math.floor(Math.random() * PALETTE.length)];
            const c2 = PALETTE[Math.floor(Math.random() * PALETTE.length)];

            // Random float properties to make them feel like they move in different "directions" (phases/speeds)
            const floatProps = {
                speed: 1 + Math.random() * 3, // Random speed
                rotationIntensity: 1 + Math.random() * 2, // Random rotation wobble
                floatIntensity: 1 + Math.random() * 3, // Random floating distance
                floatingRange: [-(Math.random() * 1), Math.random() * 1] // Randomize up/down range slightly
            };

            temp.push({
                isCapsule,
                position: [x, y, z],
                rotation: rot,
                scale,
                color1: c1,
                color2: c2,
                floatProps
            });
        }
        return temp;
    }, []);

    return (
        <group position={[2, 0, 0]}>
            {items.map((item, i) => (
                item.isCapsule ? (
                    <Capsule
                        key={i}
                        position={item.position}
                        rotation={item.rotation}
                        color1={item.color1}
                        color2={item.color2}
                        scale={item.scale}
                        floatProps={item.floatProps}
                    />
                ) : (
                    <Tablet
                        key={i}
                        position={item.position}
                        rotation={item.rotation}
                        color={item.color1} // Tablets usually one color
                        scale={item.scale}
                        floatProps={item.floatProps}
                    />
                )
            ))}
        </group>
    );
};
