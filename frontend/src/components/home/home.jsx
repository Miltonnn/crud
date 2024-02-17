/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Main from "../template/main";


export default props =>

<Main icon="home" title="Início" subtitle="Projeto simples com React.">
    <div className="display-4 text-success">Bem Vindo!</div>
    <hr />
    <p className="mb">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
    <p className="text-danger"><strong>CRUD</strong></p>
</Main>  