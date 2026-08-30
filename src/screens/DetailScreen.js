import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { theme, palette } from '../theme/theme';

export default function DetailScreen({ route, navigation }) {
  const { problem, index } = route.params;
  const colors = palette[index % palette.length];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹ رجوع</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.iconCircle, { backgroundColor: colors.ring }]}>
          <Text style={styles.emoji}>{problem.emoji}</Text>
        </View>
        <Text style={styles.title}>{problem.title}</Text>
        <Text style={styles.short}>{problem.short}</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>خطوات الحل 🪄</Text>
          {problem.steps.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <View style={[styles.stepNumber, { backgroundColor: colors.ring }]}>
                <Text style={styles.stepNumberText}>{i + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
        <View style={[styles.encourageCard, { backgroundColor: colors.ring }]}>
          <Text style={styles.encourageText}>{problem.encouragement}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backBtn: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 4 },
  backText: { fontSize: 16, fontWeight: '700', color: theme.colors.text },
  content: { alignItems: 'center', paddingHorizontal: 24, paddingBottom: 40 },
  iconCircle: { width: 90, height: 90, borderRadius: 45, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 14 },
  emoji: { fontSize: 44 },
  title: { fontSize: 22, fontWeight: '800', color: theme.colors.text, textAlign: 'center', marginBottom: 6 },
  short: { fontSize: 14, color: theme.colors.subtext, textAlign: 'center', marginBottom: 20 },
  card: { width: '100%', backgroundColor: '#fff', borderRadius: theme.radius, padding: 18, marginBottom: 16, shadowColor: '#3B2E5A', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 3 },
  cardTitle: { fontSize: 17, fontWeight: '800', color: theme.colors.text, marginBottom: 14, textAlign: 'right' },
  stepRow: { flexDirection: 'row-reverse', alignItems: 'flex-start', marginBottom: 14 },
  stepNumber: { width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center', marginLeft: 10 },
  stepNumberText: { color: '#fff', fontWeight: '800', fontSize: 13 },
  stepText: { flex: 1, fontSize: 14.5, lineHeight: 22, color: theme.colors.text, textAlign: 'right' },
  encourageCard: { width: '100%', borderRadius: theme.radius, padding: 18 },
  encourageText: { color: '#fff', fontSize: 14.5, fontWeight: '700', textAlign: 'center', lineHeight: 22 },
});
