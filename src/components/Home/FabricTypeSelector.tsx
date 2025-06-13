import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const FabricTypeSelector = () => {
  return (<div className="">
    <h1 className="text-[#F92609]">Fabric Type:</h1>
    <Select >
      <SelectTrigger className="w-[180px] border-1 border-gray-400">
        <SelectValue placeholder="Solid" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="solid" className="hover:bg-[#F92609]">Solid</SelectItem>
        <SelectItem value="printed">Printed</SelectItem>
      </SelectContent>
    </Select>
  </div>)
}

export default FabricTypeSelector
