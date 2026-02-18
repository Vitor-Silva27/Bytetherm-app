import { Reading } from "@/shared/types/room";

export type DataPoint = {
    value: number;
    label?: string;
    dataPointText?: string;
    dataPointColor?: string;
    textColor?: string;
    labelTextStyle?: { color: string; width: number };
}

export type MyLineChartProps = {
    data: Reading[];
    type: 'temperature' | 'humidity';
    title: string;
}