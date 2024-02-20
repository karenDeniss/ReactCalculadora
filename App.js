
import { StyleSheet, Text, View, Image, TouchableOpacity }
from 'react-native'
import React, { useState } from 'react';

const Calculadora = () => {

//const [result, setResult] = useState(0);
const [input, setInput] = useState('0');

const numInput = value => {
  if (input === '0') {
    setInput(value);
} else {
setInput(input + value);
}
};

const calculate = () => {
let finalResult = 0;

try {
finalResult = eval(input);
console.log(eval(input));
} catch (error) {
finalResult = "Error";
}

setInput('');
setInput(finalResult.toString());
};

const borrarNums = () => {
setInput(input.length > 1 ? input.slice(0, -1) : '0');

};

return (
//<Text style={styles.Input}>{result}</Text>//

<View style = {styles.Container}>
<View style={styles.inputsBox}>
<Text style={styles.Input}>{input}</Text>
</View>

<View style={styles.Btns}>
<TouchableOpacity style={styles.BtnContainer1}
onPress={() => setInput('')}>
<Text style={styles.BtnText}>AC</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.BtnContainer1}
onPress={borrarNums}>
<Text style={styles.BtnText}>C</Text>
</TouchableOpacity>



<TouchableOpacity style={styles.BtnContainer1}>
<Text style={styles.BtnText}>%</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.BtnContainer2}
onPress={() => numInput('/')}>
<Text style={styles.BtnText}>/</Text>
</TouchableOpacity>


</View>

<View style={styles.Btns}>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('1')}>
<Text style={styles.BtnText}>1</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('2')}>
<Text style={styles.BtnText}>2</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('3')}>
<Text style={styles.BtnText}>3</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer2}
onPress={() => numInput('*')}>
<Text style={styles.BtnText}>x</Text>
</TouchableOpacity>

</View>

<View style={styles.Btns}>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('4')}>
<Text style={styles.BtnText}>4</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('5')}>
<Text style={styles.BtnText}>5</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('6')}>
<Text style={styles.BtnText}>6</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer2}
onPress={() => numInput('-')}>
<Text style={styles.BtnText}>-</Text>
</TouchableOpacity>
</View>

<View style={styles.Btns}>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('7')}>
<Text style={styles.BtnText}>7</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('8')}>
<Text style={styles.BtnText}>8</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('9')}>
<Text style={styles.BtnText}>9</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.BtnContainer2}
onPress={() => numInput('+')}>
<Text style={styles.BtnText}>+</Text>
</TouchableOpacity>
</View>

<View style={styles.Btns}>
<TouchableOpacity style={styles.BtnContainer3}>
<Text style={styles.BtnText4}>-/+</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.BtnContainer}
onPress={() => numInput('0')}>
<Text style={styles.BtnText}>0</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer3}
onPress={() => numInput('.')}>
<Text style={styles.BtnText}>.</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.BtnContainer3}
onPress={calculate}>
<Text style={styles.BtnText}>=</Text>
</TouchableOpacity>
</View>

</View>

)
}

export default Calculadora

const styles = StyleSheet.create({
Container:{
marginTop:130,
width: 370,//posisicon del margern de la calculadora
height: 500,

},
Btns:{
flexDirection: 'row',
justifyContent: 'center',
},

inputsBox:{
alignItems: 'center',
},

Input:{
fontSize: 40,
backgroundColor: '#D7DBDD',
marginTop:67,//altura de la caja de texto
borderRadius: 10,
width:300,//tamaño de la caja de texto para el resultado 
},

BtnContainer:{
marginTop:9,
marginHorizontal:4,
width: 70,
height: 80,
borderRadius:20,
backgroundColor: '#D7DBDD',
justifyContent: 'center',
alignItems: 'center',
borderWidth: 1,
borderColor: 'black'

},

BtnContainer1:{
marginTop:9,
marginHorizontal:4,
width: 70,
height: 80,
borderRadius:20,

backgroundColor: 'gray',
justifyContent: 'center',
alignItems: 'center',
borderWidth: 1,
borderColor: 'black'

},

BtnContainer2:{
marginTop:9,
marginHorizontal:4,
width: 70,
height: 80,
borderRadius:20,
backgroundColor: '#8AC6BF',
justifyContent: 'center',
alignItems: 'center',
borderWidth: 1,
borderColor: 'black'

},

BtnContainer3:{
marginTop:9,
marginHorizontal:4,
width: 70,
height: 80,
borderRadius:20,
backgroundColor: '#D7DBDD',
justifyContent: 'center',
alignItems: 'center',
borderWidth: 1,
borderColor: 'black'
},



BtnText:{
fontSize: 30,
padding: 15
},

BtnText4:{
  fontSize: 20,
  padding: 15
  },

})