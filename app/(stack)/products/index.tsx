import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Product, products } from "@/store/products.store";

const ProductsScreen = () => {
  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View className="mb-3 rounded-lg border border-gray-200 bg-white p-4">
        <Text className="font-work-medium text-lg text-gray-900">
          {item.title}
        </Text>
        <Text
          className="mt-1 font-work-light text-sm text-gray-500"
          numberOfLines={2}
        >
          {item.description}
        </Text>
        <View className="mt-3 items-end">
          <Link
            href={`/products/${item.id}`}
            className="font-work-medium text-primary"
          >
            Ver detalles
          </Link>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <View className="flex-1 px-5 pt-4">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;
