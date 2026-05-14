//Importa o react e o userState
//useState serve para criar valores qu podem mudar na tela
import React, { useState } from "react";
//importa componentes nativos do react native
import {
  View, //caixa //area da tela
  Text, // textos
  Button, // botao
  StyleSheet, // estilos
  TouchableOpacity // botao customizavel

} from "react-native-web";

// Componente principal APP()
export default function App() {
  //cria um estado (variavel php) chamado "pontos"
  // pontos = valor atual
  //setPontos = funcao para alterar o valor
  //0= valor inicial 
  const [pontos, setPontos] = useState(0);
  //funçao para aumentar 1 ponto
  function aumentar() {
    //pega o valor auto e soma +1
    setPontos(pontos + 1);

  }
  //funcao para diminuir 1 ponto
  function diminuir() {
    // pega o valor atual e subtrai -1
    setPontos(pontos - 1);
  }
  //funçao para resetar o controlador
  function resetar() {
    //volta o valor para 0
    setPontos(0);
  }
  // tudo que esta no RETURN aparece na tela
  return (
    //View principal do APP
    <View style={styles.container}>
      {/* Tutulo do APP */}
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
      {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>{pontos}</Text>
      {/* area dos botoes +1 -1  */}
      <View style={styles.areaBotoes}>
        <TouchableOpacity
          onPress={aumentar}
          style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={diminuir}
          style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={resetar}
        style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Resetar</Text>
      </TouchableOpacity>
    </View>
  );
}
// AREA DE ESTILOS DO APP
const styles = StyleSheet.create({
  //ESTILO DA TELA PRINCIPAL
  container: {
    // OCUPA A TELA TODA
    flex: 1,
    //COR DE FUNDO
    backgroundColor: '#121212',
    //CENTRALIZA HORIZONTALMENTE
    alignItems: 'center',
    // CENTRALIZA VERTICALMENTE
    justifyContent: 'center',
    // ESPEÇAMENTO INTERNO
    padding: 20,
  },
  // ESTILO DO TITULO
  titulo: {
    // TAMANHO DA FONTE
    fontSize: 32,
    // COR DO TEXTO
    color: '#00ff88',
    // TEXTO EM NEGRITO
    fontWeight: 'bold',
    // ESPAÇO ABAIXO
    marginBottom: 30,
  },
  // ESTILO DOS PONTOS
  pontos: {
    // TAMANHO GIGANTE
    fontSize: 80,
    // COR BRANCA
    color: '#ffffff',
    // ESPAÇO ABAIXO
    marginBottom: 40,
    // NEGRITO
    fontWeight: 'bold',
  },
  // AREA DOS BOTOES
  areaBotoes: {
    // DEIXA UM BOTAO AO LADO DO OUTRO
    flexDirection: 'row',
    // ESPAÇO ABAIXO
    marginBottom: 20,
  },
// ESTILOP DOS BOTOES +1 E -1
  botao: {
    // COR DO BOTAO
    backgroundColor: '#00ff88',
    // ESPAÇAMENTO VERTICAL
    paddingVertical: 15,
    // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
    // ARREDONDA AS BORDAS
    borderRadius: 12,
    // ESPAÇO ENRE OS BOTÕES
    marginHorizontal: 10,
  },
// ESTILO DO BOTAO RESETAR
  botaoReset: {
    // COR VERMELHA
    backgroundColor: '#ff3b30',
    // ESPAÇAMENTIS
    paddingVertical: 15,
    paddingHorizontal: 40,
    //BORDAS ARREDONDADAS
    borderRadius: 12,
  },
// ESTILO DO TEXTO DOS BOTOES
  textoBotao: {
    //TAMANHO DA LETRA
    fontSize: 22,
   // COR DO TEXTO 
    color: '#000',
    // NEGRITO
    fontWeight: 'bold',
  },
});