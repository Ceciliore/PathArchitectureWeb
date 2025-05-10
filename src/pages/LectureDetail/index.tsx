import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import * as S from './styles'


export const LectureDetail = () => {
    const location = useLocation();
    const { id } = useParams();
    const palestra = location.state;

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{palestra.nome}</h1>

            <div style={{ marginBottom: '1rem' }}>
                <strong>Palestrante:</strong>
                <p>{palestra.palestrante}</p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <strong>Local:</strong>
                <p>{palestra.local}</p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <strong>Horário:</strong>
                <p>{palestra.horario}</p>
            </div>

            <div style={{ marginBottom: '1rem', color: '#aaa' }}>
                <strong>ID da palestra:</strong>
                <p>{id}</p>
            </div>
        </div>
    );
};
