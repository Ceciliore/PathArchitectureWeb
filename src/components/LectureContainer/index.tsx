import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useRouter from '../../hooks/useRouter';
import * as S from './styles';

type Palestra = {
    id: number;
    titulo: string;
    palestrante: string;
    local: string;
    horario: string;
};

export const LectureContainer = () => {
    const [palestras, setPalestras] = useState<Palestra[]>([]);
    const { push } = useRouter();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/api/palestras`)
            .then((res) => setPalestras(res.data))
            .catch((err) => console.error('Erro ao buscar palestras:', err));
    }, []);
console.log (palestras);
    return (
        <>
            {palestras.map((palestra, idx) => (
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
