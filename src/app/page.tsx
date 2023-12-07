import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <main className='flex view-container justify-between mt-10'>
            <Sidebar className='w-[25%] sticky top-0 self-start' />
            <Main className='w-[70%]' />
        </main>
    );
}
