import React from 'react';
import {Button} from "../Button/button";
import {useTelegram} from "../../hooks/useTelegram";

export const Header = () => {
    const tg = window.Telegram.WebApp

    const{user, onClose} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={() => onClose()}> Close </Button>
            <span className={'username'}>
                {user.username}
            </span>
        </div>
    );
};

