// app/components/MovingBoxesBackground.tsx

'use client';

import React, { useEffect, useRef } from 'react';

interface BoxType {
    half_size: number;
    x: number;
    y: number;
    r: number;
    shadow_length: number;
    color: string;
    rotate: () => void;
    draw: () => void;
    drawShadow: () => void;
    getDots: () => {
        p1: { x: number; y: number };
        p2: { x: number; y: number };
        p3: { x: number; y: number };
        p4: { x: number; y: number };
    };
}

const CanvasBG: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return; // Prevents code from running on the server

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        
        const light = { 
            x: window.innerWidth / 2, 
            y: window.innerHeight / 2 
        };
        
        const colors = ["#f5c156", "#e6616b", "#5cd3ad"];
        const boxes: BoxType[] = [];

        function resize() {
            const box = canvas.getBoundingClientRect();
            canvas.width = box.width;
            canvas.height = box.height;
            // light.x = box.width / 2;
            // light.y = box.height / 2;
        }

        class Box implements BoxType {
            half_size = Math.floor((Math.random() * 50) + 1);
            x = Math.floor((Math.random() * canvas.width) + 1);
            y = Math.floor((Math.random() * canvas.height) + 1);
            r = Math.random() * Math.PI;
            shadow_length = 2000;
            color = colors[Math.floor((Math.random() * colors.length))];
          
            getDots() {
                const full = (Math.PI * 2) / 4;
                const p1 = { x: this.x + this.half_size * Math.sin(this.r), y: this.y + this.half_size * Math.cos(this.r) };
                const p2 = { x: this.x + this.half_size * Math.sin(this.r + full), y: this.y + this.half_size * Math.cos(this.r + full) };
                const p3 = { x: this.x + this.half_size * Math.sin(this.r + full * 2), y: this.y + this.half_size * Math.cos(this.r + full * 2) };
                const p4 = { x: this.x + this.half_size * Math.sin(this.r + full * 3), y: this.y + this.half_size * Math.cos(this.r + full * 3) };
                
                return { p1, p2, p3, p4 };
            }
          
            rotate() {
                const speed = (60 - this.half_size) / 20;
                this.r += speed * 0.002;
                this.x += speed;
                this.y += speed;

                if (this.x - this.half_size > canvas.width) this.x = -this.half_size;
                if (this.y - this.half_size > canvas.height) this.y = -this.half_size;
            }
          
            draw() {
                const dots = this.getDots();
                ctx.beginPath();
                ctx.moveTo(dots.p1.x, dots.p1.y);
                ctx.lineTo(dots.p2.x, dots.p2.y);
                ctx.lineTo(dots.p3.x, dots.p3.y);
                ctx.lineTo(dots.p4.x, dots.p4.y);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            drawShadow() {
                const dots = this.getDots();
                const dotKeys = Object.keys(dots) as Array<keyof typeof dots>;
                
                ctx.fillStyle = "#1a1a2e";  // Dark shadow color for visibility
                ctx.globalAlpha = 0.4;      // Semi-transparent shadows
            
                // Draw shadow for each corner of the box
                dotKeys.forEach((key, index) => {
                    const currentDot = dots[key];
                    const nextDot = dots[dotKeys[(index + 1) % dotKeys.length]];  // Next corner in clockwise direction
            
                    // Calculate shadow endpoints for both points of the current edge
                    const angle1 = Math.atan2(currentDot.y - light.y, currentDot.x - light.x);
                    const angle2 = Math.atan2(nextDot.y - light.y, nextDot.x - light.x);
            
                    const endX1 = currentDot.x + this.shadow_length * Math.cos(angle1);
                    const endY1 = currentDot.y + this.shadow_length * Math.sin(angle1);
                    const endX2 = nextDot.x + this.shadow_length * Math.cos(angle2);
                    const endY2 = nextDot.y + this.shadow_length * Math.sin(angle2);
            
                    // Draw the shadow polygon for this edge
                    ctx.beginPath();
                    ctx.moveTo(currentDot.x, currentDot.y);
                    ctx.lineTo(endX1, endY1);
                    ctx.lineTo(endX2, endY2);
                    ctx.lineTo(nextDot.x, nextDot.y);
                    ctx.closePath();
                    ctx.fill();
                });
            
                ctx.globalAlpha = 1;  // Reset alpha back to normal
            }
        }

        function drawLight() {
            ctx.beginPath();
            ctx.arc(light.x, light.y, 5000, 0, 2 * Math.PI);
            const gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5000);
            gradient.addColorStop(0, "#3b4654");
            gradient.addColorStop(1, "#2c343f");
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(light.x, light.y, 25, 0, 2 * Math.PI);
            const smallGradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 25);
            smallGradient.addColorStop(0, "#fff");
            smallGradient.addColorStop(1, "#3b4654");
            ctx.fillStyle = smallGradient;
            ctx.fill();
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawLight();

            boxes.forEach(box => {
                box.rotate();
                box.drawShadow();
                box.draw();
            });

            requestAnimationFrame(draw);
        }

        function createBoxes() {
            while (boxes.length < 14) {
                boxes.push(new Box());
            }
        }

        resize();
        createBoxes();
        draw();

        window.addEventListener('resize', resize);

        // Add Mouse Movement Event to Track Light Position
        document.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            light.x = e.clientX - rect.left;
            light.y = e.clientY - rect.top;
        });

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('mousemove', () => {});
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            id="canvas" 
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default CanvasBG;
