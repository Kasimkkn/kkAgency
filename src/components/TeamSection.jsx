import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ name, title, description, imgUrl, bgColor, socialLinks }) => {
    return (
        <div
            className={`grid grid-cols-12 h-[200px] rounded-xl bg-[#e2dfd2]`}
        >
            <div
                className={`col-span-5 relative h-full overflow-hidden ${bgColor}`}
            >
                <img src={imgUrl} alt="" />
            </div>
            <div className="col-span-7 flex flex-col space-y-2 p-3">
                <h3 className="text-xl font-bold mb-1 ">{name}</h3>
                <p className="text-gray-500 text-sm mb-3">{title}</p>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-800"
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
        <div className="p-12">
            <h2 className="text-5xl font-bold text-center mb-8">Our Creative Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
