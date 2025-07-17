import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'antd';
import perfilUsuario from '../../assets/imgs/perfil-usuario.png';
import { LectureContainer } from '../../components/LectureContainer';
import { getUsuarioLogado, logout } from '../../utils/auth';
import { HiOutlineLogout } from "react-icons/hi";
import * as S from './styles';

export const PerfilPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <S.PerfilContainer>
                <S.PerfilContent>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Image
                            width={255}
                            src={perfilUsuario}
                            style={{ borderRadius: '50%' }}
                        />
                        <S.PerfilTopContent>
                            <h1>{getUsuarioLogado()?.nome}</h1>
                            <S.PerfilTopInsideInformationContent>
                                <span>
                                    Matricula: {getUsuarioLogado().matricula}
                                </span>
                                <span>
                                    Estudante Bacharelado
                                </span>
                            </S.PerfilTopInsideInformationContent>
                            <S.PerfilTopInsideInformationContent>
                                <span>
                                    Instituição: CEFET/RJ - Campus Maria da Graça
                                </span>
                            </S.PerfilTopInsideInformationContent>
                            <S.PerfilTopInsideInformationContent>
                                <span>
                                    Curso: Sistemas de Informação
                                </span>
                                <span>
                                    Email: {getUsuarioLogado().email}
                                </span>
                            </S.PerfilTopInsideInformationContent>
                        </S.PerfilTopContent>
                    </div>

                    <S.LogoutButtonPerfil onClick={handleLogout}>
                        <HiOutlineLogout size={20} color="#fff" />
                        Sair
                    </S.LogoutButtonPerfil>
                </S.PerfilContent>

                <div>
                    <h1>Histórico de palestras</h1>
                </div>

                <S.PerfilLectureHistoricContent>
                    <LectureContainer onlyUser />
                </S.PerfilLectureHistoricContent>
            </S.PerfilContainer>
        </div>
    );
};
