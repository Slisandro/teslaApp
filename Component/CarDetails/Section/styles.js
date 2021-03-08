import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
        padding: 0,
        backgroundColor: 'white',
    },
    imgContainer: {
        width: '100%',
        height: '50%',
        margin: 0,
        padding: 0,
    },
    img: {
        width: "100%",
        height: '100%',
        resizeMode: "cover",
    },
    section: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        padding: '10%',
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 500,
    }
});

export default styles;