import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const openEmail = () => {
    Linking.openURL('mailto:anabahena12345@gmail.com');
  };

  const openPhone = () => {
    Linking.openURL('tel:+524422873651');
  };

  const openMap = () => {
    Linking.openURL('https://maps.app.goo.gl/your-address-here');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image 
              //source={require('./assets/profile-placeholder.png')} 
              //style={styles.profileImage} 
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.name}>Bahena Sánchez Ana Isabel</Text>
            <Text style={styles.title}>Desarrollador de Software</Text>
            
            <View style={styles.contactInfo}>
              <TouchableOpacity style={styles.contactItem} onPress={openEmail}>
                <Entypo name="email" size={16} color="#555" />
                <Text style={styles.contactText}>anabahena12345@gmail.com</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contactItem} onPress={openPhone}>
                <Entypo name="phone" size={16} color="#555" />
                <Text style={styles.contactText}>+52 442-287-36-51</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.contactItem} onPress={openMap}>
                <Entypo name="location-pin" size={16} color="#555" />
                <Text style={styles.contactText}>Av. Monte Sacro 220, Lomas de San Pedrito</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* About Me Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acerca de mí</Text>
          <Text style={styles.sectionContent}>
            Desarrollador de software con experiencia en la creación de aplicaciones web y móviles, 
            utilizando tecnologías modernas como JavaScript, PHP y React Native; conocimientos en el 
            diseño y administración de bases de datos (MySQL), conexión entre API JS.
          </Text>
        </View>

        {/* Work Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
          
          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.experienceTitle}>Ejecutivo en ventas</Text>
              <Text style={styles.experienceDate}>2023-2024</Text>
            </View>
            <Text style={styles.experienceCompany}>Banco Santander, Institución de Banca Múltiple S.A.</Text>
          </View>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educación</Text>
          
          <View style={styles.educationItem}>
            <Text style={styles.educationDate}>2022 – Actualmente</Text>
            <Text style={styles.educationDegree}>Técnico Superior Universitario en Desarrollo de Software Multiplataforma</Text>
            <Text style={styles.educationInstitution}>Universidad Tecnológica de Querétaro</Text>
          </View>
          
          <View style={styles.educationItem}>
            <Text style={styles.educationDate}>2019-2022</Text>
            <Text style={styles.educationDegree}>Técnico en Programación</Text>
            <Text style={styles.educationInstitution}>Colegio de Estudios Científicos y Tecnológicos del Estado de Guanajuato, Plantel Coroneo</Text>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          
          <View style={styles.skillsContainer}>
            <View style={styles.skillItem}>
              <MaterialIcons name="people" size={20} color="#4169E1" />
              <Text style={styles.skillText}>Atención al cliente</Text>
            </View>
            
            <View style={styles.skillItem}>
              <FontAwesome name="star" size={20} color="#4169E1" />
              <Text style={styles.skillText}>Liderazgo</Text>
            </View>
            
            <View style={styles.skillItem}>
              <MaterialIcons name="chat" size={20} color="#4169E1" />
              <Text style={styles.skillText}>Comunicación asertiva</Text>
            </View>
            
            <View style={styles.skillItem}>
              <MaterialIcons name="lightbulb" size={20} color="#4169E1" />
              <Text style={styles.skillText}>Resolución de problemas</Text>
            </View>
            
            <View style={styles.skillItem}>
              <MaterialIcons name="group" size={20} color="#4169E1" />
              <Text style={styles.skillText}>Trabajo en equipo</Text>
            </View>
            
            <View style={styles.skillItem}>
              <MaterialIcons name="autorenew" size={20} color="#4169E1" />
              <Text style={styles.skillText}>Adaptabilidad y aprendizaje continuo</Text>
            </View>
          </View>
        </View>

        {/* Interest Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interés Laboral</Text>
          <Text style={styles.sectionContent}>
            Interés en ampliar conocimientos en desarrollo web y móvil, explorando nuevos lenguajes,
            paradigmas de programación, incluyendo SQL y NoSQL; buscando oportunidades para aplicar 
            fortaleciendo habilidades en arquitecturas modernas.
          </Text>
        </View>

        {/* Other Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Otras Habilidades</Text>
          <View style={styles.otherSkillItem}>
            <Text style={styles.otherSkillText}>
              Curso en "Become a Rapid Developer" (Mendix Academy), enero 2025 - Marzo 2025.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
  },
  profileImageContainer: {
    marginRight: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  title: {
    fontSize: 18,
    color: '#495057',
    marginBottom: 10,
  },
  contactInfo: {
    marginTop: 5,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4169E1',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
    paddingBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#495057',
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  experienceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#343a40',
  },
  experienceDate: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
  },
  experienceCompany: {
    fontSize: 16,
    color: '#495057',
    marginTop: 2,
  },
  educationItem: {
    marginBottom: 15,
  },
  educationDate: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
  },
  educationDegree: {
    fontSize: 17,
    fontWeight: '600',
    color: '#343a40',
    marginTop: 2,
  },
  educationInstitution: {
    fontSize: 15,
    color: '#495057',
    marginTop: 2,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    marginLeft: 5,
    color: '#495057',
    fontSize: 14,
  },
  otherSkillItem: {
    marginBottom: 8,
  },
  otherSkillText: {
    fontSize: 16,
    color: '#495057',
  },
});