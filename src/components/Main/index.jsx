import React, { useState, useMemo, useCallback } from "react";
import Heading from "../Heading/index";
import Input from "../Input/index";
import Table from "../Table/index";
import styles from "./styles.module.css";
import { gerarLista } from "../../utils/geradorDeNomeEEmail";
import Button from '../Button/index'

const Main = () => {
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroEmail, setFiltroEmail] = useState("");
  const [lista, setLista] = useState(gerarLista());

  const listaFiltrada = useMemo(() => {
  return lista.filter((item) => {
    const nome = filtroNome
      ? item.nome.toLowerCase().includes(filtroNome.toLowerCase())
      : true;

    const email = filtroEmail
      ? item.email.toLowerCase().includes(filtroEmail.toLowerCase())
      : true;

    return nome && email;
  });
}, [lista, filtroNome, filtroEmail]);

  const regenerarLista = useCallback(() => {
    setLista(gerarLista());
  }, []);

  console.log(filtroNome, filtroEmail)

  return (
    <main className={styles.main}>
      <Heading>Lista para filtragens</Heading>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Escreva seu nome"
        text="Nome"
        onChange={(e) => setFiltroNome(e.target.value)}
        value={filtroNome}
      />
      <Input
        type="text"
        id="email"
        name="email"
        placeholder="Escreva seu email"
        text="Email"
        onChange={(e) => setFiltroEmail(e.target.value)}
        value={filtroEmail}
      />

      <Button text='Gerar outra lista' regenerarLista={regenerarLista}/>
      <Table listaFiltrada={listaFiltrada} />
    </main>
  );
};

export default Main;
