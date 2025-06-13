import { useContext } from "react"
import { AppContext } from "../AppContext"
import Frame from "./Frame"
import FrameLayout from "./FrameLayout"

const OutputFrame = () => {
  const { outputImage, qrCodeText, isProcessing }: any = useContext(AppContext)

  return (
    <FrameLayout>
      <Frame
        image={outputImage}
        name="Output Frame"
        fallback={
          <span className="text-gray-500">
            {isProcessing ? "Processing..." : "Output will appear here"}
          </span>
        }
      />
      {outputImage && (
        <p className="mt-2 break-all text-center">
          QR Code: {qrCodeText}
        </p>
      )}
    </FrameLayout>

  )
}

export default OutputFrame
