import React, { useState, useEffect } from "react";

const CardsSection = ({ image, isDarkened }) => {
    const brightness = isDarkened ? 0.7 : 1;

    return (
        <div
            className="flex items-center justify-center card-section p-4"
            style={{
                position: "sticky",
                top: 0,
                filter: `brightness(${brightness})`,
                transition: "filter 0.5s ease-in-out",
            }}
        >
            <div 
                className="w-full mx-auto opacity-0 translate-y-12"
                style={{
                    animation: "fadeInUp 0.8s forwards",
                }}
            >
                <img
                    src={image}
                    className="rounded-2xl object-cover w-full h-auto"
                    alt="Card image"
                />
            </div>
        </div>
    );
};

export default function Cards() {
    const [currentSection, setCurrentSection] = useState(0);
    const [images, setImages] = useState([
        "/images/image.webp",
        "/images/image1.webp",
        "/images/brand3.webp",
        "/images/wristband.webp",
    ]);

    useEffect(() => {
        // Add CSS animation for fade-in effect
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.append(style);

        const handleScroll = () => {
            const sections = document.querySelectorAll(".card-section");
            let activeIndex = 0;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();

                // More reliable intersection detection
                const sectionHeight = section.offsetHeight;
                const isVisible = 
                    (rect.top <= window.innerHeight / 2) && 
                    (rect.bottom >= window.innerHeight / 2);

                if (isVisible) {
                    activeIndex = index;
                }
            });

            setCurrentSection(activeIndex);
        };

        // Initial call to set the correct section on page load
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        
        // Handle resize events to adjust layout if needed
        const handleResize = () => {
            handleScroll();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="relative">
            {images.map((image, index) => (
                <CardsSection
                    key={index}
                    image={image}
                    isDarkened={index < currentSection}
                />
            ))}
        </div>
    );
}