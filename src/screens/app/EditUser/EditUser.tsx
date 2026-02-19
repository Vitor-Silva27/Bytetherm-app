import { AppStackParamList } from '@/navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { styles } from './styles';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/shared/styles/colors';
import { TextField } from '@/shared/components/form/textField';
import { CtaButton } from '@/shared/components/ctaButton/CtaButton';
import { useEditUser } from '@/modules/users/hooks/useEditUser';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditUserForm, editUserSchema } from '@/modules/users/schemas/edituser';

export function EditUser() {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'editUser'>>();
    const route = useRoute<RouteProp<AppStackParamList, 'editUser'>>();
    const { mutate: editUser, isPending: isEditing } = useEditUser();

    const { userToEdit } = route.params;

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<EditUserForm>({
        resolver: zodResolver(editUserSchema),
        defaultValues: {
            name: userToEdit.name,
            email: userToEdit.email,
            role: userToEdit.role,
        },
    });

    function onSubmit(data: EditUserForm) {
        editUser({ _id: userToEdit._id, ...data }, {
            onSuccess: () => {
                navigation.goBack();
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Edit User</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={24} color={colors.gray_500} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <View style={styles.formWrapper}>

                    <TextField<EditUserForm>
                        control={control}
                        name="name"
                        placeholder="Name of the User"
                        error={errors.name}
                    />

                    <TextField<EditUserForm>
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
                        {errors.role && <Text style={styles.errorMessage}>{errors.role?.message}</Text>}
                    </View>

                    <View style={styles.footer}>
                        <CtaButton
                            title="Save Changes"
                            onPress={handleSubmit(onSubmit)}
                            disabled={isEditing}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}