import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";
import { TextField } from "@/shared/components/form/textField";
import { CtaButton } from "@/shared/components/ctaButton/CtaButton";
import { addRoomSchema } from "@/modules/room/schemas/addRoom";
import { CreateRoomForm } from "@/shared/types/room";
import { colors } from '@/shared/styles/colors';
import { useCreateRoom } from '@/modules/room/hooks/useCreateRoom';


export function AddRoom() {
    const navigation = useNavigation();
    const {mutate, isPending} = useCreateRoom();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateRoomForm>({
        resolver: zodResolver(addRoomSchema),
        defaultValues: {
            name: "",
            microcontrollerId: "",
        },
    });

    function onSubmit(data: CreateRoomForm) {
        console.log("Submitting data:", data);

        mutate(data, {
            onSuccess: () => {
                navigation.goBack();
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Room</Text>
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
                            title="Create Room" 
                            onPress={handleSubmit(onSubmit)} 
                            disabled={isPending} 
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}