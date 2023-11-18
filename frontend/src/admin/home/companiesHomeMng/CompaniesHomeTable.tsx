import { Space, Table } from 'antd';

import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import { useDeleteCompanyMutation } from '../../../redux/api/homePageApi/companiesHomeApi';






const CompaniesHomeTable: React.FC<{ companiesData: any[] }> = (props) => {
    const [deleteCompany, { isLoading }] = useDeleteCompanyMutation();
    const columns: any[] = [
        {
            title: "Icon",
            dataIndex: "image",
            render: (text: any) => {
                return <img src={text} className='w-[50px] mx-auto' alt='icon' />;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "20%",
            render: (record: any) => {
                return <Space className="flex  justify-center gap-x-3">

                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteCompany({ company_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Company'} isLoading={isLoading} />

                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.companiesData} bordered />
    )
}

export default CompaniesHomeTable