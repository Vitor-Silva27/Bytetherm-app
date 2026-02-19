import { AppStackParamList } from '@/navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { styles } from './styles';
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/shared/styles/colors';
import { TextField } from '@/shared/components/form/textField';
import { CtaButton } from '@/shared/components/ctaButton/CtaButton';
import { useForm, Controller } from 'react-hook-form';
import { AddUserForm, addUserSchema } from '@/modules/users/schemas/addUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateUser } from '@/modules/users/hooks/useCreateuser';

export function AddUser() {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'addUser'>>();
    const { mutate: createUser, isPending: isCreating } = useCreateUser();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<AddUserForm>({
        resolver: zodResolver(addUserSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "user",
            password: "",
            confirmPassword: "",
        },
    });

    function onSubmit(data: AddUserForm) {
        createUser(data, {
            onSuccess: () => navigation.goBack(),
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New User</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={24} color={colors.gray_500} />
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView behavior='padding'>

            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <View style={styles.formWrapper}>

                    <TextField<AddUserForm>
                        control={control}
                        name="name"
                        placeholder="Name of the User"
                        error={errors.name}
                    />

                    <TextField<AddUserForm>
                        control={control}
                        name="email"
                        placeholder="Email of the User"
                        error={errors.email}
                    />

                    <View style={styles.roleContainer}>
                        <Text style={styles.roleLabel}>Role</Text>
                        <Controller
                            control={control}
                            name="role"
                            render={({ field: { onChange, value } }) => (
                                <View style={styles.roleOptions}>
                                    <TouchableOpacity
                                        style={[styles.roleButton, value === 'user' && styles.roleButtonActive]}
                                        onPress={() => onChange('user')}
                                    >
                                        <Text style={[styles.roleText, value === 'user' && styles.roleTextActive]}>User</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity
                                        style={[styles.roleButton, value === 'admin' && styles.roleButtonActive]}
                                        onPress={() => onChange('admin')}
                                    >
                                        <Text style={[styles.roleText, value === 'admin' && styles.roleTextActive]}>Admin</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                        {errors.role && <Text style={styles.errorMessage}>{errors.role.message}</Text>}
                    </View>

                    <TextField<AddUserForm>
                        control={control}
                        name="password"
                        placeholder="Password"
                        error={errors.password}
                        isPassword
                    />

                    <TextField<AddUserForm>
                        control={control}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        error={errors.confirmPassword}
                        isPassword
                    />

                    <View style={styles.footer}>
                        <CtaButton
                            title="Create User"
                            onPress={handleSubmit(onSubmit)}
                            disabled={isCreating}
                        />
                    </View>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}