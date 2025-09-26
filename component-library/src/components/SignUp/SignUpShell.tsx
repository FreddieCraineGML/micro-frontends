import { useState } from "react";
import SignUp from "./SignUp";

export type SignUpMode = "single" | "multi";

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

interface SignUpShellProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: SignUpMode;
}

export default function SignUpShell({
  isOpen,
  onClose,
  mode = "single",
}: SignUpShellProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <SignUp
      mode={mode}
      isOpen={isOpen}
      onClose={onClose}
      step={step}
      submitted={submitted}
      formData={formData}
      onChange={handleChange}
      onNext={handleNext}
      onBack={handleBack}
      onSubmit={handleSubmit}
    />
  );
}
