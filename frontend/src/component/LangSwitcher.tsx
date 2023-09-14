import i18n from "i18next";


const LangSwitcher = () => {
    const colorAr = localStorage.getItem("lang") === "ar" ? "text-soby-yellow-light" : "text-word-dark ";
    const colorEn = localStorage.getItem("lang") === "en" ? "text-soby-yellow-light" : "text-word-dark";
    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value);
        localStorage.setItem("lang", value);
        window.location.reload();
    }

    return (
        <div className='flex flex-row   gap-x-1  cursor-pointer text-lg'>
            <span className={`${colorAr} hover:-rotate-45 rtl:hover:rotate-45 hover:scale-110 transition-all`} onClick={() => changeLanguage("ar")}>AR</span>
            <span className='bg-soby-yellow-dark h-6' style={{ width: "1px" }}></span>
            <span className={`${colorEn} hover:rotate-45 rtl:hover:-rotate-45  hover:scale-110 transition-all`} onClick={() => changeLanguage("en")}>EN</span>
        </div>
    )
}

export default LangSwitcher 