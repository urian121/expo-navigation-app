import { Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { products } from '@/store/products.store';

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-center font-work-medium text-lg text-gray-700">
            Producto no encontrado
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
      <Stack.Screen options={{ title: product.title }} />

      <View className="flex-1 px-6 pt-4">
        <Text className="font-work-black text-3xl text-gray-900">{product.title}</Text>

        <Text className="mt-4 font-work-black text-2xl text-primary">
          ${product.price.toFixed(2)}
        </Text>

        <Text className="mt-6 font-work-light text-base leading-6 text-gray-600">
          {product.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
