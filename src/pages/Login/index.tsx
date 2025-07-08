import React, { useState } from 'react';
import { message } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './styles';
import axios from 'axios';

type Inputs = {
    nome?: string;
    matricula?: string;
    email?: string;
    senha: string;
    confirmPassword?: string;
    identificador?: string;
};

export const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (isSignUp) {
                if (data.senha !== data.confirmPassword) {
                    message.warning("As senhas não coincidem.");
                    return;
                }

                await axios.post(`${process.env.REACT_APP_API}/api/usuarios`, {
                    nome: data.nome,
                    matricula: data.matricula,
                    email: data.email,
                    senha: data.senha,
                    idPerfil: 2
                });

                message.success('Usuário cadastrado com sucesso!');
            } else {
                await axios.patch(`${process.env.REACT_APP_API}/api/usuarios`, {
                    identificador: data.identificador,
                    senha: data.senha,
                });

                message.success('Login realizado com sucesso!');
            }

            reset();
        } catch (error: any) {
            console.error(error);
            message.error(error.response?.data?.erro || 'Erro ao processar a solicitação');
        }
    };

    return (
        <S.LoginContainer>
            <S.FormBox>
                <S.ToggleButtons>
                    <button
                        className={!isSignUp ? 'active' : ''}
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSignUp(false);
                        }}
                    >
                        Entrar
                    </button>
                    <button
                        className={isSignUp ? 'active' : ''}
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSignUp(true);
                        }}
                    >
                        Cadastrar
                    </button>
                </S.ToggleButtons>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {isSignUp ? (
                        <>
                            <S.InputGroup>
                                <label>Nome completo</label>
                                <input type="text" {...register('nome', { required: true })} placeholder="Digite seu nome" />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label>Matrícula</label>
                                <input type="text" {...register('matricula', { required: true })} placeholder="Digite sua matrícula" />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label>Email</label>
                                <input type="email" {...register('email', { required: true })} placeholder="Digite seu email" />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label>Senha</label>
                                <input type="password" {...register('senha', { required: true })} placeholder="Crie uma senha" />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label>Confirmar senha</label>
                                <input type="password" {...register('confirmPassword', { required: true })} placeholder="Confirme sua senha" />
                            </S.InputGroup>
                        </>
                    ) : (
                        <>
                            <S.InputGroup>
                                <label>Email ou Matrícula</label>
                                <input type="text" {...register('identificador', { required: true })} placeholder="Digite seu email ou matrícula" />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label>Senha</label>
                                <input type="password" {...register('senha', { required: true })} placeholder="Digite sua senha" />
                            </S.InputGroup>
                        </>
                    )}

                    <S.SubmitButton type="submit">
                        {isSignUp ? 'Cadastrar' : 'Entrar'}
                    </S.SubmitButton>
                </form>
            </S.FormBox>
        </S.LoginContainer>
    );
};
