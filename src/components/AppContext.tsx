import { createContext, useState } from "react"
import fabric_image from "../assets/fabric-image.jpg";

export const AppContext = createContext(null)
const AppProvider = ({ children }: any) => {
  const [inputImage] = useState(fabric_image);
  const [outputImage, setOutputImage]: any = useState(null);
  const [qrCodeText, setQrCodeText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const value: any = { outputImage, inputImage, setOutputImage, qrCodeText, setQrCodeText, isProcessing, setIsProcessing }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
