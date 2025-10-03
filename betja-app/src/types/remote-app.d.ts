// host - ./src/types/remote.d.ts
// Look at making this automated in the future
declare module "component_library/Button" {
  const Button: React.FC<{
    text: string;
    onClick?: () => void;
  }>;
  export default Button;
}

declare module "component_library/Header" {
  const Header: React.FC;
  export default Header;
}

declare module "component_library/SignUpShell" {
  import { ComponentType } from "react";

  interface SignUpShellProps {
    isOpen: boolean;
    onClose: () => void;
    mode?: "single" | "multi";
  }

  const SignUpShell: ComponentType<SignUpShellProps>;
  export default SignUpShell;
}

declare module "component_library/useCounter" {
  interface UseCounterReturn {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: (value: number) => void;
  }

  export const useCounter: (initialValue?: number) => UseCounterReturn;
}

