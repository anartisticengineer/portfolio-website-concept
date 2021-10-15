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

export type FullSeriesContentProps = {
    'series-name': string,
    'artworks': ArtworkProps[]
}

export type SeriesCardProps = {
    name: string,
    previewPieceUrl: string,
}

export type SMLinkProps = {
    url: string,
    label: string,
}

export type EffectHookFunctions = {
    onStart: (event?: any) => void,
    onEnd: (event?: any) => void
}
