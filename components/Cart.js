import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

const Cart = ({ title, onPress, popularity, releaseDate, poster_path}) => {
  const fullImagePath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <SafeAreaView style={styles.general}>
      <Image style={styles.image} source={{ uri: fullImagePath }} />
      <View style={styles.card} onPress={onPress}>
        <Text>{title}</Text>
        <Text>{popularity}</Text>
        <Text>{releaseDate}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  general: {
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
  },

  button: {
    marginTop: 10,
    width: 250,
    backgroundColor: '#007BFF',
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
    height: 30,
fontSize: 5
  },
  image: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
    marginRight: 10,
  },
});

export default Cart;
