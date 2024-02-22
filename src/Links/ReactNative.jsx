import Project from "../components/Project";
import weatherapp from "../images/projectimg/weatherapp.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import qr from "../images/qr.png";

const ReactNative = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex flex-col items-center text-white p-8 bg-gradient-to-r from-blue-600 to-emerald-600">
      {/* <div className="mb-9">
        <p className="text-lg">
          Scan the QR below to view Project.
          <span className="text-red-400">
            This app can only be viewed on an IOS device
          </span>
        </p>
        
      </div> */}
      <div className="text-center">
        <p className="mb-8">
          Scan the QR code to view project.
          <span className="text-red-300 underline">
            This app can only be viewed on an IOS device.
          </span>
        </p>
        <p>
          App Description: This app allows you to track spending in real time.
          Whether at the grocery store or shopping mall, you can see the exact
          amount of money spent without the hassle of mental math or
          calculators. And the best part...it includes sales tax! Just enter the
          zip code and the rest is history.
        </p>
      </div>
      <div className="mt-12">
        <img src={qr} alt="QR Code" className="w-52 h-52" />
      </div>
      <BackButton />
    </main>
  );
};

export default ReactNative;
