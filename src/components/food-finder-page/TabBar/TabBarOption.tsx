import * as React from "react"
const TabBarOption: React.FC<{
    selected: boolean;
    name: string;
    handleClick: (option: string) => void;
}> = (props) => {
    return (
        <button onClick={() => {
            props.handleClick(props.name)
        }} className={`rounded-lg p-3 py-1 ${props.selected ? "bg-[#0ACF83] hover:bg-[#0CAF70] text-white" : "bg-zinc-200 hover:bg-zinc-300"} mr-1 mt-2 transition-all shadow-md`}>
            <p className={"font-Inter"} > { props.name }</p>
        </button >
    );
}
export default TabBarOption