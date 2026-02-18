import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TextFieldProps } from "./types";
import { styles } from "./styles";
import { colors } from "@/shared/styles/colors";

export function TextField<T extends FieldValues>({
  name,
  control,
  placeholder,
  isPassword,
  error
}: TextFieldProps<T>) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
                isPassword && !isPasswordVisible
              }
              style={[
                styles.input,
                error && styles.inputError,
                isPassword && styles.inputWithIcon,
              ]}
              placeholder={placeholder}
              placeholderTextColor={"#595B5D"}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
            />
          )}
        />

        {isPassword && (
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
              color="#595B5D"
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
