import { Tag } from "antd"


const TitlePageAdmin: React.FC<{ title: string }> = (props) => {
    return (
        <div className="flex justify-center">
            <Tag className="px-4 py-1 text-sm font-bold border-[#1A2442] text-[#1A2442]">
                {props.title}
            </Tag>
        </div>

    )
}

export default TitlePageAdmin