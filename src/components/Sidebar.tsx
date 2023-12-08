import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Sidebar = ({ className, ...props }: SidebarProps) => {
    return (
        <aside className={`sidebar ${className}`} {...props}>
            <ul>
                <li>
                    <Link href='#introduction'>Introduction</Link>
                    <ul>
                        <li>
                            <Link href='#what-is-bios'>What is BIO-S?</Link>
                        </li>
                        <li>
                            <Link href='#brief-history-of-bios'>
                                Brief history of BIO-S
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
