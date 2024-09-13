import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg p-6 w-[350px]">
        <h2 className="text-center font-bold mb-4">{title}</h2>
        <p className="text-center mb-4">{description}</p>
        <div className="flex justify-center mt-10 gap-x-2">
          <SecondaryButton title={"Não"} onClick={onClose}></SecondaryButton>
          <PrimaryButton
            title={"Sim"}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          ></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
