// host - ./src/types/remote.d.ts
// Look at making this automated in the future
declare module "remote_app/Button" {
  const Button: React.FC<{
    text: string;
    onClick?: () => void;
  }>;
  export default Button;
}

declare module "remote_app/Header" {
  const Header: React.FC;
  export default Header;
}

declare module "remote_app/SignUpShell" {
  import { ComponentType } from "react";

  interface SignUpShellProps {
    isOpen: boolean;
    onClose: () => void;
    mode?: "single" | "multi";
  }

  const SignUpShell: ComponentType<SignUpShellProps>;
  export default SignUpShell;
}

