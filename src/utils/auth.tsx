export const getUsuarioLogado = () => {
    const dados = localStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
};

export const isLogado = () => {
    return !!localStorage.getItem('usuarioLogado');
};

export const logout = () => {
    localStorage.removeItem('usuarioLogado');
};

export const getPerfilUsuario = (): number | null => {
    const usuario = getUsuarioLogado();
    return usuario ?? null;
};

export const getNomeUsuario = (): string | null => {
    const usuario = getUsuarioLogado();
    return usuario?.nome ?? null;
};
