import React, {
    // useCallback,
    // useEffect,
    // useState
} from "react";
// import {Portal} from "../Portal"
import classNames from "../../lib/classNames/classNames.ts";
import {motion} from "framer-motion";


type ModalProps = {
    // isOpen: boolean;
    // onClose: () => void;
    children: React.ReactNode;
    // lazy?: boolean;
    // isTest?: boolean;
}

const Modal = (
    {
        // isOpen = true,
        // onClose,
        children,
        // lazy = false,
        // isTest = false
    }: ModalProps
) => {
  // const [isMounted, setIsMounted] = useState(false);

  /* const clickHandler = useCallback( () => {
        if(onClose){
            onClose();
        }
    }, [onClose])

    const keyDownHandler = useCallback( (e: KeyboardEvent) => {
        if(e.key === "Escape"){
            clickHandler();
        }
    }, [clickHandler])

    const variants = {
        open: { opacity: 1, scale: 1},
        closed: { opacity: 0, scale: 0.5},
    }


    useEffect(() => {
        if(isOpen){
            window.addEventListener("keydown", keyDownHandler);
        }
        return () => {
            window.removeEventListener("keydown", keyDownHandler);
        }
    }, [isOpen, keyDownHandler]);

    useEffect(() => {
        if(isOpen){
            setIsMounted(true)
        }
    }, [isOpen])

    if(lazy && !isMounted){
        return null;
    }*/

  return (
    <motion.div
      data-testid={"modal-overlay"}
      // animate={isOpen ? "open" : "closed"}
      // variants={variants}
      // onClick={clickHandler}
      className={classNames(
        `fixed top-0 bottom-0 left-0 right-0
             flex justify-center items-center -z-10 bg-overlay_color`,
        {
         // "z-50 pointer-events-auto": isOpen,
        },
      )}
    >
      <motion.div
        data-testid={"modal-window"}
        // animate={isOpen ? "open" : "closed"}
        // variants={variants}
        onClick={(e) => e.stopPropagation()}
        className={
          "bg-modal_color dark:bg-modal_color_dark text-black rounded h-52 w-96 opacity-0 p-2"
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Modal;

/*
* !isTest ?
            <Portal>
                <motion.div
                    data-testid={"modal-overlay"}
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                    onClick={clickHandler} className={classNames(`fixed top-0 bottom-0 left-0 right-0
             flex justify-center items-center -z-10 bg-overlay_color`,
                    {
                        'z-50 pointer-events-auto': isOpen,
                    }
                )}>
                    <motion.div
                        data-testid={"modal-window"}
                        animate={isOpen ? "open" : "closed"}
                        variants={variants}
                        onClick={(e) => e.stopPropagation()}
                        className={'bg-modal_color dark:bg-modal_color_dark text-black rounded h-52 w-96 opacity-0 p-2'}>
                        {children}
                    </motion.div>
                </motion.div>
            </Portal> :
            <motion.div
                data-testid={"modal-overlay"}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                onClick={clickHandler} className={classNames(`fixed top-0 bottom-0 left-0 right-0
             flex justify-center items-center -z-10 bg-overlay_color`,
                {
                    'z-50 pointer-events-auto': isOpen,
                }
            )}>
                <motion.div
                    data-testid={"modal-window"}
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                    onClick={(e) => e.stopPropagation()}
                    className={'bg-modal_color dark:bg-modal_color_dark text-black rounded h-52 w-96 opacity-0 p-2'}>
                    {children}
                </motion.div>
            </motion.div>*/
