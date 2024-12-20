import { Image, TouchableOpacity, StyleSheet } from "react-native"

import estrela from "../assets/estrela.png"
import estrelaCinza from "../assets/estrelaCinza.png"

export default function Estrela({
    desabilitada,
    onPress,
    preenchida,
    grande
}) {

    const estilos = estilosFuncao(grande)

    const getImagem = () => {
        if (preenchida) {
            return estrela
        }
        return estrelaCinza
    }

    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}
    >
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    }
})