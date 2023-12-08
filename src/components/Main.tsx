import { MainProps } from "@/types";

const Main = ({ className, ...props }: MainProps) => {
    return (
        <div className={`content ${className}`} {...props}>
            <h1>Join the Crew!</h1>
            <h2 id='introduction'>Introduction</h2>
            <p>Some text here</p>
            <h3 id='what-is-bios'>What is BIO-S?</h3>
            <p>some text here</p>
            <h3 id='brief-history-of-bios'>Brief history of BIO-S</h3>
            <p>some text here</p>
            <p>some text here</p>
            <h3 id='meet-the-founder'>Meet the founder - Adarsh Dubey</h3>
            <p>some text here</p>
            <h2 id='why-bios'>Why BIO-S?</h2>
            <h3 id='advocating-open-source'>Advocating open source</h3>
            <p>some text here</p>
            <h3 id='embracing-community-culture'>
                Embracing community culture
            </h3>
            <p>some text here</p>
            <h3 id='vision-behind-bios'>Vision behind BIO-S</h3>
            <p>some text here</p>
            <h2 id='join-us'>Join Us!</h2>
            <h3 id='who-am-i-looking-for'>Who am I looking for?</h3>
            <p>some text here</p>
            <h3 id='benefits'>Benefits of joining BIO-S</h3>
            <p>some text here</p>
            <h3 id='future-plans'>Future plans</h3>
            <p>some text here</p>
            <h2 id='connect-with-us'>Connect with us</h2>
            <p>some text here</p>
            <h2 id='tldr'>TL;DR</h2>
            <p>some text</p>
        </div>
    );
};

export default Main;
