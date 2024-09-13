import React from "react";

const EmptyState = () => {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-[16px] leading-[33px] font-manrope text-[#0B2B25] tracking-normal text-center opacity-100">
        Nenhum Usuário Registrado
      </span>
      <span className="text-[12px] leading-[33px] font-manrope text-[#0B2B25] tracking-normal text-center opacity-100">
        Clique em “Cadastrar Usuário” para começar a cadastrar.
      </span>
    </div>
  );
};

export default EmptyState;
