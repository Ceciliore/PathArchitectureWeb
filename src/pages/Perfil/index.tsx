import React from 'react';
import { Image } from 'antd';
import perfilUsuario from '../../assets/imgs/perfil-usuario.png';
import * as S from './styles'
import { LectureContainer } from '../../components/LectureContainer';


export const PerfilPage = () => {
    return (
        <div>
            <S.PerfilContainer>
                <S.PerfilContent>
                    <Image
                        width={255}
                        src={perfilUsuario}
                        style={{ borderRadius: '50%' }}
                    />
                    <S.PerfilTopContent>
                        <h1>Eduardo Andrade Torres Junior</h1>
                        <S.PerfilTopInsideInformationContent>
                            <span>
                                Matricula: 15798321938
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
                                Email: eduardo.torres@cefet-rj.br
                            </span>
                        </S.PerfilTopInsideInformationContent>
                    </S.PerfilTopContent>
                </S.PerfilContent>
                <S.PerfilLectureHistoricContent>
                    <div>
                        <h1>Historico de palestras</h1>
                    </div>
                    <LectureContainer />
                </S.PerfilLectureHistoricContent>

            </S.PerfilContainer>
        </div>
    );
};
