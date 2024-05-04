import React, {useCallback, useState} from 'react'
import { Theme } from 'src/widgets/ThemeSwitcher'
import { SelectLanguage } from 'src/widgets/SelectLanguage'
import {useTranslation} from "react-i18next";
import {Button} from "../../../shared/uiKit/Button";
import {Modal} from "../../../shared/uiKit/Modal";

const Navbar = (): React.ReactNode => {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const {t} = useTranslation();

    const onModalToggle = useCallback(() => {
        setModalOpen(prevState => (!prevState));
    }, []);

    return (
        <nav className={`flex justify-end pt-2 px-20 ` +
            ` h-navbar border-b-2 border-b-gray gap-12`}>
            <div className={'flex items-center'}>
                <Button onClick={onModalToggle} title={t(`Login`)}/>
            </div>
            <Modal isOpen={modalOpen} onClose={onModalToggle} >
                {'this is the Modal Windows'}
            </Modal>
            <div className={'flex gap-4 items-center'}>
                <Theme/>
                <SelectLanguage short={false}/>
            </div>
        </nav>
    )
}

export default Navbar
