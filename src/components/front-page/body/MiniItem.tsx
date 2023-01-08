import * as React from "react"

const MiniItem: React.FC<{
    icon?: React.ReactNode;
    header: string;
    text: string;
}> = (props) => {
    return (
        <div className="w-full lg:w-1/3 max-w-sm pb-0 md:pb-10 p-6 flex flex-col flex-grow flex-shrink hover:scale-105 transition-all">
            <div className="flex flex-col items-center flex-1 py-7 bg-zinc-100 rounded-2xl overflow-hidden shadow">
                <div className="flex justify-center items-center bg-[#14FFBC] w-16 h-16 rounded-full shadow-md">
                    {props.icon && (
                        props.icon
                    )}
                </div>
                <h3 className="text-center text-lg font-Inter font-bold text-[#252B42] mt-4">{props.header}</h3>
                <p className="text-center font-Inter mt-2 px-4">{props.text}</p>
            </div>
        </div>
    );
}
export default MiniItem