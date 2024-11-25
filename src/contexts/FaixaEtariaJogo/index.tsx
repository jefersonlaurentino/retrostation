'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import livre from "../../../public/image/faixaEtaria/livre.jpg";
import maior10 from "../../../public/image/faixaEtaria/maior10.jpg";
import maior12 from "../../../public/image/faixaEtaria/maior12.jpg";
import maior14 from "../../../public/image/faixaEtaria/maior14.jpg";
import maior16 from "../../../public/image/faixaEtaria/maior16.jpg";
import maior18 from "../../../public/image/faixaEtaria/maior18.jpg";

// Definir o tipo para o contexto
interface AgeContextType {
  idadePermitida: number;
  setIdadePermitida: (idade: number) => void;
}

// Criar o contexto
const FaixaEtaria = createContext<AgeContextType | null>(null);

// Provedor do contexto
const FaixaEtariaProvider = ({ children }: { children: ReactNode }) => {
  const [ idadePermitida , setIdadePermitida] = useState<number>(0);

  useEffect(()=>{
    const getIdadePermitida = window.sessionStorage.getItem('idadePermitida')
    if (getIdadePermitida) {
      setIdadePermitida(Number(getIdadePermitida))
    }
  },[])

  useEffect(()=>{
    if (idadePermitida != 0) {
      window.sessionStorage.setItem('idadePermitida', idadePermitida.toString())
    }
  },[idadePermitida])

  return (
    <FaixaEtaria.Provider value={{ idadePermitida , setIdadePermitida }}>
      {children}
    </FaixaEtaria.Provider>
  );
};

export const verificaFaixaEtaria = (faixaEtaria: string) =>{
  const faixa = faixaEtaria
  let classificacao
  if (faixa == "livre") {
      classificacao = livre
  } else if (faixa == "10") {
      classificacao = maior10
  } else if (faixa == "12") {
      classificacao = maior12
  } else if (faixa == "14") {
      classificacao = maior14
  } else if (faixa == "16") {
      classificacao = maior16
  } else {
      classificacao = maior18
  }

  return classificacao
}

// Hook para usar o contexto
const useAgeContext = () => {
  const context = useContext(FaixaEtaria);
  if (!context) {
    throw new Error('useAgeContext deve ser usado dentro de AgeProvider');
  }
  return context;
};


// Hook para acessar o contexto
export { FaixaEtaria , FaixaEtariaProvider , useAgeContext }
