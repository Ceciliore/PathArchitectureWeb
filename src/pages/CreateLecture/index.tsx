import React from 'react';
import { Button, Modal } from 'antd';
import { useForm, SubmitHandler } from "react-hook-form";

import * as S from './styles'


type Inputs = {
    titulo: string,
    local: string,
    palestrante: string,
    horas: any
};

export const CreateLecture = () => {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    };

    return (
        <Modal
            title="Criar palestra"
            open={true}
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
                    <span>
                        Título
                    </span>
                    <S.InputLecture placeholder="Titulo da palestra" {...register("titulo")} />
                </S.InputStringLecture>
                <S.InputStringLecture>
                    <span>
                        Local
                    </span>
                    <S.InputLecture placeholder='Local da palestra' {...register("local")} />
                </S.InputStringLecture>
                <S.InputStringLecture>
                    <span>
                        Palestrante
                    </span>
                    <S.InputLecture placeholder="Nome do palestrante" {...register("palestrante")} />
                </S.InputStringLecture>
                <S.InputStringLecture>
                    <span>
                        Horário
                    </span>
                    <S.InputLecture placeholder="Horário da palestra" {...register("horas")} />
                </S.InputStringLecture>
            </form>
        </Modal>
    );
};
