import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ name, title, description, imgUrl, bgColor, socialLinks }) => {
    return (
        <div
            className={`grid grid-cols-12 h-60 rounded-xl overflow-hidden bg-[#e2dfd2]`}
        >
            <div
                className={`col-span-5 relative overflow-hidden pt-4 ${bgColor}`}
            >
                <img src={imgUrl} alt="" className="object-contain w-full h-full" />
            </div>
            <div className="col-span-7 flex flex-col md:space-y-2 space-y-2 p-3">
                <h3 className="text-2xl md:text-4xl text-black font-bold font-serif">{name}</h3>
                <p className="text-black/80 text-lg md:text-2xl">{title}</p>
                <p className="text-black/80 text-base md:text-xl">{description}</p>
                <div className="flex space-x-4 ">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black/80 text-3xl md:text-4xl hover:text-black/80"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Guy Hawkins",
            title: "Creative Art Director",
            description:
                "It's a crucial role in developing the visual style and aesthetics of various media projects.",
            imgUrl: "https://www.nicepng.com/png/full/7-78595_businessman-png.png",
            bgColor: "bg-orange-400",
            socialLinks: [
                { url: "https://facebook.com", icon: <FaFacebook /> },
                { url: "https://instagram.com", icon: <FaInstagram /> },
                { url: "https://linkedin.com", icon: <FaLinkedin /> },
            ],
        },
        {
            name: "Jenny Wilson",
            title: "Lead UI/UX Designer",
            description:
                "It's a crucial role in developing the visual style and aesthetics of various media projects.",
            imgUrl: "https://www.nicepng.com/png/full/7-78595_businessman-png.png",
            bgColor: "bg-gray-400",
            socialLinks: [
                { url: "https://facebook.com", icon: <FaFacebook /> },
                { url: "https://instagram.com", icon: <FaInstagram /> },
                { url: "https://linkedin.com", icon: <FaLinkedin /> },
            ],
        },
    ];

    return (
        <div className="md:p-12 p-6 ">
            <h2 className="md:text-5xl text-3xl text-black font-bold md:text-center mb-8 font-mango">Our Creative Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
