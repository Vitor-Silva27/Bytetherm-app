import { Text, TouchableOpacity, View } from "react-native";
import { EntityCardProps } from "./types";
import { styles } from "./styles";
import { colors } from "@/shared/styles/colors";

export default function EntityCard({ title, info, deleteAction, editAction }: EntityCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                
                <View style={styles.actions}>
                    {editAction && (
                        <TouchableOpacity onPress={editAction}>
                            <Text style={[styles.actionText, {color: colors.primary}]}>Edit</Text>
                        </TouchableOpacity>
                    )}

                    {deleteAction && (
                        <TouchableOpacity onPress={deleteAction}>
                            <Text style={[styles.actionText, {color: colors.red}]}>Delete</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            
            <View style={styles.infoList}>
                {info.map((item, index) => (
                    <View style={styles.infoItem} key={index}>
                        <Text style={styles.infoText}>{item.label}: <Text style={styles.infoValue}>{item.value}</Text></Text>
                    </View>
                ))}
            </View>
        </View>
    )
}