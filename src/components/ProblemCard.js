import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme, palette } from '../theme/theme';

export default function ProblemCard({ problem, index, onPress }) {
  const colors = palette[index % palette.length];

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.card, { backgroundColor: colors.bg }]}>
      <View style={[styles.iconCircle, { backgroundColor: colors.ring }]}>
        <Text style={styles.emoji}>{problem.emoji}</Text>
      </View>
      <Text style={styles.title}>{problem.title}</Text>
      <Text style={styles.short}>{problem.short}</Text>
      <View style={[styles.badge, { backgroundColor: colors.ring }]}>
        <Text style={styles.badgeText}>اضغط لمعرفة الحل ✨</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: '47%', borderRadius: theme.radius, padding: 14, marginBottom: 16, alignItems: 'center', shadowColor: '#3B2E5A', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.12, shadowRadius: 8, elevation: 3 },
  iconCircle: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  emoji: { fontSize: 30 },
  title: { fontSize: 15, fontWeight: '700', color: theme.colors.text, textAlign: 'center', marginBottom: 4 },
  short: { fontSize: 12, color: theme.colors.subtext, textAlign: 'center', marginBottom: 10 },
  badge: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 14 },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '600' },
});
