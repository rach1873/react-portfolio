import Project from "../components/Project";
import weatherapp from "../images/projectimg/weatherapp.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import qr from "../images/qr.png";

const ReactNative = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex flex-col items-center text-white p-8 bg-gradient-to-r from-blue-600 to-emerald-600">
      <p className="text-lg mb-9">
        Scan the QR below to view Project.
        <span className="text-red-400">
          This app can only be viewed on an IOS device
        </span>
      </p>
      <div>
        <img src={qr} alt="QR Code" className="w-52 h-52" />
      </div>
      <BackButton />
    </main>
  );
};

export default ReactNative;
