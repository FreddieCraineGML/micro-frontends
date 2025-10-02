import type { FormData, SignUpMode } from "./SignUpShell";

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
  mode: SignUpMode;
  step: number;
  submitted: boolean;
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function SignUp({
  isOpen,
  onClose,
  mode,
  step,
  submitted,
  formData,
  onChange,
  onNext,
  onBack,
  onSubmit,
}: SignUpProps) {
  if (!isOpen) return null;

  const Step1 = (
    <>
      <input
        className="border p-2 rounded w-full mb-2"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={onChange}
      />
      <input
        className="border p-2 rounded w-full mb-2"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onChange}
      />
    </>
  );

  const Step2 = (
    <>
      <input
        className="border p-2 rounded w-full mb-2"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={onChange}
      />
    </>
  );

  const Step3 = (
    <>
      <input
        className="border p-2 rounded w-full mb-2"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={onChange}
      />
      <input
        className="border p-2 rounded w-full mb-2"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={onChange}
      />
    </>
  );

  const renderFields = () => {
    if (mode === "single") {
      return (
        <>
          {Step1}
          {Step2}
          {Step3}
        </>
      );
    }
    if (step === 1) return Step1;
    if (step === 2) return Step2;
    if (step === 3) return Step3;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card bg-neutral p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>

        {submitted ? (
          <div className="text-center">
            <p className="mb-4 text-green-700 font-medium">
              ✅ Signup successful using <strong>{mode}</strong> mode!
            </p>
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {renderFields()}

            <div className="flex justify-between mt-4">
              <button className="btn btn-primary" onClick={onClose}>
                Cancel
              </button>

              {mode === "multi" ? (
                <div>
                  {step > 1 && (
                    <button className="btn btn-primary" onClick={onBack}>
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button className="btn btn-primary" onClick={onNext}>
                      Next
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={onSubmit}>
                      Submit
                    </button>
                  )}
                </div>
              ) : (
                <button className="btn btn-primary" onClick={onSubmit}>
                  Submit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
