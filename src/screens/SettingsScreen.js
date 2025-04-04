import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { auth } from '../services/firebaseConfig';
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import colors from '../constants/colors';
import EditModal from '../components/EditModal';
import { showMessage } from 'react-native-flash-message';

const SettingsScreen = () => {
  const { user } = useAuth();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [fieldValue, setFieldValue] = useState('');

  const handleEdit = (field) => {
    setModalTitle(field);
    setFieldValue(
      field === 'Nombre'
        ? user?.displayName || ''
        : field === 'Correo'
        ? user?.email || ''
        : field === 'Contraseña'
        ? ''
        : ''
    );
    setModalVisible(true);
  };

  const handleSave = async () => {
    try{
      if (modalTitle === 'Nombre'){
        await updateProfile(auth.currentUser, { displayName: fieldValue })
        showMessage({
          message: '😎',
          description: 'Nombre actualizado correctamente.',
          type: 'success',
        })
      }else if (modalTitle === 'Correo'){
        await updateEmail(auth.currentUser, fieldValue);
          showMessage({
            message: '😁',
            description: 'Correo actualizado correctamente.',
            type: 'success',
          })
      }else if (modalTitle === 'Contraseña') {    
      await updatePassword(auth.currentUser, fieldValue);
      showMessage({
        message: '🤓',
        description: 'Contraseña actualizada correctamente.',
        type: 'success',
      })
      }
  }catch(error){
    showMessage({
      message: '😵‍💫',
      description: error.message,
      type: 'danger',
    })
  }finally {
    setModalVisible(false)
  }
  }

 

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Ajustes</Text>
      <Text style={styles.sectionTitle}>Sobre tu cuenta</Text>

      {/* Nombre */}
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.infoText}>{user?.displayName || 'Sin nombre'}</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit('Nombre')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      {/* Correo */}
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Correo electrónico</Text>
          <Text style={styles.infoText}>{user?.email || 'Sin correo'}</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit('Correo')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      {/* Contraseña */}
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Nueva contraseña</Text>
          <Text style={styles.infoText}>*************</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit('Contraseña')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <EditModal
        visible={isModalVisible}
        title={modalTitle}
        value={fieldValue}
        onChangeText={setFieldValue}
        onSave={handleSave}
        onCancel={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.variante6,
  },
  subtitle: {
    fontSize: 24,
    color: colors.luminous,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: colors.luminous,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: colors.luminous,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: colors.variante2,
  },
  editButton: {
    backgroundColor: colors.variante8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;