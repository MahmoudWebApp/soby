import TitlePageAdmin from '../../../component/TitlePageAdmin'
import { Collapse, Spin } from 'antd';
import { useGetAllLessonsQuery } from '../../../redux/api/brandingPageApi/lessonsBrandingApi';
import LessonCardOneMng from './LessonCardOneMng';
import LessonCardTwoMng from './LessonCardTwoMng';
import LessonCardThreeMng from './LessonCardThreeMng';
import LessonCardFourMng from './LessonCardFourMng';
import LessonCardFiveMng from './LessonCardFiveMng';
import LessonCardSixMng from './LessonCardSixMng';
import LessonCardSevenMng from './LessonCardSevenMng';
import LessonCardEightMng from './LessonCardEightMng';
import LessonCardNineMng from './LessonCardNineMng';
import LessonCardTenMng from './LessonCardTenMng';


const LessonsBrandingMng = () => {
    const { lessons, isLoadingData, } = useGetAllLessonsQuery<{ lessons: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            lessons: data?.data[0],
            isLoadingData: isLoading
        }),
    });


    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Lessons"} />
            <Spin spinning={isLoadingData}>
                <Collapse defaultActiveKey={['1']} style={{ marginTop: "2rem" }}accordion>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson One</div></>} key="1">
                        <LessonCardOneMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Two</div></>} key="2">
                        <LessonCardTwoMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Three</div></>} key="3">
                        <LessonCardThreeMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Four</div></>} key="4">
                        <LessonCardFourMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Five</div></>} key="5">
                        <LessonCardFiveMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Six</div></>} key="6">
                        <LessonCardSixMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Seven</div></>} key="7">
                        <LessonCardSevenMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Eight</div></>} key="8">
                        <LessonCardEightMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Nine</div></>} key="9">
                        <LessonCardNineMng lessons={lessons} />
                    </Collapse.Panel>
                    <Collapse.Panel header={<><div className="text-soby-gray-blue-gray font-semibold text-xl">Lesson Ten</div></>} key="10">
                        <LessonCardTenMng lessons={lessons} />
                    </Collapse.Panel>
                </Collapse>;
                <div className="flex flex-col gap-y-6 mt-3">

                </div>
            </Spin>
        </div>
    )
}

export default LessonsBrandingMng