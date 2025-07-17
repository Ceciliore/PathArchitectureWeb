import React from 'react';
import { Button, message, Modal } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

type Inputs = {
    titulo: string;
    local: string;
    palestrante: string;
    data: string;
    horas: string;
};

type CreateLectureProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const CreateLecture = ({ open, setOpen }: CreateLectureProps) => {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios
            .post(`${process.env.REACT_APP_API}/api/palestras`, {
                titulo: data.titulo,
                local: data.local,
                palestrante: data.palestrante,
                data: data.data,
                horario: data.horas,
            })
            .then(() => {
                message.success('Palestra registrada com sucesso!');
                reset();
                setOpen(false);
                navigate('/');
            })
            .catch(() => {
                message.error('Erro ao registrar palestra');
            });
    };

    return (
        <Modal
            title="Criar palestra"
            open={open}
            onCancel={() => setOpen(false)}
            footer={
                <Button
                    htmlType="submit"
                    onClick={handleSubmit(onSubmit)}
                    type="primary"
                    style={{ marginTop: 16 }}
                >
                    Registrar
                </Button>
            }
        >
            <form>
                <S.InputStringLecture>
                    <span>Título</span>
                    <S.InputLecture placeholder="Título da palestra" {...register('titulo')} />
                </S.InputStringLecture>
                <S.InputStringLecture>
                    <span>Local</span>
                    <S.InputLecture placeholder="Local da palestra" {...register('local')} />
                </S.InputStringLecture>
                <S.InputStringLecture>
                    <span>Palestrante</span>
                    <S.InputLecture placeholder="Nome do palestrante" {...register('palestrante')} />
                </S.InputStringLecture>
                <S.InputStringLecture>
                    <span>Data</span>
                    <S.InputLecture placeholder="Dia da palestra" {...register('data')} />
                </S.InputStringLecture>
                <S.InputStringLecture>
                    <span>Horário</span>
                    <S.InputLecture placeholder="Horário da palestra" {...register('horas')} />
                </S.InputStringLecture>
            </form>
        </Modal>
    );
};
