import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native';

// 1. Static dataset of 5 products with id, name, and price
const PRODUCTS = [
  { id: '1', name: 'Laptop', price: 999 },
  { id: '2', name: 'Mouse', price: 29 },
  { id: '3', name: 'Keyboard', price: 79 },
  { id: '4', name: 'Headphones', price: 149 },
  { id: '5', name: 'Monitor', price: 249 },
];

const broken = ;

export default function App() {
  // 2. State for the user's search text
  const [searchQuery, setSearchQuery] = useState('');

  // 3. Case-insensitive search filter
  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  // 4. Render template for individual product card
  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header: Student Info & Title */}
        <View style={styles.headerCard}>
          <Text style={styles.title}>Product Explorer</Text>
          <Text style={styles.studentName}>Uzair Majeed</Text>
          <Text style={styles.studentRoll}>23i-3063</Text>
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#8c919a"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
        />

        {/* Products List */}
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={renderProductItem}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No products found</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  container: {
    flex: 1,
    padding: 20,
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
  },
  headerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    // Drop shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1f36',
    marginBottom: 4,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c4257',
  },
  studentRoll: {
    fontSize: 14,
    color: '#697386',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e3e8ee',
    marginBottom: 16,
    // Drop shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  listContainer: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Drop shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1f36',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0070f3',
  },
  emptyContainer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#8792a2',
    fontStyle: 'italic',
  },
});