import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const images = [
    "/images/image.png",
    "/images/image1.png",
    "/images/brand3.png",
    "/images/wristband.png",
];

const CardsSection = ({ image, isDarkened }) => {
    const brightness = isDarkened ? 0.7 : 1; // Darken if isDarkened is true

    return (
        <motion.div
            className="h-screen flex items-start justify-center card-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                position: "sticky",
                top: 0,
                filter: `brightness(${brightness})`,
                transition: "filter 0.5s ease-in-out",
            }}
        >
            <img
                src={image}
                className="rounded-2xl shadow-md object-cover"
            />
        </motion.div>
    );
};

export default function cards() {
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".card-section");
            let activeIndex = 0;

            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();

                // Check if the top of the section is entering the viewport
                if (rect.top >= 0 && rect.top < window.innerHeight) {
                    activeIndex = index;
                }
            });

            setCurrentSection(activeIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            {images.map((image, index) => (
                <CardsSection
                    key={index}
                    image={image}
                    isDarkened={index < currentSection} // Darken sections before the current one
                />
            ))}
        </div>
    );
};