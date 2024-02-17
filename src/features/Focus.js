import { react, useState } from 'react';
import { fontSizes, spacing } from '../utils/sizes';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState();

  console.log('HHH: ', subject);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          label="what would you dlike to focus on ?"
          onChangeText={setSubject}
        />
        <RoundedButton size={40} title="+" onPress={() => {
          addSubject(subject)
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    marginRight: spacing.md,
    flex: 1
  },
  inputContainer: {
    padding: fontSizes.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
