import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import type { UserData } from './user';

const styles = StyleSheet.create({
  page: { 
    padding: 30,
    backgroundColor: '#ffffff' 
  },
  header: { 
    fontSize: 24, 
    marginBottom: 20,
    textAlign: 'center',
    color: '#4A9B9B'
  },
  section: { 
    marginBottom: 15 
  },
  label: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4
  },
  value: {
    fontSize: 14,
    color: '#000000'
  }
});

interface ProfileReportProps {
  userData: UserData;
}

const ProfileReport: React.FC<ProfileReportProps> = ({ userData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Reporte de Perfil Estudiantil</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Nombre Completo</Text>
        <Text style={styles.value}>{userData.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>CIF</Text>
        <Text style={styles.value}>{userData.cif}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Carrera</Text>
        <Text style={styles.value}>{userData.career}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <Text style={styles.value}>{userData.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.value}>{userData.phone}</Text>
      </View>
    </Page>
  </Document>
);

export default ProfileReport;

