type InfoItem = {
    label: string;
    value: string | number;
}

export type EntityCardProps = {
    title: string;
    info: InfoItem[];
    deleteAction?: () => void;
    editAction?: () => void;
}