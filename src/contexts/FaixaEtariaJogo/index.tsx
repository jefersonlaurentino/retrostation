// import { createContext, useContext, useState, ReactNode } from "react";

// // Define o tipo para o contexto, com a idade e uma função para atualizá-la
// type IdadeContextProps = {
//   idade: number;
//   setIdade: (idade: number) => void;
// }

// // Cria o contexto com valores padrão (inicialmente `0` para a idade)
// const FaixaEtaria = createContext<IdadeContextProps | number>(0);

// // Define o provider que envolverá os componentes que usarão o contexto
// const FaixaEtariaProvider = ({ children }: { children: ReactNode }) => {
//   const [idade, setIdade] = useState<number>(0);

//   return (
//     <FaixaEtaria.Provider value={{ idade , setIdade }}>
//       {children}
//     </FaixaEtaria.Provider>
//   );
// };
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

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

  return (
    <FaixaEtaria.Provider value={{ idadePermitida , setIdadePermitida }}>
      {children}
    </FaixaEtaria.Provider>
  );
};

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
