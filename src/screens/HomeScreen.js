import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { problems } from '../data/problems';
import ProblemCard from '../components/ProblemCard';
import { theme } from '../theme/theme';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>🌈</Text>
        <Text style={styles.headerTitle}>رفيقي في المدرسة</Text>
        <Text style={styles.headerSubtitle}>اختر المشكلة اللي تواجهها وراح ألاقيلك الحل 💜</Text>
      </View>
      <FlatList
        data={problems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <ProblemCard problem={item} index={index} onPress={() => navigation.navigate('Detail', { problem: item, index })} />
        )}
        ListFooterComponent={<Text style={styles.credit}>إعداد: أ. غيداء بادريق</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { alignItems: 'center', paddingTop: 16, paddingBottom: 12, paddingHorizontal: 20 },
  headerEmoji: { fontSize: 36, marginBottom: 4 },
  headerTitle: { fontSize: 24, fontWeight: '800', color: theme.colors.text },
  headerSubtitle: { fontSize: 13, color: theme.colors.subtext, marginTop: 4, textAlign: 'center' },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
  row: { justifyContent: 'space-between' },
  credit: { textAlign: 'center', color: theme.colors.subtext, fontSize: 12, marginTop: 8, marginBottom: 16 },
});
