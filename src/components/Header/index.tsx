import React, { useEffect, useState } from 'react';
import image from '../../assets/imgs/logo-branco.png'
import useRouter from '../../hooks/useRouter'
import { CreateLecture } from '../../pages/CreateLecture'

import * as S from './styles'


export const Header = () => {

    const { push } = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <>
            <CreateLecture open={open} setOpen={setOpen} />
            <S.HeaderContainer>
                <S.LeftContentHeader onClick={() => { push('/') }}>
                    <img
                        src={image}
                        alt='cefetLogo'
                    />
                </S.LeftContentHeader>
                <S.MiddleContentHeader>
                    <h1>
                        Portal de Palestras
                    </h1>
                </S.MiddleContentHeader>
                <S.RightContainerHeader>
                    <S.RightContentHeaderCreateLecture onClick={() => { setOpen(!open) }}>
                        <span>
                            Criar palestra
                        </span>
                    </S.RightContentHeaderCreateLecture>
                    <S.RightContentHeader onClick={() => { push('/perfil') }}>
                        <span>
                            Olá, Eduardo Torres
                        </span>
                    </S.RightContentHeader>
                </S.RightContainerHeader>
            </S.HeaderContainer>
        </>
    )
}