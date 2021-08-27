/* eslint-disable no-unused-vars */
import HandlerFunc from './handlertypes';

interface Button {
    classes: string | string[] | void,
    id: string | undefined,
    isSubmit: boolean,
    isDisabled: boolean,
}

interface InputField {
    labelId: string,
    inputId: string,
    inputType: string | undefined,
    placeholder: string,
    isRequired: boolean,
}

export type ButtonProps = Button & HandlerFunc;

export type InputFieldProps = InputField & HandlerFunc;

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
