import Frame from "./Frame"
import { Button } from "../ui/button"
import fabric_image from "../../assets/fabric-image.jpg";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import FrameLayout from "./FrameLayout";

const InputFrame = () => {
  const { setIsProcessing, setOutputImage, setQrCodeText, inputImage, isProcessing }: any = useContext(AppContext)

  const handleProcess = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setOutputImage(fabric_image);
      setQrCodeText("458098448590840384");
      setIsProcessing(false);
    }, 2000);
  };
  return (
    <FrameLayout>
      <Frame image={inputImage} name="Input Frame" />
      <Button
        onClick={handleProcess}
        disabled={isProcessing}
        className="mt-2 bg-[#F92609] text-white px-4 py-2 rounded"
      >
        {isProcessing ? "Processing..." : "Process"}
      </Button>
    </FrameLayout>
  )
}

export default InputFrame
