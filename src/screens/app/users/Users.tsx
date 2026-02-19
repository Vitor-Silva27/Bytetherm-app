import { useGetAllUsers } from "@/modules/users/hooks/useGetAllUsers";
import { AppStackParamList } from "@/navigation/types";
import EntityCard from "@/shared/components/entityCard/EntityCard";
import { Loading } from "@/shared/components/loading/loading";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { LinkButton } from "@/shared/components/linkButton/LinkButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/shared/styles/colors";
import { useDeleteUser } from "@/modules/users/hooks/useDeleteUser";

export function UsersScreen() {
    const { data, isLoading, isFetching, refetch } = useGetAllUsers();
    const { mutate: deleteUser } = useDeleteUser();
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'tabs'>>();

    function handleRemoveUser(userId: string, name: string) {
        Alert.alert(
            "Confirm Deletion", 
            `Are you sure you want to delete the user "${name}"?`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => deleteUser({ userId })
                }
            ]
        );
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <View style={styles.container}>
            <Image source={require("@assets/logo.png")} style={styles.image} />
            <View style={styles.usersContainer}>
                <View style={styles.header}>
                    <Text style={styles.text}>All Users</Text>
                    <LinkButton text="Add User" to='addUser' icon={<Ionicons name="add" size={18} color={colors.primary} />} />
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    refreshing={isFetching}
                    onRefresh={refetch}
                    renderItem={({ item }) => (
                        <EntityCard 
                            title={item.name} 
                            info={[
                              { label: "email", value: item.email },
                                { label: "role", value: item.role }
                            ]} 
                            deleteAction={() => handleRemoveUser(item._id, item.name)} 
                            editAction={() => {}}
                        />
                    )}
                />
            </View>
        </View>
    );
}