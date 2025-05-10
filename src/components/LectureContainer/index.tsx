import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRouter from '../../hooks/useRouter';
import * as S from './styles';

type Palestra = {
    id: number;
    nome: string;
    palestrante: string;
    local: string;
    horario: string;
};

export const LectureContainer = () => {
    const [palestras, setPalestras] = useState<Palestra[]>([]);
    const { push } = useRouter();

    useEffect(() => {
        axios.get('/api/palestras')
            .then((res) => setPalestras(res.data))
            .catch((err) => console.error('Erro ao buscar palestras:', err));
    }, []);

    return (
        <>
            {palestras.map((palestra, idx) => (
                <S.LectureContainer
                    key={idx}
                    onClick={() => push(`/palestra/${idx}`, { state: palestra })}
                >
                    <S.LectureLeftContent>
                        <span>{palestra.horario}</span>
                    </S.LectureLeftContent>
                    <S.LectureMiddleContent>
                        <div><span>{palestra.nome}</span></div>
                        <div><span>{palestra.palestrante}</span></div>
                        <div><span>{palestra.local}</span></div>
                    </S.LectureMiddleContent>
                </S.LectureContainer>
            ))}
        </>
    );
};
