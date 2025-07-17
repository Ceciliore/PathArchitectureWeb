import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRouter from '../../hooks/useRouter';
import { getUsuarioLogado } from '../../utils/auth';
import * as S from './styles';

type Palestra = {
    id: number;
    titulo: string;
    palestrante: string;
    local: string;
    horario: string;
};

type Presenca = {
    palestraId: number;
};

type LectureContainerProps = {
    onlyUser?: boolean;
};

export const LectureContainer = ({ onlyUser = false }: LectureContainerProps) => {
    const [palestras, setPalestras] = useState<Palestra[]>([]);
    const { push } = useRouter();

    useEffect(() => {
        const usuario = getUsuarioLogado();

        if (!usuario) {
            push('/login');
            return; // Para não continuar carregando dados
        }

        const { id } = usuario;

        const palestrasReq = axios.get<Palestra[]>(`${process.env.REACT_APP_API}/api/palestras`);
        const presencasReq = axios.get<{ idUsuario: number; idPalestra: number }[]>(
            `${process.env.REACT_APP_API}/api/presencas`
        );

        if (!onlyUser) {
            palestrasReq
                .then(res => {
                    setPalestras(res.data);
                })
                .catch(err => console.error('Erro ao buscar palestras:', err));
            return;
        }

        Promise.all([palestrasReq, presencasReq])
            .then(([palestrasRes, presencasRes]) => {
                const presencasDoUsuario = presencasRes.data.filter(p => p.idUsuario === id);
                const idsPresentes = new Set(presencasDoUsuario.map(p => p.idPalestra));
                const filtradas = palestrasRes.data.filter(p => idsPresentes.has(p.id));
                setPalestras(filtradas);
            })
            .catch(err => console.error('Erro ao buscar dados do usuário:', err));
    }, [onlyUser, push]);

    return (
        <>
            {palestras.map((palestra) => (
                <S.LectureContainer
                    key={palestra.id}
                    onClick={() => push(`/palestra/${palestra.id}`, { state: palestra })}
                >
                    <S.LectureLeftContent>
                        <span>{palestra.horario}</span>
                    </S.LectureLeftContent>
                    <S.LectureMiddleContent>
                        <div><span>{palestra.titulo}</span></div>
                        <div><span>{palestra.palestrante}</span></div>
                        <div><span>{palestra.local}</span></div>
                    </S.LectureMiddleContent>
                </S.LectureContainer>
            ))}
        </>
    );
};
