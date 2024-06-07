import { View } from "react-native";
import { BoxCard, CardTextContainer } from "../../container/style";
import { CardContainer } from "./style";
import { CardImage } from "../../images/style";
import { CardData, CardName, CardStatus } from "../../title/style";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { BackgroundIcon, BackgroundIconGreen } from "../../button/style";

export const Card = ({
    name,
    status,
    precoProduto,
    dataEncomenda,
}) => {

    const Check = () => {
        if (status === "Pendente") {
            return (
                <CardContainer>
                    <BoxCard>
                        <CardImage />

                        <CardTextContainer>

                            <CardName>{name}</CardName>

                            <CardStatus>Status: {status}</CardStatus>

                            <CardData>Data: {dataEncomenda}</CardData>

                        </CardTextContainer>

                        <View style={{ marginTop: 24, marginLeft: 17 }}>
                            <BackgroundIcon>
                                <AntDesign name="close" size={24} color="#B80000" />
                            </BackgroundIcon>
                        </View >

                    </BoxCard>
                </CardContainer>
            );
        } else if (status === "Realizado") {
            return (
                <CardContainer>
                    <BoxCard>
                        <CardImage />

                        <CardTextContainer>

                            <CardName>{name}</CardName>

                            <CardStatus>Status: {status}</CardStatus>

                            <CardData>Data: {dataEncomenda}</CardData>

                        </CardTextContainer>

                        <View style={{ marginTop: 24, marginLeft: 17 }}>
                            <BackgroundIconGreen>
                                <FontAwesome6 name="check" size={24} color="#1C4B00" />
                            </BackgroundIconGreen>
                        </View >

                    </BoxCard>
                </CardContainer>
            );
        } else if (status === "Cancelado") {
            return (
                <View style={{ marginTop: 24, marginLeft: 17 }}>
                    <BackgroundIcon>
                        <AntDesign name="close" size={24} color="#B80000" />
                    </BackgroundIcon>
                </View >
            );
        }
    };

    return (
        <CardContainer>
            <BoxCard>
                <CardImage />

                <CardTextContainer>

                    <CardName>{name}</CardName>

                    <CardStatus>Status: {status}</CardStatus>

                    <CardData>Data: {dataEncomenda}</CardData>

                </CardTextContainer>

                {Check()}

                

            </BoxCard>
            
        </CardContainer>

    );
};


