import Link from "next/link";
import Image from "next/image";
import { MainProps } from "@/types";

import {
    adarshImage1,
    adarshImage2,
    ghwImage1,
    ghwImage2,
    initativeImage,
    connectImage,
    rolesImage,
} from "@/assets";

const Main = ({ className, ...props }: MainProps) => {
    return (
        <div className={`content ${className}`} {...props}>
            <h1>Join the Crew!</h1>
            <h2 id='introduction'>Introduction</h2>
            <p>
                Heyy there! Welcome to the first ever page of BIO-S Community!
                It’s me, Adarsh. Who am I? We’ll get to that part later.
            </p>
            <p>
                This web page is all about the recruitment BIO-S is conducting.
                We have a whole lot of information on this page, basically
                everything you need to know before deciding if you want to fill
                the application form or not. The link to apply is at the top
                right of the page, or you can visit{" "}
                <Link
                    href='https://tally.so/r/mVzBrJ'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    https://tally.so/r/mVzBrJ
                </Link>
                .
            </p>
            <p className='note'>
                Note: This page and form are for folks who want to join the
                BIO-S Community as a team member. If you want to join as a
                community member, there’s no page/form. Just join our WhatsApp
                community or Discord server and you’re in!
            </p>
            <Image
                src={initativeImage}
                alt='Initiative by BIO-S'
                className='max-w-lg mx-auto my-5 w-full rounded-md'
            />
            <h2 id='summary'>Summary (TL;DR)</h2>
            <p>
                Adarsh introduces BIO-S Community, a student-led open-source
                community promoting technology and community culture. Founded in
                November 2022, BIO-S aims to include individuals of all
                backgrounds and interests. Adarsh, the founder, shares his
                journey and achievements, emphasizing BIO-S's commitment to open
                source, community, and diversity.
            </p>
            <p>
                Recruitment is open for various roles: Core Team, Development
                Team, and Social Media Team. No specific skills required;
                passion for tech and open source is key. Benefits include
                learning, collaboration, and future opportunities. BIO-S plans
                monthly meetups, online sessions, hackathons, and more. Join the
                community through WhatsApp, Discord, or the provided link.
            </p>
            <p>
                In summary, BIO-S is a diverse, volunteer-driven community
                fostering collaboration, learning, and growth in the tech and
                open-source space.
            </p>
            <h2 id='what-is-bios'>What is BIO-S?</h2>
            <p>
                BIO-S is a student-led community that promotes open source and
                community culture in Nashik and globally. We also advocate for
                various other initiatives such as hackathons, learning in
                public, building in public, and more.
            </p>
            <p>
                Founded in November 2022, BIO-S has been dedicated to spreading
                awareness about the aforementioned activities and encouraging
                more individuals to engage in open source projects.
            </p>
            <p>
                The vision behind BIO-S is straightforward: to promote open
                source and community culture, particularly among those who are
                new to communities. Regardless of your background, interests, or
                location, if you're passionate about technology and related
                domains, I'd love for you to be a part of this community.
            </p>
            <h3 id='brief-history-of-bios'>Brief history of BIO-S</h3>
            <p>
                When I began coding, I wished for a community that could guide
                me whenever I was stuck and help me overcome all the hindrances
                I faced. After joining college, I found many individuals
                reaching out to me for assistance, which inspired me to start a
                community where anyone and everyone can freely ask for help.
            </p>
            <p>
                Another reason for founding BIO-S was that I realized many girls
                or students from non-tech backgrounds were hesitant to even
                start in tech. After talking to such individuals and observing
                their interest, I decided to create a space where people feel
                included not based on their gender or background, but on their
                shared interests.
            </p>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                <Image
                    src={ghwImage2}
                    alt='GHW Event Image'
                    className='rounded-md'
                />
                <Image
                    src={ghwImage1}
                    alt='GHW Event Image'
                    className='rounded-md'
                />
            </div>
            <p>
                Now, talking about what BIO-S has accomplished, here are a few
                things I want to highlight.
            </p>
            <ul>
                <li>Organized a session on Open Source and Hackathons.</li>
                <li>Participated in MLH: Global Hack Week as a guild.</li>
                <li>
                    Started an online campaign, #100DaysOfCodeBIOS, and
                    motivated a lot of folks to start coding.
                </li>
                <li>
                    Participated as community partners in various online/offline
                    events and hackathons.
                </li>
            </ul>
            <p>
                This list is actually exhaustive. One of the major reasons for
                having more members is that we can host more of such events.
            </p>
            <h3 id='meet-the-founder'>Meet the founder — Adarsh Dubey</h3>
            <p>
                Hey there! I’m Adarsh Dubey, the founder and leader of the BIO-S
                Community. I have been involved with communities like WeMakeDevs
                and Geek Around Community for quite some time now, learning
                about teamwork, community management, and how to assist people
                through community engagement. I’m a full-stack web developer, a
                machine learning enthusiast, and a UX designer.
            </p>
            <p>
                In addition to that, I am also a freelancer, having worked as a
                freelance web designer and web developer for a couple of years
                now. Here’s{" "}
                <Link
                    href='https://adarshdubey.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    my portfolio
                </Link>{" "}
                in case you want to take a look. Let me know what you think
                about it—I’d love some feedback.
            </p>
            <p>
                I am very passionate about open source and communities, and I
                have been an advocate for the same for quite some time now. With
                the same vision, I started BIO-S, and for the same reason, I am
                expanding the team.
            </p>
            <p>
                You can connect with me on{" "}
                <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://twitter.com/inclinedadarsh'
                >
                    Twitter
                </Link>
                , and you can reach me at{" "}
                <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href='mailto:dubeyadarshmain@gmail.com'
                >
                    dubeyadarshmain@gmail.com
                </Link>
                .
            </p>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                <Image
                    src={adarshImage1}
                    alt="Adarsh Dubey's image"
                    className='rounded-md'
                />
                <Image
                    src={adarshImage2}
                    alt="Adarsh Dubey's image"
                    className='rounded-md'
                />
            </div>
            <h2 id='join-us'>Join Us!</h2>
            <h3 id='who-am-i-looking-for'>Who am I looking for?</h3>
            <p className='important'>
                Let’s make it clear, I’m looking for someone who’s passionate
                about tech and open source. That’s all, quite literally.
            </p>
            <p>
                Even though I have listed some roles below, it doesn’t mean that
                you’ll be sticking to that role forever. My idea of having a
                team is that everyone gets to work on what they like, so if you
                want to work on something else, you’re more than welcome.
            </p>
            <p className='note'>
                If you’re interested in more than one role, make sure to select
                all the roles you want to apply for.
            </p>
            <h4>Core Team</h4>
            <p>
                So, I’m looking for some core team members who'd work alongside
                me and make decisions for BIO-S. While this role might seem
                better than all the other roles, I’ll be very skeptical when
                choosing individuals for this position. There are going to be
                2-3 folks who are finally going to be in the core team. I really
                want individuals who are passionate about open source,
                community, and growing BIO-S.
            </p>
            <h4>Development Team</h4>
            <p>
                You’ll mostly be working on code and BIO-S’ GitHub organization.
                Do you like coding or design? This is for you. No specific tech
                stack or design domain is required.
            </p>
            <h4>Social Media Team</h4>
            <p>
                If you enjoy writing and have a knack for social media, you
                should definitely join us! You'll be working on Twitter,
                YouTube, and similar platforms.
            </p>
            <h4>Base Responsibilities:</h4>
            <p>
                Although the teams will be divided based on their roles, we will
                all be working for events and special situations. I’ll be
                collaborating with all the teams. Also, being in one team
                doesn’t mean you can't work with another team; you definitely
                can!
            </p>
            <Image
                src={rolesImage}
                alt='Roles in BIO-S'
                className='max-w-lg mx-auto my-5 w-full rounded-md'
            />
            <h3 id='benefits'>Benefits of joining BIO-S</h3>
            <p>
                Below are some perks of joining BIO-S as a team member. Now,
                this list is not exhaustive and definitely doesn’t do justice to
                the growth you might experience after joining BIO-S; still, I
                have listed some perks below:
            </p>
            <ul>
                <li>Always have a team by your side.</li>
                <li>Learn how a team works.</li>
                <li>
                    Get involved in the organizing team of future meetups and
                    events.
                </li>
                <li>
                    Learn from industry leaders (I’ll be inviting some every
                    month).
                </li>
                <li>Work on what you like.</li>
                <li>Collaborate with some of the best folks in Nashik.</li>
            </ul>
            <p className='note'>
                Certificate? Stipend? Nope. This isn’t an internship or anything
                similar; it’s volunteer work. If you have some time and want to
                invest in building a community and helping others while learning
                at the same time, this is for you.
            </p>
            <h3 id='future-plans'>Future plans</h3>
            <p>
                There’s a lot coming for the BIO-S Community in the near future,
                and you'll be a part of it when you join. Some of the upcoming
                activities include:
            </p>
            <ul>
                <li>
                    Monthly meetups (still in planning; join in and let’s make
                    this happen)
                </li>
                <li>Online / Offline sessions</li>
                <li>Hackathons / Blogathons and other competitions</li>
                <li>"Roast me" sessions</li>
                <li>
                    Participation as a team (Buildspace / Global Hack Week /
                    Other hackathons )
                </li>
                <li>
                    Participation as a community partner in various hackathons
                    and events
                </li>
                <li>...and much more!</li>
            </ul>
            {/* <p>
                Also, we're planning to open a club in our college (K. K. Wagh)
                as an extension of the community, so if you’re in the same
                college, you’re in luck!
            </p> */}
            <h2 id='connect-with-us'>Connect with us</h2>
            <Image
                src={connectImage}
                alt='Connect with us'
                className='max-w-lg mx-auto my-5 w-full rounded-md'
            />
            <p>You can connect with the community in various ways.</p>
            <p>
                The main ones are joining the{" "}
                <Link
                    href='https://chat.whatsapp.com/DBYHmKyGarL1YqRx8INeu9'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    WhatsApp Community
                </Link>{" "}
                and joining the{" "}
                <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://discord.gg/ZQGRW6uCXA'
                >
                    Discord Server
                </Link>
                . In addition to that, all the methods are listed here:{" "}
                <Link
                    href='https://bento.me/bios'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    https://bento.me/bios
                </Link>
            </p>
            <p>
                Thank you for intenting to join the team. See you in the meet
                session!
            </p>
        </div>
    );
};

export default Main;
