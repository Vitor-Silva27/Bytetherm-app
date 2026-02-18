import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export type TextFieldProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T, any>;
    placeholder?: string;
    isPassword?: boolean;
    error?: FieldError;
    icon?: React.ReactNode;
}