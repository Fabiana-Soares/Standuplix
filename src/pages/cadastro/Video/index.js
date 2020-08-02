import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefaulf';

function CadastroVideo() {
    return (
      <PageDefault>
        <h1>Cadastro de video</h1>

        <Link to ="/cadastro/categoria">
          Cadastro Categoria

        </Link>
      </PageDefault>
    )
  }

export default CadastroVideo;  
