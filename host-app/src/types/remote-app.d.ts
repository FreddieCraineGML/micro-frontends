// host - ./src/types/remote.d.ts
declare module "remote_app/Button" {
  const Button: React.FC<{
    text: string;
    onClick?: () => void;
    options?: Array<"login" | "signup" | "forgotPassword">;
  }>;
  export default Button;
}

declare module "remote_app/Header" {
  const Header: React.FC;
  export default Header;
}
