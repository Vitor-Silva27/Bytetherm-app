import { useGetAllRooms } from '@/modules/room/hooks/useGetAllRooms';
import { Loading } from '@/shared/components/loading/loading';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from './styles';
import EntityCard from '@/shared/components/entityCard/EntityCard';
import { LinkButton } from '@/shared/components/linkButton/LinkButton';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/shared/styles/colors';

export function RoomsScreen() {
      const { data, isLoading, isFetching, refetch, error } = useGetAllRooms();
  
      if (isLoading) {
          return <Loading />;
      }
  return (
    <View style={styles.container}>
                <Image source={require("@assets/logo.png")} style={styles.image} />
                <View style={styles.roomsContainer}>
                    <View style={styles.header}>
                        <Text style={styles.text}>All Rooms</Text>
                        <LinkButton text="Add Room" to='/add-room' icon={<Ionicons name="add" size={18} color={colors.primary} />} />
                    </View>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item._id}
                        refreshing={isFetching}
                        onRefresh={refetch}
                        renderItem={({ item }) => (
                           <EntityCard title={item.name} info={[
                            { label: "Microcontroller ID", value: item.microcontrollerId },
                            { label: "Temperature Range", value: `${item.minTemperature}°C - ${item.maxTemperature}°C` },
                            { label: "Humidity Range", value: `${item.minHumidity}% - ${item.maxHumidity}%` }
                           ]} />
                        )}
                    />
                </View>
            </View>
  );
}