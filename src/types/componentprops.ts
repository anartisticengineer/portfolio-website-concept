/* eslint-disable no-unused-vars */
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
    onChangeFcn: (event: any) => void
}

export type ArtworkProps = {
    name: string,
    url: string
}

export type SeriesCardProps = {
    name: string,
    searchIndex: number,
    previewPieceUrl: string
}

export type EffectHookFunctions = {
    onStart: (event?: any) => void,
    onEnd: (event?: any) => void
}
