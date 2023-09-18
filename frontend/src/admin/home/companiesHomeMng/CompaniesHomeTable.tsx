import { Avatar, Space, Table } from 'antd';
import DeleteButton from '../../../component/DeleteButton';






const CompaniesHomeTable: React.FC<{ companiesData: any[] }> = (props) => {
    const columns: any[] = [
        {
            title: "icon",
            dataIndex: "image",
            render: (text: any) => {
                return <img src={text} className='w-full ' alt='icon'/>;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "20%",
            render: (record: any) => {
                return <Space className="flex  justify-center gap-x-3">

                    <DeleteButton onClick={async () => {
                        try {
                            console.log(record?.id);
                        } catch (err) {
                            console.log(err);

                        }

                    }} />

                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.companiesData} bordered />
    )
}

export default CompaniesHomeTable