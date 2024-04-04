import { Page } from "@/shared/ui/page/page";
import s from './start-page.module.scss'

import logo from '@/shared/assets/images/logo.svg'
import { Button } from "@/shared/ui";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
export const StartPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage && sessionStorage.length > 0) navigate('/play')
    }, [navigate])


    return (
        <Page className={s.startPage}>
            <img src={logo} alt={'logo'}/>
            <Button className={s.startButton} onClick={() => navigate('/play')}>Начать игру</Button>
        </Page>
    );
};

