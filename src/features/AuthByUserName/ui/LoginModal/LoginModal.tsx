import {Modal} from "../../../../shared/uiKit/Modal";
import LoginForm from "../LoginForm/LoginForm.tsx";

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({isOpen, onClose}: LoginModalProps) => {
    return(
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm/>
        </Modal>
    )
}

export default LoginModal;
