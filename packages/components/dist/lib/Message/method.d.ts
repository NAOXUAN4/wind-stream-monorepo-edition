import { createMessageProps, MessageInstanceType } from './type';
export declare const messageNodeInstanceId: {
    value: number;
};
export declare const createMessage: (props: createMessageProps) => void;
export declare const getLastMessageNodeInstance: () => MessageInstanceType;
export declare const getLastMessageNodeBottomOffsetById: (id: string) => any;
