/* eslint-disable no-unused-vars */
// import HandlerFunc from './handlertypes';

interface Button {
  classes?: string | string[];
  id: string | undefined;
  isSubmit: boolean;
  isDisabled: boolean;
  children: any;
}

interface InputField {
  labelId: string;
  inputId: string;
  placeholder: string;
  isRequired: boolean;
  inputType?: string;
  children: any;
}

interface Handler {
  onClickFcn?: () => any;
  onChangeFcn?: (event: any) => void;
}

export type ButtonProps = Button & Handler;

export type InputFieldProps = InputField & Handler;

export type ArtworkProps = {
  name: string;
  url: string;
};

export type FullSeriesContentProps = {
  'series-name': string;
  artworks: ArtworkProps[];
};

export type SeriesCardProps = {
  name: string;
  previewPieceUrl: string;
};

export type SMLinkProps = {
  url: string;
  label: string;
  children: any;
};

export type EffectHookFunctions = {
  onStart: (event?: any) => void;
  onEnd: (event?: any) => void;
};
