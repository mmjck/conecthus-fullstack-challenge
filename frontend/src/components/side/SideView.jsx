import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryButton from "../button/SecondaryButton";

const SideView = ({ data, open, onClose }) => {
  const label = ({ value }) => {
    return (
      <span className="font-normal text-[12px] font-manrope text-black tracking-normal text-left">
        {value}
      </span>
    );
  };

  const value = ({ v }) => {
    return (
      <span className="font-normal text-[12px] font-manrope text-black tracking-normal text-left">
        {v}
      </span>
    );
  };

  return (
    <div
      className={`fixed right-0 top-0 h-screen py-10 px-5 transition-transform duration-300 bg-white ${
        open ? "translate-x-0 w-[400px]" : "-translate-x-full w-0"
      }`}
    >
      <div className="h-full  flex grid grid-cols-1 content-between">
        <div>
          <div className="flex justify-between">
            <span className="font-normal text-[16px] font-manrope text-[#0B2B25] tracking-normal text-left">
              Visualizar Usuário
            </span>
            <FontAwesomeIcon icon={faClose} size="sl" onClick={onClose} />
          </div>

          <div className="flex">
            <div className="mb-1">
              <span className="font-normal text-[12px] font-manrope text-[#0B2B25] tracking-normal text-left">
                Dados do Usuário
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 content-between">
            <div className="grid grid-cols-1 gap-2 content-between">
              <div>{label({ value: "Nome" })}</div>
              <div>{value({ v: data.name })}</div>
            </div>
            <div className="grid grid-cols-1 gap-2 content-between">
              <div>{label({ value: "Matricula" })}</div>
              <div>{value({ v: data.registration })}</div>
            </div>
            <div className="grid grid-cols-1 gap-2 content-between">
              <div>{label({ value: "E-mail" })}</div>
              <div>{value({ v: data.email })}</div>
            </div>
          </div>

          <div className="flex mt-10">
            <div className="mb-1">
              <span className="font-normal text-[12px] font-manrope text-[#0B2B25] tracking-normal text-left">
                Detalhes
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 content-between">
            <div className="grid grid-cols-1 gap-2 content-between">
              <div>{label({ value: "Data de criação" })}</div>
              <div>{value({ v: "-" })}</div>
            </div>
            <div className="grid grid-cols-1 gap-2 content-between">
              <div>{label({ value: "Última edição" })}</div>
              <div>{value({ v: "-" })}</div>
            </div>
          </div>
        </div>
        <div className="h-full px-20 items-center ">
          <SecondaryButton title={"Fechar"} onClick={onClose}></SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default SideView;
