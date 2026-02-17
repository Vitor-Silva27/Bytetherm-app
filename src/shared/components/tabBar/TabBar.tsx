import { View, Platform } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { styles } from './styles';
import { colors } from '@/shared/styles/colors';

export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { buildHref } = useLinkBuilder();

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={route.key}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <View style={isFocused ? styles.selectedLabelWrapper : styles.labelWrapper}>
                            {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: isFocused ? colors.white : colors.gray_500, size: 24 })}

                            {isFocused && (
                                typeof label === 'function' ? (
                                    label({
                                        focused: true,
                                        color: colors.white,
                                        position: 'beside-icon',
                                        children: route.name,
                                    })
                                ) : (
                                    <Text style={styles.label}>
                                        {label}
                                    </Text>
                                )
                            )}

                        </View>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}