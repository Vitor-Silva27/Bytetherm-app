import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";
import { TextField } from "@/shared/components/form/textField";
import { CtaButton } from "@/shared/components/ctaButton/CtaButton";
import { AddRoomForm, addRoomSchema } from "@/modules/room/schemas/addRoom";
import { CreateRoomForm } from "@/shared/types/room";
import { colors } from '@/shared/styles/colors';
import { useCreateRoom } from '@/modules/room/hooks/useCreateRoom';
import { useEditRoom } from '@/modules/room/hooks/useEditRoom';
import { AppStackParamList } from '@/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export function AddRoom() {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'addRoom'>>();
    const route = useRoute<RouteProp<AppStackParamList, 'addRoom'>>();
    const {mutate: createRoom, isPending: isCreating} = useCreateRoom();
    const {mutate: editRoom, isPending: isEditingRoom} = useEditRoom();

    const roomToEdit = route.params?.roomToEdit || undefined;
    const isEditing = !!roomToEdit;

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateRoomForm>({
        resolver: zodResolver(addRoomSchema),
        defaultValues: {
            name: roomToEdit?.name || "",
            microcontrollerId: roomToEdit?.microcontrollerId || "",
        },
    });

function onSubmit(data: AddRoomForm) {
        if (isEditing) {
            editRoom({ 
                _id: roomToEdit._id, 
                ...data 
            }, {
                onSuccess: () => navigation.goBack()
            });
        } else {
            createRoom(data, {
                onSuccess: () => navigation.goBack()
            });
        }
    }

    const isLoading = isCreating || isEditingRoom;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{isEditing ? "Edit Room" : "New Room"}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={24} color={colors.gray_500} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                <View style={styles.formWrapper}>
                    
                    <TextField<CreateRoomForm>
                        control={control}
                        name="name"
                        placeholder="Name of the Room"
                        error={errors.name}
                    />

                    <TextField<CreateRoomForm>
                        control={control}
                        name="microcontrollerId"
                        placeholder="Device ID (Mac or Serial)"
                        error={errors.microcontrollerId}
                    />

                    <View style={styles.footer}>
                        <CtaButton 
                            title={isEditing ? "Save Changes" : "Create Room"} 
                            onPress={handleSubmit(onSubmit)} 
                            disabled={isLoading} 
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}