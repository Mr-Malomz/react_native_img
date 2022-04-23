import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://res.cloudinary.com/dtgbzmpca/image/upload/v1650673639/photo-1492144534655-ae79c964c9d7.jpg',
          }}
        />
        <Text style={styles.textPrimary}>Daniel James</Text>
        <Text>Software Engineer</Text>
      </View>
      <View>
        <Text style={styles.textSecondary}>Gallery</Text>
        <Image
          style={styles.galleryPrimary}
          source={{
            uri: 'https://res.cloudinary.com/dtgbzmpca/image/upload/v1650673655/photo-1494976388531-d1058494cdd8.jpg',
          }}
        />
        <View style={styles.galleryFlex}>
          <Image
            style={styles.gallerySecondary}
            source={{
              uri: 'https://res.cloudinary.com/dtgbzmpca/image/upload/v1650673670/photo-1583121274602-3e2820c69888.jpg',
            }}
          />
          <Image
            style={styles.gallerySecondary}
            source={{
              uri: 'https://res.cloudinary.com/dtgbzmpca/image/upload/v1650673687/photo-1503376780353-7e6692767b70.jpg',
            }}
          />
        </View>
      </View>
    </View>
  );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  flex: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },

  avatar: {
    height: 60,
    width: 60,
    borderRadius: 1000,
    marginBottom: 10,
  },

  textPrimary: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  textSecondary: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  galleryFlex: {
    flexDirection: 'row',
  },

  galleryPrimary: {
    height: 120,
    width: '100%',
    resizeMode: 'cover',
    margin: 2,
  },

  gallerySecondary: {
    height: 120,
    width: '50%',
    resizeMode: 'cover',
    margin: 2,
  },
});
