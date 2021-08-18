import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    header: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#424242',
    },
    headerText: {
        color: '#fafafa',
        fontSize: 28,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#bdbdbd',
        borderRadius: 4,
        width: '95%',
        margin: 8,
        padding: 8,
    },
    input: {
        width: '90%',
        marginBottom: 4,
        borderWidth: 2,
        borderColor: '#424242',
        backgroundColor: '#fafafa',
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 18,
        alignSelf: 'center',
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchText: {
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    sliderText: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 6,
    },
    confirm: {
        backgroundColor: '#0A0',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        marginLeft: 'auto',
        marginRight: 20,
    },
    confirmText: {
        color: '#fafafa',
        fontWeight: 'bold',
    },
})

export default styles