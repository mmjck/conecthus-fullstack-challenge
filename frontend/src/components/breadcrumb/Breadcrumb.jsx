import { SmallArowIcon } from "@/assets";

const Breadcrumb = ({ items }) => {
  const root = ({ label }) => {
    return (
      <li key={label} className="inline-flex items-center">
        <a href="/" className="inline-flex items-center text-[10px] text-black">
          {label}
        </a>
      </li>
    );
  };

  const leaves = ({ label }) => {
    return (
      <li key={label}>
        <div className="flex items-center">
          <SmallArowIcon />
          <span className="text-[10px] text-black ml-3">{label}</span>
        </div>
      </li>
    );
  };

  const buildItems = () => {
    return items.map((e, index) => {
      if (index == 0) {
        return root({ label: e });
      }

      return leaves({ label: e });
    });
  };
  return (
    <div>
      <ol className="inline-flex items-center space-x-2 ">{buildItems()}</ol>
    </div>
  );
};

export default Breadcrumb;
