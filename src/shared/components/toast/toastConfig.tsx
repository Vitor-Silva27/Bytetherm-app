import React from 'react';
import { View, Text } from 'react-native';
import { BaseToastProps } from 'react-native-toast-message';
import { styles } from './styles';

interface CustomToastProps extends BaseToastProps {
  text1?: string;
  text2?: string;
}

const toastConfig = {
  error: ({ text1, text2 }: CustomToastProps) => (
    <View style={styles.error}>
      {text1 && (
        <Text style={styles.text}>
          {text1}
        </Text>
      )}
      {text2 && <Text style={styles.text}>{text2}</Text>}
    </View>
  ),
  success: ({ text1, text2 }: CustomToastProps) => (
    <View style={styles.success}>
      {text1 && (
        <Text style={styles.text}>
          {text1}
        </Text>
      )}
      {text2 && <Text style={styles.text}>{text2}</Text>}
    </View>
  ),
  delete: ({ text1, text2 }: CustomToastProps) => (
    <View style={styles.delete}>
      {text1 && (
        <Text style={styles.text}>
          {text1}
        </Text>
      )}
      {text2 && <Text style={styles.text}>{text2}</Text>}
    </View>
  ),
};

export default toastConfig;