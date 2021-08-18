import React from 'react'
import { View, Text, TextInput, Switch, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import styles from './styles'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            telefone: '',
            email: '',
            estado: null,
            area: null,
            habilitado: false,
            salario: 1500,
        }
        this.estados = [
            {id: 1, nome: 'Acre'},
            {id: 2, nome: 'Alagoas'},
            {id: 3, nome: 'Amapá'},
            {id: 4, nome: 'Amazonas'},
            {id: 5, nome: 'Bahia'},
            {id: 6, nome: 'Ceará'},
            {id: 7, nome: 'Distrito Federal'},
            {id: 8, nome: 'Espirito Santo'},
            {id: 9, nome: 'Goiás'},
            {id: 10, nome: 'Maranhão'},
            {id: 11, nome: 'Mato Grosso do Sul'},
            {id: 12, nome: 'Mato Grosso'},
            {id: 13, nome: 'Minas Gerais'},
            {id: 14, nome: 'Pará'},
            {id: 15, nome: 'Paraíba'},
            {id: 16, nome: 'Paraná'},
            {id: 17, nome: 'Pernambuco'},
            {id: 18, nome: 'Piauí'},
            {id: 19, nome: 'Rio de Janeiro'},
            {id: 20, nome: 'Rio Grande do Norte'},
            {id: 21, nome: 'Rio Grande do Sul'},
            {id: 22, nome: 'Rondônia'},
            {id: 23, nome: 'Roraima'},
            {id: 24, nome: 'Santa Catarina'},
            {id: 25, nome: 'São Paulo'},
            {id: 26, nome: 'Sergipe'},
            {id: 27, nome: 'Tocantins'},
        ]
        this.areas = [
            {id: 1, nome: 'Advogado'},
            {id: 2, nome: 'Analista de Sistemas'},
            {id: 3, nome: 'Dentista'},
            {id: 4, nome: 'Engenheiro'},
            {id: 5, nome: 'Fisioterapeuta'},
            {id: 6, nome: 'Geólogo'},
            {id: 7, nome: 'Médico'},
            {id: 8, nome: 'Professor'},
        ];
    }

    showAlert() {
        const data = 'Nome: ' + this.state.nome + '\n'
            + 'Telefone: ' + this.state.telefone + '\n'
            + 'Email: ' + this.state.email + '\n'
            + 'Residência: ' + (this.state.estado != null ? this.state.estado.nome : '') + '\n'
            + 'Área de Atuação: ' + (this.state.area != null ? this.state.area.nome : '') + '\n'
            + 'Habilitação: ' + (this.state.habilitado ? 'SIM' : 'NÃO') + '\n'
            + 'Pretensão Salarial: R$ ' + this.state.salario.toFixed(2)

        Alert.alert(
            'Deseja salvar seus dados?',
            data,
            [
                {
                    text: 'NÃO',
                    onPress: () => {},
                },
                {
                    text: 'SIM',
                    onPress: () => {},
                },
            ]
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>RH - Recrutamento</Text>
                </View>
                <View style={styles.container}>
                    <ScrollView style={styles.card}>
                        <TextInput style={styles.input} keyboardType="default" placeholder="Nome Completo" onChangeText={value => this.setState({nome: value})} />
                        <TextInput style={styles.input} keyboardType="phone-pad" placeholder="Telefone" onChangeText={value => this.setState({telefone: value})} />
                        <TextInput style={styles.input} keyboardType="email-address" placeholder="Email" onChangeText={value => this.setState({email: value})} />
                        <View style={styles.input}>
                            <Picker selectedValue={this.state.estado} onValueChange={item => this.setState({estado: item})}>
                                <Picker.Item key={0} value={null} label="Local de Residência (UF)" />
                                {this.estados.map(item => { return <Picker.Item key={item.id} value={item} label={item.nome} /> })}
                            </Picker>
                        </View>
                        <View style={styles.input}>
                            <Picker selectedValue={this.state.area} onValueChange={item => this.setState({area: item})}>
                                <Picker.Item key={0} value={null} label="Área de Atuação" />
                                {this.areas.map(item => { return <Picker.Item key={item.id} value={item} label={item.nome} /> })}
                            </Picker>
                        </View>
                        <View style={[styles.input, styles.switch]}>
                            <Text style={styles.switchText}>Possui Habilitação?</Text>
                            <Switch trackColor={{ false: '#A00', true: '#0A0' }}
                                thumbColor={this.state.habilitado ? '#DFD' : '#FDD'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => this.setState({habilitado: !this.state.habilitado}) }
                                value={this.state.habilitado}
                            />
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.sliderText}>Pretensão Salarial</Text>
                            <Slider value={this.state.salario}
                                minimumValue={1000}
                                maximumValue={5000}
                                onValueChange={value => this.setState({salario: value})}
                            />
                            <Text style={styles.sliderText}>R$ {this.state.salario.toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity style={styles.confirm} onPress={() => this.showAlert()}>
                            <Text style={styles.confirmText}>Confirmar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Form