import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/shared/styles/colors';
import { AuthContext } from '@/providers/authProvider';
import { styles } from './styles';
import { CtaButton } from '@/shared/components/ctaButton/CtaButton';

export function ProfileScreen() {
    const { signOut, user } = useContext(AuthContext);
    

    const getInitial = (name: string) => name ? name.charAt(0).toUpperCase() : '?';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Profile</Text>


            <ScrollView>
                
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{getInitial(user?.name || '')}</Text>
                    </View>
                    <Text style={styles.userName}>{user?.name}</Text>
                    <Text style={styles.userRole}>{user?.role.toUpperCase()}</Text>
                </View>

                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Account Information</Text>
                    
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <Ionicons name="person-outline" size={20} color={colors.gray_500} />
                            <View style={styles.infoTextContainer}>
                                <Text style={styles.infoLabel}>Full Name</Text>
                                <Text style={styles.infoValue}>{user?.name}</Text>
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.infoRow}>
                            <Ionicons name="mail-outline" size={20} color={colors.gray_500} />
                            <View style={styles.infoTextContainer}>
                                <Text style={styles.infoLabel}>Email</Text>
                                <Text style={styles.infoValue}>{user?.email}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.actionSection}>
                    <CtaButton title="Logout" onPress={signOut} />
                </View>

            </ScrollView>
        </View>
    );
}