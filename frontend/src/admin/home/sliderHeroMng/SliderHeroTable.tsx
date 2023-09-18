import { Avatar, Space, Table, Tag } from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import EditSliderHeroModal from './EditSliderHeroModal';
import DeleteButton from '../../../component/DeleteButton';




const SliderHeroTable: React.FC<{ sliderData: any[] }> = (props) => {
    const columns: any[] = [
        {
            title: "Avatar",
            dataIndex: "image",
            width: "10%",
            render: (text: any) => {
                return <Avatar size={50} src={text} shape="square" />
            },
        },
        {
            title: <TextEnAr t1={'Title'} t2={'English'} />,
            dataIndex: "title_en",
            width: "10%",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Title'} t2={'Arabic'} />,
            dataIndex: "title_ar",
            width: "10%",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'SubTitle'} t2={'English'} />,
            dataIndex: "subtitle_en",
            width: "10%",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'SubTitle'} t2={'Arabic'} />,
            dataIndex: "subtitle_ar",
            width: "10%",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Profile'} t2={'Link'} />,
            dataIndex: "profile_link",
            width: "5%",
            render: (text: any) => {
                return <>{text ? <Tag color='green'>Have Url</Tag> : <Tag color='red'>No Have Url</Tag>}</>;
            },
        },
        {
            title: <TextEnAr t1={'Videos'} t2={'Link'} />,
            dataIndex: "videos_link",
               width: "5%",
            render: (text: any) => {
                return <>{text ? <Tag color='green'>Have Url</Tag> : <Tag color='red'>No Have Url</Tag>}</>;
            },
        },
        {
            title: <TextEnAr t1={'Brochure'} t2={'Link'} />,
            dataIndex: "brochure",
               width: "5%",
            render: (text: any) => {
                return <>{text ? <Tag color='green'>Have Url</Tag> : <Tag color='red'>No Have Url</Tag>}</>;
            },
        },
        {
            title: <TextEnAr t1={'Button'} t2={'Link'} />,
            dataIndex: "link",
               width: "5%",
            render: (text: any) => {
                return <>{text ? <Tag color='green'>Have Url</Tag> : <Tag color='red'>No Have Url</Tag>}</>;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "10%",
            render: (record:any) => {
                return <Space className="flex flex-col justify-center gap-y-3">
                    <EditSliderHeroModal />
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
        <Table columns={columns} dataSource={props.sliderData} bordered />
    )
}

export default SliderHeroTable