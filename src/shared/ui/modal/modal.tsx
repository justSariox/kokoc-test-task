import React, {ComponentPropsWithoutRef, useCallback, useEffect, useRef, useState} from "react";
import type { MouseEventHandler } from "react";

import s from "./modal.module.scss";
import {Button, Typography} from "@/shared/ui";
import { createContainer } from "@/utils";
import {Portal} from "@/shared/ui/portal";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
    title: string;
    onClose?: () => void;
    children: React.ReactNode | React.ReactNode[];
    className?: string
} & ComponentPropsWithoutRef<'div'>;

export const Modal = (props: Props) => {
    const { title, onClose, children } = props;

    const rootRef = useRef<HTMLDivElement>(null);
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && rootRef.current === target) {
                onClose?.();
            }
        };
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };

        window.addEventListener("click", handleWrapperClick);
        window.addEventListener("keydown", handleEscapePress);

        return () => {
            window.removeEventListener("click", handleWrapperClick);
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [onClose]);

    const handleClose: MouseEventHandler<
        HTMLDivElement | HTMLButtonElement
    > = useCallback(() => {
        onClose?.();
    }, [onClose]);

    return isMounted ? (
        <Portal id={MODAL_CONTAINER_ID}>
            <div className={s.modalWrapper} ref={rootRef} data-testid="wrap">
                <div className={s.content}>
                    <div className={s.modalHeader}>
                        <Typography variant={"h1"} className={s.title}>{title}</Typography>
                        <Button
                            className={s.closeButton}
                            onClick={handleClose}
                            data-testid="modal-close-button"
                        >
                            Х
                        </Button>
                    </div>
                        <div className={s.childrens}>
                            {children}
                        </div>

                </div>
            </div>
        </Portal>
    ) : null;
};
