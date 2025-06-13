import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const FabricSizeSelector = () => {
  return (<div className="">
    <h1 className="text-[#F92609]">Fabric Size:</h1>
    <Select >
      <SelectTrigger className="w-[180px] border-1 border-gray-400">
        <SelectValue placeholder="50" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="50">50cm</SelectItem>
        <SelectItem value="100">100cm</SelectItem>
        <SelectItem value="150">150cm</SelectItem>
      </SelectContent>
    </Select>
  </div>)
}

export default FabricSizeSelector;
