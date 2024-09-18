import { StyleSheet, Text, View } from 'react-native';

export default function Novo() {
  return (
    <View style={styles.container}>
     <Text style={styles.titulo}>Novo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'

  },
    container: {
      flex: 1,
      backgroundColor: '#0099CC',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
