// A <div> no React Native é substituída pela <View> (que deve ser importado no arquivo)
// Os textos devem ser utilizados com o <Text>
// A tag <img> será substituída pela <Image/>, sua utilização será com o a prop `source` que recebe um objeto que possuo a propriedade `uri` que será o endereço da imagem e será necessário, também, definir os tamanhos para que ela seja exibida.
// Para exibir imagens do próprio projeto, utilizando a <Image/>, deve-se fazer igual no React, importanto como variável e usá-la. OBS.: Não preciso passar um objeto com o `uri`, apenas a variável ou seu caminho relativo.
// IMPORTANTE: Para utilizar imagens como background, deve-se utilizar o component <ImageBackgroun>, ao invés de fazer essa manipulação via css.

// AÇÃO DE TOQUE: deve-se utilizar a prop `onPress` (semelhante ao `onClick` do React)

// Para utilizar o <button> é necessário utilizar o <Button>, para adicionar o texto dele, não será através de child, mas sim através da prop 'title'

// A renderização condicional funciona da mesma maneira que o React

// Para criar <input>, deve-se utilizar o <TextInput/>. O gerenciamento dele funciona da mesma maneira que no input, dentro do React; utilizando os inputs controlados. Deve-se utiliza a prop `onChangeText` para "escutar" a modificação.

import { useState } from 'react';
import { Image, ImageBackground, Text, TextInput, View } from 'react-native';
const foto = require('./foto.jpg')

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alex');
  const age = 5;


  const handlePressImage = () => {
    setCount(count + 1);
  }

  const handleChangeText = (text) => {
    setName(text)
  }
  return (
    <View>
      <Text>
        O {name} possui {age > 1 ? `${age} anos.` : `${age} ano.`}
      </Text>

      <Image
        source={
          { uri: 'data:image/jpeg;base64,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' }
        }
        style={{ width: 100, height: 100 }}
      />

      <Image
        source={foto}
        style={{ width: 100, height: 100 }}
      />

      <ImageBackground
        source={foto}
        style={{
          width: 150,
          height: 150,
        }}
      >
        <Text
          style={{
            color: 'orange',
            fontSize: 30
          }}
          onPress={handlePressImage}
        >
          Contador: {count}
        </Text>
      </ImageBackground>

      <TextInput
        style={{
          backgroundColor: 'gray',
          padding: 20,
          color: 'white',
        }}
        placeholder='Teste'
        placeholderTextColor='black'
        onChangeText={handleChangeText}
      />

    </View>
  );
}
