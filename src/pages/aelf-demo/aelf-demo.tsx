import { WebLoginProvider, init } from "@aelf-web-login/wallet-adapter-react";
import Connector from "../../components/Connector";
import { config } from "../../config/aelf";

const Aelf = () => {
  return (
    <>
      <Connector />
    </>
  );
};

export default function AelfDemo() {
  const bridgeAPI = init(config);

  return (
    <>
      <WebLoginProvider bridgeAPI={bridgeAPI}>
        <Aelf />
      </WebLoginProvider>
    </>
  );
}