import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

type Inputs = {
    nome?: string;
    matricula?: string;
    email?: string;
    senha: string;
    confirmPassword?: string;
    identificador?: string;
};

export const Login = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [isAluno, setIsAluno] = useState(true);
    const [messageApi, contextHolder] = message.useMessage();

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
                    messageApi.warning("As senhas não coincidem.");
                    return;
                }

                await axios.post(`${process.env.REACT_APP_API}/api/usuarios`, {
                    nome: data.nome,
                    matricula: data.matricula,
                    email: data.email,
                    senha: data.senha,
                    idPerfil: isAluno ? 2 : 1
                });
                setIsSignUp(false)
                messageApi.success('Usuário cadastrado com sucesso!');
            } else {
                const response = await axios.patch(`${process.env.REACT_APP_API}/api/usuarios`, {
                    identificador: data.identificador,
                    senha: data.senha,
                });

                localStorage.setItem('usuarioLogado', JSON.stringify(response.data.usuario));
                messageApi.success('Login realizado com sucesso!');
                navigate('/');
            }

            reset();
        } catch (err: any) {
            if (axios.isAxiosError(err) && err.response) {
                const backendMsg = err.response.data?.erro || 'Erro ao fazer login';
                messageApi.error(backendMsg);
            } else {
                messageApi.error('Erro inesperado ao tentar fazer login.');
            }
        }
    };

    return (
        <>
            {contextHolder}
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
                        <S.InputsUser>
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

                            <label>
                                <input
                                    type="checkbox"
                                    checked={isAluno}
                                    onChange={(e) => setIsAluno(e.target.checked)}
                                />
                                Sou aluno
                            </label>
                        </S.InputsUser>
                    ) : (
                        <S.InputsUser>
                            <S.InputGroup>
                                <label>Email ou Matrícula</label>
                                <input type="text" {...register('identificador', { required: true })} placeholder="Digite seu email ou matrícula" />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label>Senha</label>
                                <input type="password" {...register('senha', { required: true })} placeholder="Digite sua senha" />
                            </S.InputGroup>
                        </S.InputsUser>
                    )}

                    <S.SubmitButton type="submit">
                        {isSignUp ? 'Cadastrar' : 'Entrar'}
                    </S.SubmitButton>
                </form>
            </S.FormBox>
            </S.LoginContainer>
        </>
            
    );
};
