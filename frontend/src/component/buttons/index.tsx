interface IProps {
    bgColor: string;
    textColor: string;
    title: string;
}
export const SobyBigButton: React.FC<IProps> = (props) => {
    return (
        <button className={`${props?.bgColor} rounded-3xl xl:px-16 xl:py-3 md:py-2 md:px-8  py-1 px-3`}>
            <span className={`${props?.textColor} xl:text-lg md:text-sm  text-xs `}>
                {props?.title}
            </span>
        </button>
    );
};
export const SobyButton: React.FC<IProps> = (props) => {
    return (
        <button className={`${props?.bgColor} rounded-3xl xl:px-8 xl:py-3 md:py-1 md:px-6  hover:scale-x-110 transition-transform duration-500 px-3 py-1`}>
            <span className={`${props?.textColor} xl:text-base md:text-sm text-xs`}>
                {props?.title}
            </span>
        </button>
    );
};