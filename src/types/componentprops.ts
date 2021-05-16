export type ButtonProps = {
    classes: string | string[] | void,
    id: string | undefined,
    isSubmit: boolean,
    isDisabled: boolean,
    onClickFcn: () => any
}

export type InputFieldProps = {
    labelId: string,
    inputId: string,
    inputType: string | undefined,
    placeholder: string,
    isRequired: boolean,
    // eslint-disable-next-line no-unused-vars
    onChangeFcn: (event: any) => void
}

export type ArtworkProps = {
    name: string,
    url: string
}

export type SeriesProps = {
    name: string,
    associatedPieces: ArtworkProps[] | null
}
