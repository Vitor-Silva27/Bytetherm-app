import { Alert, Image, KeyboardAvoidingView, Text, View } from "react-native";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { SignInForm } from "@/shared/types/signIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/modules/auth/schemas/signIn";
import { TextField } from "@/shared/components/form/textField";
import { CtaButton } from "@/shared/components/ctaButton/CtaButton";
import { useSignIn } from "@/modules/auth/hooks/useSignIn";
import Toast from 'react-native-toast-message';

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

    const {mutateAsync, isPending} = useSignIn();

    async function onSubmit(data: SignInForm) {
        try {
            await mutateAsync(data);
            Toast.show({
                type: "success",
                text1: "Sign In Successful",
                text2: "Welcome back!"
            })
        } catch (error) {            
            Toast.show({
                type: "error",
                text1: "Sign In Failed",
                text2: "email or password is incorrect"
            })
        }
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
                                isPassword
                                error={errors.password}
                            />
                    </View>
                    <CtaButton title={isPending ? "Signing In..." : "Sign In"} disabled={isPending} onPress={handleSubmit(onSubmit)} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}