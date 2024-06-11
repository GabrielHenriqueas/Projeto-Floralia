import { Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";

// import {
//   ModalContent,
// } from "../CancellationModal/StyleCancelationModal";

import { useEffect, useState } from "react";
import api from "../../services/services";
import { userDecodeToken } from "../../utils/auth";
export const ModalEncomenda = ({
  agendamento,
  navigation,
  visible,
  setShowModal = null,
  ...rest
}) => {
  const [profile, setProfile] = useState(null);

  async function profileLoad() {
    const token = await userDecodeToken();

    setProfile(token);
  }

  async function handleConfirm() {
    await api
      .post(`/Consultas/Cadastrar`, {
        ...agendamento,

        pacienteId: profile.idUsuario,

        situacaoId: "A2EF53F1-DA6B-45D2-9EF4-4EFE71801D07",
      })
      .then(
        setShowModal(false),

        navigation.replace("Main")
      )
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    profileLoad();
  }, []);

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <EncomendaModal>
                 <ContainerModalEncomenda>
                     <ContainerClose>
                         <Ionicons name="close" size={24} color="#99004F" />
                     </ContainerClose>
                     <TitleModal>Atenção!</TitleModal>
                     <Description>Ao finalizar a encomenda declaro estar ciente que será necessário a retirada do produto em até 10 dias em nossa loja física</Description>
                     <ButtonModal>
                         <TitleButtonModal>Confirmar</TitleButtonModal>
                     </ButtonModal>
                 </ContainerModalEncomenda>
             </EncomendaModal>
    </Modal>
  );
};

// import { Modal } from "react-native";
// import { Container } from "../../components/container/style";
// import { ButtonModal, ContainerClose, ContainerModalEncomenda, Description, EncomendaModal, ModalContent, TitleButtonModal, TitleModal } from "./StyledModalEncomenda";
// import { ButtonVerde } from "../../components/button/style";
// import { Ionicons } from '@expo/vector-icons';

// export const ModalEncomenda = () => {
//     return (
//         <Modal>
//             <EncomendaModal>
//                 <ContainerModalEncomenda>
//                     <ContainerClose>
//                         <Ionicons name="close" size={24} color="#99004F" />
//                     </ContainerClose>
//                     <TitleModal>Atenção!</TitleModal>
//                     <Description>Ao finalizar a encomenda declaro estar ciente que será necessário a retirada do produto em até 10 dias em nossa loja física</Description>
//                     <ButtonModal>
//                         <TitleButtonModal>Confirmar</TitleButtonModal>
//                     </ButtonModal>
//                 </ContainerModalEncomenda>
//             </EncomendaModal>
//         </Modal>
//     );
// };