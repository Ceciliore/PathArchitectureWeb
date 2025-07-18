import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import foto1 from '../../assets/imgs/foto1.png';
import foto2 from '../../assets/imgs/foto2.png';
import { Button, Carousel, Input, Space } from 'antd';

type Comentario = {
    id: number;
    conteudo: string;
    idUsuario: number;
    idPalestra: number;
    createdAt: string;
    Usuario: {
        nome: string
    },
    usuario: {
        nome: string
    };
};

const contentStyle: React.CSSProperties = {
    margin: 0,
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const LectureDetail = () => {
    const location = useLocation();
    const { id } = useParams();
    const palestra = location.state;

    const [usuarios, setUsuarios] = useState<{ id: number, nome: string }[]>([]);
    const [comentarios, setComentarios] = useState<Comentario[]>([]);

    const [novoComentario, setNovoComentario] = useState('');

    const fetchComentarios = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/comentarios`);
            const comentariosDaPalestra = res.data.filter((c: Comentario) => String(c.idPalestra) === id);
            setComentarios(comentariosDaPalestra);
        } catch (err) {
            console.error('Erro ao buscar comentários:', err);
        }
    };

    const fetchUsuarios = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/usuarios`);
            setUsuarios(res.data); // supondo que retorna [{id, nome}, ...]
        } catch (err) {
            console.error('Erro ao buscar usuários:', err);
        }
    };

    const enviarComentario = async () => {
        if (!novoComentario.trim()) return;

        const usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
        console.log(usuario)
        try {
            await axios.post(`${process.env.REACT_APP_API}/api/comentarios`, {
                conteudo: novoComentario,
                idUsuario: usuario.id,
                idPalestra: id
            });

            await axios.post(`${process.env.REACT_APP_API}/api/presencas`, {
                idUsuario: usuario.id,
                idPalestra: id
            });

            setNovoComentario('');
            fetchComentarios();
        } catch (err: any) {
            console.error('Erro ao enviar comentário ou marcar presença:', err);
        }
    };

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    useEffect(() => {
        fetchComentarios();
        fetchUsuarios();
    }, [id]);

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ backgroundColor: '#f3f3f3', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
                <h2 style={{margin: '0'}}>{palestra.titulo}</h2>

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
                    <p>{palestra.data} - {palestra.horario}</p>
                </div>
                <Carousel afterChange={onChange} arrows>
                    <div>
                        <img src={foto1} alt={palestra.titulo} style={contentStyle} />
                    </div>
                    <div>
                        <img src={foto2} alt={palestra.titulo} style={contentStyle} />
                    </div>
                </Carousel>

            </div>
            <div style={{ backgroundColor: '#f3f3f3', padding: '1rem', borderRadius: '8px' }}>

                <h2>Comentários</h2>

                <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '1rem' }}>
                    {comentarios.length > 0 ? (
                        comentarios.map((comentario) => {
                            const usuario = usuarios.find(u => u.id === comentario.idUsuario);
                            return (
                                <div key={comentario.id} style={{ marginBottom: '1rem', backgroundColor: '#cec6c63b', padding: '0.5rem', borderRadius: '6px' }}>
                                    <strong>{usuario?.nome || `Usuário ${comentario.idUsuario}`}</strong>
                                    <p style={{ margin: 0 }}>{comentario.conteudo}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>Nenhum comentário ainda.</p>
                    )}
                </div>

                <Space.Compact style={{ width: '100%' }}>
                    <Input
                        value={novoComentario}
                        onChange={(e) => setNovoComentario(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                enviarComentario();
                            }
                        }}
                        placeholder="Escreva um comentário..."
                    />
                    <Button onClick={enviarComentario} type="primary">
                        {`>`}
                    </Button>
                </Space.Compact>
            </div>
        </div>
    );
};
