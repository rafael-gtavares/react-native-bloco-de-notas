import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import Database from './DataBase';


export default function AppForm({ route, navigation }) {

  const id = route.params ? route.params.id : undefined;

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [tituloPagina, setTituloPagina] = useState('Adicionar nota')

  useEffect(() => {
    if (route.params) {
      setTitulo(route.params.titulo);
      setConteudo(route.params.conteudo);
      setTituloPagina("Editar nota");
    } else {
      setTitulo("");
      setConteudo("");
      setTituloPagina("Adicionar nota");
    }
  }, [route.params]);

  function handleTituloChange(titulo) { setTitulo(titulo); }
  function handleConteudoChange(conteudo) { setConteudo(conteudo); }

  async function handleButtonPress() {
    const listItem = { titulo, conteudo };

    Database.saveItem(listItem, id).then(response => navigation.navigate("AppList", listItem));
    
    navigation.setParams({
      id: undefined,
      titulo: undefined,
      conteudo: undefined
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{tituloPagina}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleTituloChange}
          placeholder="Qual o título da sua nota?"
          placeholderTextColor="#888"
          clearButtonMode="always"
          value={titulo}
        />

        <TextInput
          style={styles.input}
          onChangeText={handleConteudoChange}
          placeholder="Digite o que você quer relembrar"
          placeholderTextColor="#888"
          clearButtonMode="always"
          value={conteudo}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <View style={styles.buttonContainer}>
            <Icon name="save" size={22} color="white" />
            <Text style={styles.buttonText}> Salvar</Text>
          </View>
        </TouchableOpacity>

        <StatusBar style="light" />
      </View>

      <StatusBar style="light" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    ShadowColor: "#ccc",
  },
  buttonContainer: {
    flexDirection: "row"
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});