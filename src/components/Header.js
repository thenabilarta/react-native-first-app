import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffebb5',
    padding: 15,
  },
  headerTitle: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Header;
