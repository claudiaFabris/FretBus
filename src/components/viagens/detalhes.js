import React, { Component } from 'react';
import { Alert, View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import axios from 'axios';
import styles from 'assets/styles/about';


export default class DetalheViagem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitudeCidadeOrigem: 0,
            longitudeCidadeOrigem: 0,
            latitudeCidadeDestino: 0,
            longitudeCidadeDestino: 0
        }
    }

    componentDidMount() {
        axios.get(`http://enderecos.metheora.com/api/estado/${this.props.viagem.uf}/cidades/${this.props.viagem.cidade_origem}`)
            .then((response) => {
                this.setState({
                    latitudeCidadeOrigem: response.data[0].Latitude,
                    longitudeCidadeOrigem: response.data[0].Longitude
                })
            })

        axios.get(`http://enderecos.metheora.com/api/estado/${this.props.viagem.uf}/cidades/${this.props.viagem.cidade_destino}`)
            .then((response) => {
                this.setState({
                    latitudeCidadeDestino: response.data[0].Latitude,
                    longitudeCidadeDestino: response.data[0].Longitude
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: this.state.latitudeCidadeOrigem,
                            longitude: this.state.longitudeCidadeOrigem,
                            latitudeDelta: 1.022,
                            longitudeDelta: 8.442
                        }}>
                        <Marker
                            coordinate={{
                                latitude: this.state.latitudeCidadeOrigem,
                                longitude: this.state.longitudeCidadeOrigem
                            }}
                        />
                        <Marker
                            coordinate={{
                                latitude: this.state.latitudeCidadeDestino,
                                longitude: this.state.longitudeCidadeDestino
                            }}
                        />
                    </MapView>

                    <View style={styles.boxEvent}>
                        <Text style={styles.textTitle}>Viagem</Text>
                        <Text style={styles.textEvent}>
                            {`Saída de ${this.props.viagem.cidade_origem} para ${this.props.viagem.cidade_destino}`}
                        </Text>
                        <Text style={styles.textDate}>{this.props.viagem.data_viagem.replace(/-/g, '/')}</Text>
                    </View>

                    <Button
                        buttonStyle={styles.button}
                        title={'Participar'}
                        color={'#FFF'}
                        fontSize={20}
                        icon={{name: 'check', color: '#FFF', size: 20}}
                        onPress={()=> { 
                            Alert.alert(
                                'Pronto!',
                                `Sua solicitação para participação da viagem foi enviada para o organizador. Aguarde a aceitação dele.`,
                                [
                                    {text: 'CONCLUIR', onPress: () => Actions.principal({index: 2})}
                                ]
                            );}
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}

