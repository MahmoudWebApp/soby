import { Button, Popconfirm } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons';
import './index.css'

const PopconfirmDelete: React.FC<{ onConfirm: () => any; title: string; isLoading: boolean }> = (props) => {
    return (
        <Popconfirm
            className='popconfirm-component'
            title={props.title}
            description="Are you sure?"
            okText="Yes"
            cancelText="No"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            okButtonProps={{ loading: props.isLoading , className:"btn-ok"}}
            cancelButtonProps={{className:"btn-cancel"}}
            onConfirm={props.onConfirm}
        >

            <Button className='bg-soby-red px-6 py-1 text-white' >Delete</Button>

        </Popconfirm>
    )
}

export default PopconfirmDelete