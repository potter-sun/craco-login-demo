/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useConnectWallet } from "@aelf-web-login/wallet-adapter-react";
import { notification } from "antd";

let connectTimer: any;

export default function Connector() {
  const { walletInfo, connectWallet } = useConnectWallet();

  useEffect(() => {
    async function tryToLogin() {
      if (walletInfo) {
        clearTimeout(connectTimer);

        console.log(walletInfo);
        return;
      }

      connectTimer = setTimeout(async () => {
        try {
          await connectWallet();
        } catch (err: any) {
          let description = "";
          if (err?.nativeError) {
            description =
              err.nativeError?.error + ":" + err.nativeError?.error_description;
          }
          notification.error({
            message: "Connect error: " + err?.message,
            description,
            duration: 60,
          });
        }
      }, 5000);
    }

    tryToLogin();
  }, [walletInfo]);

  return (
    <>
      <React.Fragment></React.Fragment>
    </>
  );
}
