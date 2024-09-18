import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const produtos = [
  { id: '10', nome: 'Nike Airmax TN', preco: 'De R$ 330,00 por R$ 165,00 ', imagem: 'https://acdn.mitiendanube.com/stores/003/334/869/products/3f9cbd01-9594-401a-9bef-7a626bd695a711-9211cce1f3e3a6c2c816903095624071-640-0.webp' },
  { id: '20', nome: 'Bota Nike Manoa Leather', preco: 'De R$ 500,00 por R$ 250,00', imagem: 'https://www.esportepresidente.com.br/media/catalog/product/cache/2/image/1000x/9df78eab33525d08d6e5fb8d27136e95/b/o/bota_nike_manoa_leather_preta.jpg' },
  { id: '30', nome: 'Chinelo Havaianas Brasil', preco: 'De R$ 50,00 por R$ 25,00', imagem: 'https://images.tcdn.com.br/img/img_prod/772596/chinelo_havaianas_brasil_2759_1_4a0abc5f56be1cf1556f3dd152a11192.jpg' }
];

export default function Inicio() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cabecalho}>
          <Text style={styles.titulocabecalho}>PROMOÇÃO DE ANIVERSÁRIO!!!</Text>
          <Text style={styles.subtitulo}>Todos os tênis da loja</Text>
          <Text style={styles.subtitulo}>com 50% de desconto!!!!</Text>
          <FlatList
            data={produtos}
            renderItem={({ item }) => (
              <View style={styles.cardproduto}>
                <Image 
                  source={{ uri: item.imagem }} 
                  style={styles.imagemproduto} 
                />
                <View style={styles.produto}>
                  <Text style={styles.nomeproduto}>{item.nome}</Text>
                  <Text style={styles.nomeproduto}>{item.preco}</Text>
                </View>
                <View style={styles.subtitulo}>
                  <Text style={styles.subtitulo}>SOMENTE ESSA SEMANA!</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    padding: 10,
    alignItems: 'center',
  },
  titulocabecalho: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#111111',
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#e7c6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardproduto: {
    alignItems: 'center',
    marginRight: 20,
    paddingHorizontal: 10,
  },
  
  imagemproduto: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  produto: {
    alignItems: 'center', 
    marginTop: 10,
  },
  nomeproduto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#11111',
  }
});
