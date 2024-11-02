import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, ScrollView, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [patientName, setPatientName] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [records, setRecords] = useState([]);

  const handleSave = () => {
    if (patientName === '' || bloodPressure === '' || glucoseLevel === '') {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const newRecord = {
      id: Date.now().toString(),
      patientName,
      bloodPressure,
      glucoseLevel,
      timestamp: new Date().toLocaleString()
    };

    setRecords([...records, newRecord]);

    setPatientName('');
    setBloodPressure('');
    setGlucoseLevel('');

    Alert.alert('Sucesso', 'Medições salvas com sucesso!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.title}>Registro de Saúde do Paciente</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome do Paciente"
            placeholderTextColor="#FFA500"
            value={patientName}
            onChangeText={setPatientName}
          />

          <TextInput
            style={styles.input}
            placeholder="Pressão Arterial (ex: 120/80)"
            placeholderTextColor="#FFA500"
            value={bloodPressure}
            onChangeText={setBloodPressure}
          />

          <TextInput
            style={styles.input}
            placeholder="Nível de Glicose (ex: 90 mg/dL)"
            placeholderTextColor="#FFA500"
            value={glucoseLevel}
            onChangeText={setGlucoseLevel}
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar Medições</Text>
          </TouchableOpacity>

          <Text style={styles.subtitle}>Medições Salvas:</Text>
          {records.map((record) => (
            <View key={record.id} style={styles.record}>
              <Text style={styles.recordText}>Paciente: {record.patientName}</Text>
              <Text style={styles.recordText}>Pressão Arterial: {record.bloodPressure}</Text>
              <Text style={styles.recordText}>Glicose: {record.glucoseLevel}</Text>
              <Text style={styles.recordText}>Data/Hora: {record.timestamp}</Text>
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFA500',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#FFA500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  record: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFA500',
    paddingVertical: 8,
  },
  recordText: {
    color: '#FFFFFF',
  },
});

export default App;



