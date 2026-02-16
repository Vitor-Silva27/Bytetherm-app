import { Controller, FieldValues } from "react-hook-form";
import { TextInput, Text, View } from "react-native";
import { TextFieldProps } from "./types";
import { styles } from "./styles";


export function TextField<T extends FieldValues>({ name, control, placeholder, secureTextEntry, error }: TextFieldProps<T>) {
    return (
        <View style={styles.container}>
        <Text style={styles.label}>{name}</Text>
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
            <TextInput
                secureTextEntry={secureTextEntry}
                style={[styles.input, error && styles.inputError]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
            )}
        />
        {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
    )
}