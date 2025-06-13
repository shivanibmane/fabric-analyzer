import InputFrame from "./InputFrame";
import InputSelector from "./FabricTypeSelector";
import OutputFrame from "./OutputFrame";
import FabricTypeSelector from "./FabricTypeSelector";
import FabricSizeSelector from "./FabricSizeSelector";

const fabricTypes = [
  { value: "solid", label: "Solid" },
  { value: "solid", label: "Solid" },]

const fabricSize = []

const Home = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <InputFrame />
        <OutputFrame />
      </div>
      <div className="px-4 flex flex-col gap-1">
        <FabricTypeSelector />
        <FabricSizeSelector />
      </div>
    </div>
  );
};

export default Home;
