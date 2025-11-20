import React from 'react';

const TabelaPrecos = () => {
  const precos = [
    { servico: "Corte", valor: "40,00" },
    { servico: "Barba", valor: "40,00" },
    { servico: "Corte + Barba", valor: "70,00" },
    { servico: "Pézinho", valor: "10,00" },
    { servico: "Pigmentação", valor: "15,00" },
    { servico: "Matização", valor: "15,00" },
    { servico: "Alisamento", valor: "30,00" },
    { servico: "Luzes", valor: "70,00" },
    { servico: "Nevou", valor: "100,00" },
  ];

  return (
    <div className="tabela-precos-container">
      <h3 className="tabela-precos-titulo">Tabela de Preços</h3>
      <div className="lista-precos">
        {precos.map((item, index) => (
          <div key={index} className="item-preco">
            <span className="servico-nome">{item.servico}</span>
            <span className="servico-valor">R$ {item.valor}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabelaPrecos;
