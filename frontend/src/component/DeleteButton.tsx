import { Button } from "antd"
import { t } from "i18next"
const DeleteButton: React.FC<{ onClick: () => any, moreClasses?: string }> = (props) => {
    return (
        <Button key="Delete" className={`bg-soby-red px-6 py-1 text-white ${props.moreClasses}`} onClick={() => props.onClick()}>
            {`${t("Delete")}`}
        </Button>
    )
}

export default DeleteButton