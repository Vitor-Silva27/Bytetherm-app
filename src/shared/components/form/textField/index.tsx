import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TextFieldProps } from "./types";
import { styles } from "./styles";

export function TextField<T extends FieldValues>({
  name,
  control,
  placeholder,
  secureTextEntry,
  error
}: TextFieldProps<T>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = !!secureTextEntry;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>

      <View style={styles.inputWrapper}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry={
                isPasswordField && !isPasswordVisible
              }
              style={[
                styles.input,
                error && styles.inputError,
                isPasswordField && styles.inputWithIcon,
              ]}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {isPasswordField && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() =>
              setIsPasswordVisible((prev) => !prev)
            }
          >
            <Ionicons
              name={
                isPasswordVisible
                  ? "eye-off-outline"
                  : "eye-outline"
              }
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text style={styles.error}>{error.message}</Text>
      )}
    </View>
  );
}
