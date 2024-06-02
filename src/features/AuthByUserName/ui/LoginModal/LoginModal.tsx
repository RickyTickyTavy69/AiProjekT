import {Modal} from "../../../../shared/uiKit/Modal";
import LoginForm from "../LoginForm/LoginForm.async.tsx";
import {Suspense} from "react";
import {PageLoader} from "../../../../widgets/PageLoader";

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
            <Suspense
                fallback={<PageLoader/>}
            >
                <LoginForm/>
            </Suspense>
        </Modal>
    )
}

export default LoginModal;
