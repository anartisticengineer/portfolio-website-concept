export type ButtonProps = {
    classes: string | string[] | void,
    id: string | undefined,
    isSubmit: boolean,
    onClickFcn: () => any
}

export type InputFieldProps = {
    labelId: string,
    inputId: string,
    inputType: string | undefined,
    placeholder: string,
    isRequired: boolean,
}
