import { Space, Table, Tag } from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import { useDeleteNetworkPlayListMutation } from '../../../redux/api/networkPageApi/networkPlayListApi';
import EditPlayListModal from './EditPlayListModal';
import ContentSliderModal from '../../home/sliderHeroMng/ContentSliderModal';





const PlayListsTable: React.FC<{ playlistsData: any[] }> = (props) => {
    const [deletePlayList, { isLoading }] = useDeleteNetworkPlayListMutation();

    const columns: any[] = [
        {
            title: "Image",
            dataIndex: "image",
            render: (text: any) => {
                return <img src={text} className='w-[50px]  mx-auto' alt='' />;
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
            title: <TextEnAr t1={'Title'} t2={'English'} />,
            dataIndex: "title_en",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Title'} t2={'Arabic'} />,
            dataIndex: "title_ar",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Sub Title'} t2={'English'} />,
            dataIndex: "subtitle_en",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Sub Title'} t2={'Arabic'} />,
            dataIndex: "subtitle_ar",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },

        {
            title: "Content",
            dataIndex: "",
            width: "5%",
            render: (record: any) => {
                return <>
                    <ContentSliderModal contents={record?.content?.map((c: any) => {
                        return {
                            ...c, key: c?.content_en
                        }
                    })} />
                </>;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "10%",
            render: (record: any) => {
                return <Space className="flex flex-col justify-center gap-y-3">
                    <EditPlayListModal playlistData={record} />
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deletePlayList({ playlist_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Playlist'} isLoading={isLoading} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.playlistsData} bordered />
    )
}

export default PlayListsTable