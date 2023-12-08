"use client";

import { useState } from "react";

import { Twitter, Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { Badge } from "./ui/badge";
import { NavbarProps } from "@/types";

const Navbar = ({ className, ...props }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((value) => !value);

    return (
        <div
            className={`flex justify-between items-center py-8 border-b border-b-muted relative overflow-x-clip ${className}`}
            {...props}
        >
            <div className='text-lg font-semibold flex items-center gap-4'>
                <span className=''>🚀 BIO-S Community</span>
                <Badge>Team</Badge>
            </div>
            <button
                aria-label='Menu button'
                className='lg:hidden'
                onClick={toggleMenu}
            >
                <Menu size={20} />
            </button>
            <div
                className={`absolute lg:static top-0 transition-[left] z-10 w-full lg:w-auto h-screen lg:h-fit bg-background flex flex-col lg:items-center gap-4 lg:justify-normal lg:gap-5 px-5 lg:px-0 ${
                    isOpen ? "left-0" : "left-full"
                }`}
            >
                <div className='lg:hidden flex justify-between items-center mt-8'>
                    <span className='font-medium text-lg text-primary-light'>
                        🚀 BIO-S Community
                    </span>
                    <button
                        aria-label='Menu button'
                        className='lg:hidden'
                        onClick={toggleMenu}
                    >
                        <X />
                    </button>
                </div>
                <div className='lg:ml-6 flex flex-col lg:flex-row gap-4 mt-20 lg:mt-0'>
                    <div className='flex gap-4 lg:gap-5'>
                        <ModeToggle />
                        <Link
                            href='https://twitter.com/bios_twt'
                            className={buttonVariants({
                                variant: "outline",
                                size: "icon",
                            })}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Twitter size={18} strokeWidth={1.5} />
                        </Link>
                        <Link
                            href='https://bio.link/bios'
                            className={buttonVariants({
                                variant: "outline",
                                size: "icon",
                            })}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <ExternalLink size={18} strokeWidth={1.5} />
                        </Link>
                    </div>
                    <Link
                        href='https://discord.gg/ZQGRW6uCXA'
                        className={buttonVariants({
                            variant: "outline",
                            size: "lg",
                        })}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Discord Server
                    </Link>
                    <Link
                        href='/'
                        className={buttonVariants({
                            variant: "custom",
                            size: "lg",
                        })}
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
