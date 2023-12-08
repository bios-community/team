import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <main className='flex view-container justify-between flex-col lg:flex-row my-6 lg:my-10'>
            <Sidebar className='w-[100%] lg:w-[25%] lg:sticky top-0 self-start mb-6 lg:mb-0' />
            <div className='lg:w-[1px] w-full h-[1px] lg:h-screen lg:sticky lg:top-0 bg-muted'></div>
            <Main className='w-[100%] lg:w-[65%]' />
        </main>
    );
}
