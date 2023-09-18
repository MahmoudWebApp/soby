import { t } from "i18next";

export const RulesName = (props: { name: string, countChar: number }) => {
    const rules: any[] = [{ required: true, message: `${props.name}  ${t("is required*")}` },
    { whitespace: true, message: `${props.name} ${t("must not be empty")} ` }, {
        max: props.countChar, message: `${props.name} ${t("must be less than")} ${props.countChar} ${t("characters.")}`
    }]
    return rules;
}

export const RulesPhone = () => {
    const rules: any[] = [{
        pattern: (/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/),
        message: `${t("Please enter valid Phone Number")}`,
    }]
    return rules
}
export const RulesEmail = () => {
    const rules: any[] = [
        {
            required: true,
            message: `${t( "E-Mail is required*")}`
        },
        {
            pattern: (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
            message: `${t("Please enter valid E-Mail")}`,
        },
    ]
    return rules
}
export const RulesRequire = (props: { filedName: string }) => {
    const rules: any[] = [{ required: true, message: `${props.filedName} ${t("is required*")}` }]
    return rules
}

export const RulesPassword = (props: { filedName: string }) => {
    const rules =
        [
            {
                required: true,
                message: `${props.filedName}  ${t("is required*")} `
            }, {
                pattern: (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/g),
                message: `${t("Use at least 6 characters including (0,9), (a-z) and (A-Z)")} `
            }

        ]

    return rules;
}

