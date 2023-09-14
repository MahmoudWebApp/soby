import { Dropdown, MenuProps, Space } from "antd";
import { NavLink } from "react-router-dom";
// import { DownOutlined } from '@ant-design/icons';
const ItemDropdown: React.FC<{ itemsData: any[], name: string, baseUrl: string }> = (props) => {

    const items: MenuProps['items'] = props.itemsData?.map(item => {
        return {
            key: `${item.name}`, label: (<NavLink to={`${props.baseUrl}?id=${item.id}`}> {item?.name}</NavLink>), icon: item.icon
        }
    })


    return (
        <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {props.name}
                    {/* <DownOutlined /> */}
                </Space>
            </a>
        </Dropdown>
    )
}

export default ItemDropdown