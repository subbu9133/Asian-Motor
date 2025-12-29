import React, { useRef, useEffect, useState } from 'react';

interface GreenScreenImageProps {
    src: string;
    alt: string;
    className?: string;
    tolerance?: number; // 0 to 255, how "green" a pixel needs to be
}

const GreenScreenImage: React.FC<GreenScreenImageProps> = ({ src, alt, className, tolerance = 100 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.crossOrigin = "Anonymous"; // Helpful if dealing with CORS, though strictly local here

        image.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Set canvas size to match image
            canvas.width = image.width;
            canvas.height = image.height;

            // Draw image
            ctx.drawImage(image, 0, 0);

            // Get image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Loop through pixels
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                // r, g, b, a (i+3)

                // Simple Green Screen Algorithm
                // If Green is dominantly larger than Red and Blue
                if (g > r + tolerance && g > b + tolerance) {
                    // Make transparent
                    data[i + 3] = 0;
                }

                // Alternative: if (g > 100 && r < 100 && b < 100) ...
            }

            // Put image data back
            ctx.putImageData(imageData, 0, 0);
            setIsLoaded(true);
        };
    }, [src, tolerance]);

    return (
        <canvas
            ref={canvasRef}
            className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            title={alt}
        />
    );
};

export default GreenScreenImage;
