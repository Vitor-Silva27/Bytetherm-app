import { Image, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { SignInForm } from "@/shared/types/signInForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/modules/auth/schemas/signIn";
import { TextField } from "@/shared/components/form/textField";
import { CtaButton } from "@/shared/components/ctaButton/CtaButton";
import Ionicons from '@expo/vector-icons/Ionicons';

export function SignInScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data: SignInForm) {
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Image source={require('@assets/logo.png')} style={styles.image} />
            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
                <View style={styles.formWrapper}>
                    <Text style={styles.formTitle}>Welcome back!</Text>
                    <Text style={styles.formSubtitle}>Let's log you in</Text>
                    <View style={styles.fieldsWrapper}>
                            <TextField<SignInForm>
                                control={control}
                                name="email"
                                placeholder="Email"
                                error={errors.email}
                            />

                            <TextField<SignInForm>
                                control={control}
                                name="password"
                                placeholder="Password"
                                secureTextEntry
                                error={errors.password}
                            />
                    </View>
                    <CtaButton title="Sign In" onPress={handleSubmit(onSubmit)} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}