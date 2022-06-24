import { useState, useEffect } from 'react';
import { kernelLoaded } from 'libkernel/dist/auth';
import { init, loginComplete, logoutComplete, openAuthWindow } from 'libkernel';

export default function useKernelAuth() {
  const [userAuthStatus, setUserAuthStatus] = useState(false);
  const [bootloaderLoaded, setBootloaderLoaded] = useState(false);
  const [isKernelLoaded, setIsKernelLoaded] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    await init();
    setBootloaderLoaded(true);
    loginComplete().then(() => {
      setUserAuthStatus(true);
    });
    kernelLoaded().then(() => {
      setIsKernelLoaded(true);
    });
    logoutComplete().then(() => {
      setUserAuthStatus(false);
    });
  };

  const login = async () => {
    openAuthWindow();
  };

  return { userAuthStatus, bootloaderLoaded, isKernelLoaded, login };
}
