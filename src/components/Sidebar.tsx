import { SidebarProps } from "@/types";
import Link from "next/link";

const sideBarContent = [
    {
        title: "Introduction",
        id: "introduction",
    },
    {
        title: "Summary (TL;DR)",
        id: "summary",
    },
    {
        title: "What is BIO-S?",
        id: "what-is-bios",
        subSections: [
            {
                title: "Brief history of BIO-S",
                id: "brief-history-of-bios",
            },
            {
                title: "Meet the founder - Adarsh Dubey",
                id: "meet-the-founder",
            },
        ],
    },
    {
        title: "Join Us!",
        id: "join-us",
        subSections: [
            {
                title: "Who am I looking for?",
                id: "who-am-i-looking-for",
            },
            {
                title: "Benefits of joining BIO-S",
                id: "benefits",
            },
            {
                title: "Future plans",
                id: "future-plans",
            },
        ],
    },
    {
        title: "Connect with us",
        id: "connect-with-us",
    },
];

const Sidebar = ({ className, ...props }: SidebarProps) => {
    return (
        <aside className={`sidebar ${className}`} {...props}>
            <ul>
                {sideBarContent.map((section) => (
                    <li key={section.id}>
                        <Link href={`#${section.id}`}>{section.title}</Link>
                        {section.subSections && (
                            <ul>
                                {section.subSections.map((subSection) => (
                                    <li key={subSection.id}>
                                        <Link href={`#${subSection.id}`}>
                                            {subSection.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
