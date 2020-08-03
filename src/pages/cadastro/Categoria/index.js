import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefaulf';
import FormField from '../../../components/FormField';
import TextArea from '../../../components/FormField/TextArea';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao:'',
    cor:'',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]:valor,
    });
  }
  function hanleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
      );
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais);
        }}
        >
          <FormField
            label="Nome da categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={hanleChange}
          />

            <TextArea type="text" />
          {/* <div>
           <label>
            Descrição:
            <textarea 
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={hanleChange}
              />
          </label> */}

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={hanleChange}
          />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to ="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;  