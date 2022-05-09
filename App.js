import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
	<View style={styles.container}>

	  <View style={styles.textContainer}>
		<Text style={styles.mainTitle}> Tareas de hoy </Text>
		<View style={styles.tasksContainer}>
		  <Task nombre={"Esto es la tarea 1"}/>
		  <Task nombre={"Esto es la tarea 2"}/>
		  <Task nombre={"Esto es la tarea 3"}/>
		</View>
	  </View>

	  {/* Este componente se utiliza para que cuando se abra el teclado el contenido de la app se desplace hacia arriba */}
	  {/* El behavior es diferente dependiendo del so del dispositivo. */}
	  <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
		<TextInput style={styles.input} placeholder={'Hola que tal'}></TextInput>
		<TouchableOpacity style={styles.touch}> 
		  <Text style={styles.simbolo}> + </Text>
		</TouchableOpacity>
	  </KeyboardAvoidingView>

	  
	  <StatusBar style="auto" />
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#E8EAED',
  },
  textContainer: {
	marginTop: 80,
	marginLeft: 20,
	marginRight: 20,
  }, 
  mainTitle: {
	fontSize: 24,
	fontWeight: 'bold',
  },
  tasksContainer: {
	marginTop: 20,
  },
  
  keyboard: {
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	alignItems: 'center',
	position: 'absolute',
	bottom: 60,
	marginHorizontal: 10,
  },

  input: {
	backgroundColor: 'white',
	width: '80%',
	paddingVertical: 20,
	paddingHorizontal: 10,
	borderRadius: 10,
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 5,
	},
	shadowOpacity: 0.34,
	shadowRadius: 6.27,

	elevation: 10,
  },
  touch: {
	backgroundColor: 'white',
	padding: 20,
	borderRadius: 50,
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 5,
	},
	shadowOpacity: 0.34,
	shadowRadius: 6.27,

	elevation: 10,
  },

  simbolo: {
	fontSize: 16,
	color: '#55BCF6',
  }
});
