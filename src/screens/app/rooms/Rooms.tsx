import { useGetAllRooms } from '@/modules/room/hooks/useGetAllRooms';
import { Loading } from '@/shared/components/loading/loading';
import { FlatList, Image, Text, View, Alert } from 'react-native';
import { styles } from './styles';
import EntityCard from '@/shared/components/entityCard/EntityCard';
import { LinkButton } from '@/shared/components/linkButton/LinkButton';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/shared/styles/colors';
import { useDeleteRoom } from '@/modules/room/hooks/usedeleteRoom';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/navigation/types';

export function RoomsScreen() {
    const { data, isLoading, isFetching, refetch } = useGetAllRooms();
    const { mutate: deleteRoomMutation } = useDeleteRoom();
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'tabs'>>();

    function handleRemoveRoom(roomId: string, roomName: string) {
        Alert.alert(
            "Confirm Deletion", 
            `Are you sure you want to delete the room "${roomName}"?`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => deleteRoomMutation({ roomId }) 
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
            <View style={styles.roomsContainer}>
                <View style={styles.header}>
                    <Text style={styles.text}>All Rooms</Text>
                    <LinkButton text="Add Room" to='addRoom' icon={<Ionicons name="add" size={18} color={colors.primary} />} />
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
                                { label: "Microcontroller ID", value: item.microcontrollerId }
                            ]} 
                            deleteAction={() => handleRemoveRoom(item._id, item.name)} 
                            editAction={() => navigation.navigate('addRoom', { roomToEdit: item })}
                        />
                    )}
                />
            </View>
        </View>
    );
}