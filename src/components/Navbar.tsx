interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Navbar = ({ className, ...props }: NavbarProps) => {
    return (
        <div className={`${className}`} {...props}>
            Navbar
        </div>
    );
};

export default Navbar;
