import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRouter from '../../hooks/useRouter';
import { getUsuarioLogado } from '../../utils/auth';
import { HiArrowCircleRight } from "react-icons/hi";
import * as S from './styles';

type Palestra = {
    id: number;
    titulo: string;
    palestrante: string;
    local: string;
    horario: string;
    data: string;
};

type LectureContainerProps = {
    onlyUser?: boolean;
    title?: string;
};

export const LectureContainer = ({ title, onlyUser = false }: LectureContainerProps) => {
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
        <S.NewLectureContainer onlyUser={onlyUser}>
            <div>
                <span>{title}</span>
            </div>

            {palestras.map((palestra, idx) => (
                <S.NewLectureContent key={idx} onClick={() => push(`/palestra/${palestra.id}`, { state: palestra })}>
                    <S.NewLectureLeftContent>
                        <S.NewLectureHourLeftContent>
                            {palestra.horario}
                        </S.NewLectureHourLeftContent>
                        <S.NewLectureStringLeftContent>
                            <h4>{palestra.titulo}</h4>
                            <h5>{palestra.palestrante}</h5>
                            <h5>{palestra.data}</h5>
                        </S.NewLectureStringLeftContent>
                    </S.NewLectureLeftContent>
                    <S.NewLectureStringLeftContent>
                        <HiArrowCircleRight size={20} color="#000" />
                    </S.NewLectureStringLeftContent>
                </S.NewLectureContent>
            ))}
        </S.NewLectureContainer>
    );
};
