import { NextPage } from "next";
export interface HeroHeaderProps {
    className?: string,
    children?: React.ReactNode
}

const HeroHeader: NextPage<HeroHeaderProps> = ({ className, children }) => {
    return (
        <div className={`py-32 text-black font-bold text-5xl text-center bg-[#FF9DD0] ${className}`}>
            <h1>
                {children}
            </h1>
        </div>
    )
}

"italic font-sans"

export default HeroHeader;