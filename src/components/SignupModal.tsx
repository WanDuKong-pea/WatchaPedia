import React from "react";
import Modal from "react-modal"
import styled from "@emotion/styled";
import SignupForm from "./SignupForm";

const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.6)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "390px",
      height: "500px",
      padding: "32px 0px 0px 0px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.30)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
      textAlign: "center",
    },
};

const TextLogo = styled.h1`
    font-size: 24px;
    font-weight: 700;
    > span[class="primary"]{
        color: rgb(255, 47, 110);
    }
    > span:not(.primary){
        color: #222;
    }
`;

interface SignupModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({isOpen, onRequestClose}) => {
    return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customModalStyles} ariaHideApp={false}>
        <TextLogo>
            <span className="primary">WATCHOUT</span>
            <span>PEDIA</span>
        </TextLogo>
        <SignupForm />
    </Modal>
    );
}

export default SignupModal;