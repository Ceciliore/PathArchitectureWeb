import image from '../../assets/imgs/logo-branco.png'
import * as S from './styles'


export const Header = () => {
    return (
        <S.HeaderContainer>
            <S.LeftContentHeader>
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
            <S.RightContentHeader>
                <span>
                    Olá, Eduardo Torres
                </span>
            </S.RightContentHeader>
        </S.HeaderContainer>
    )
}