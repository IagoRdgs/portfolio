import './SkeletonAbout.style.css';

export default function SkeletonAbout() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="shimmer bg-[#3a0a31] h-[238px] w-[238px] rounded-full"></div>
            <div className="mt-7 flex flex-col space-y-6 items-center">
                <div className="shimmer bg-[#3a0a31] w-[8.12rem] h-[2.81rem] rounded-md"></div>
                <div className="shimmer bg-[#3a0a31] w-[34.12rem] h-[5.25rem] rounded-md"></div>
                <div className="flex flex-col space-y-8">
                    <div className="shimmer bg-[#3a0a31] w-[53.75rem] h-[2rem] rounded-md"></div>
                    <div className="shimmer bg-[#3a0a31] w-[53.75rem] h-[2rem] rounded-md"></div>
                    <div className="shimmer bg-[#3a0a31] w-[53.75rem] h-[2rem] rounded-md"></div>
                    <div className="shimmer bg-[#3a0a31] w-[53.75rem] h-[2rem] rounded-md"></div>
                    <div className="shimmer bg-[#3a0a31] w-[53.75rem] h-[2rem] rounded-md"></div>
                </div>
            </div>
        </section>
    );
}