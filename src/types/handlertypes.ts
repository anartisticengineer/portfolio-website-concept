/* eslint-disable no-unused-vars */
interface Handler {
    onClickFcn?: () => any;
    onChangeFcn?: (event: any) => void;
}

type HandlerFunc = Handler;

export default HandlerFunc;
