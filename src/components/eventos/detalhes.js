import React, { Component } from 'react';
import { Alert, View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import axios from 'axios';
import styles from 'assets/styles/about';


export default class DetalheEvento extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitudeEvento: 0,
            longitudeEvento: 0
        }
    }

    componentDidMount() {
        axios.get(`http://enderecos.metheora.com/api/estado/${this.props.evento.uf}/cidades/${this.props.evento.cidade}`)
            .then((response) => {
                this.setState({
                    latitudeEvento: response.data[0].Latitude,
                    longitudeEvento: response.data[0].Longitude
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
                            latitude: this.state.latitudeEvento,
                            longitude: this.state.longitudeEvento,
                            latitudeDelta: 0.0522,
                            longitudeDelta: 0.0421
                        }}>
                        <Marker
                            coordinate={{
                                latitude: this.state.latitudeEvento,
                                longitude: this.state.longitudeEvento
                            }}
                            title={this.props.evento.nome_evento}
                            description={this.props.evento.desc_evento}
                        />
                    </MapView>

                    <View style={styles.boxEvent}>
                        <Text style={styles.textTitle}>{this.props.evento.nome_evento}</Text>
                        <Text style={styles.textEvent}>{this.props.evento.desc_evento}</Text>
                        <Text style={styles.textDate}>{`${this.props.evento.data_evento.replace(/-/g, '/')} às ${this.props.evento.horario}`}</Text>
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
                                `Sua solicitação para participação do evento ${this.props.evento.nome_evento} foi enviada para o organizador. Aguarde a aceitação dele.`,
                                [
                                    {text: 'CONCLUIR', onPress: () => Actions.principal({index: 1})}
                                ]
                            );}
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}

