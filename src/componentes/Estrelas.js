import { StyleSheet, View } from "react-native"
import { useState } from "react"


import Estrela from "./Estrela"

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    const RenderEstrelas = () => {
        const listaEstrelas = []
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    key={i}
                    desabilitada={!editavel}
                    onPress={() => setQuantidade(i + 1)}
                    preenchida={i < quantidade}
                    grande={grande}
                />
            )
        }
        return listaEstrelas
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: "row"
    }
})