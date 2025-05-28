import React from "react";
import image1 from "../assets/hero.png";
import image2 from "../assets/hero2.avif";
import image3 from "../assets/hero5.jpg";
import landingImage from "../assets/hero.png"; // ← your landing image
import StoryBlock from "../Component/StoryBlock";

const About = () => {
    return (
        <div className="">
            <div className="w-full h-[40rem] relative mb-12">
                <img
                    src={landingImage}
                    alt="About Landing"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-10  flex flex-col items-center justify-center text-white text-center px-4"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
                    }}
                >
                    <h1 className="text-2xl md:text-4xl font-semibold mb-2 uppercase">About Us</h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        Discover the stories behind the impact – from the farms to the frontlines.
                    </p>
                </div>
            </div>
            {/* 🔹 Story Blocks */}
            <div className="pb-16 max-w-[100rem] mx-auto ">
                <StoryBlock
                    title="Agriculture Leader: Stories of Impact. Tales of Courage."
                    description="Told through the lens of Mastercard Foundation Scholars and Alumni, these stories speak about the power of education as a tool for transformative change in the world."
                    image={image1}
                />
                <StoryBlock
                    title="Quality Standards: Everyone Has a Story"
                    description="Watch three inspirational stories of front-line workers who helped shift the vaccine stigma during the pandemic."
                    image={image2}
                    reverse
                />
                <StoryBlock
                    title="Organic Services: Everyone Has a Story"
                    description="Watch three inspirational stories of front-line workers who helped shift the vaccine stigma during the pandemic."
                    image={image3}
                />
            </div>
        </div>
    );
};

export default About;

