import { ComponentPropsWithoutRef, ReactNode } from "react";

import s from './page.module.scss'

type PageProps = {
    className?: string
    children?: ReactNode
} & ComponentPropsWithoutRef<'div'>


export const Page = ({className, children, ...restProps}: PageProps) => {
    return (
        <div className={`${s.page} ${className}`} {...restProps}>
            {children}
        </div>
    );
};
