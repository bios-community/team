interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Sidebar = ({ className, ...props }: SidebarProps) => {
    return (
        <aside className={`${className}`} {...props}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis
            cum possimus, quae quidem eligendi dolor! Alias dolor eveniet odio?
        </aside>
    );
};

export default Sidebar;
