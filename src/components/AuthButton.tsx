import { useCallback } from 'react';

export interface AuthButtonProps {
  userAuthStatus: boolean;
  isKernelLoaded: boolean;
  bootloaderLoaded: boolean;
  login: () => void;
}

export default function AuthButton({
  userAuthStatus,
  isKernelLoaded,
  bootloaderLoaded,
  login,
}: AuthButtonProps) {
  const buttonText = useCallback(() => {
    if (!bootloaderLoaded) return 'Initializing Kernel...';
    if (!userAuthStatus) return 'Login';
    if (userAuthStatus && !isKernelLoaded) return 'Loading You Kernel...';
    return 'User Authenticated';
  }, [userAuthStatus, isKernelLoaded, bootloaderLoaded]);
  return (
    <div>
      {userAuthStatus && isKernelLoaded ? (
        <button className="bg-gray-500 h-8 w-8 rounded-full">
          <span>U</span>
        </button>
      ) : (
        <button
          disabled={!bootloaderLoaded}
          onClick={login}
          className="text-white font-bold uppercase"
        >
          {buttonText()}
        </button>
      )}
    </div>
  );
}
