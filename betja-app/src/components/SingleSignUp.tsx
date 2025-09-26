import React, { useState } from "react";

const RemoteSignUp = React.lazy(() => import("component_library/SignUpShell"));

export const SingleSignUp = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <React.Suspense fallback={<div>Loading signup...</div>}>
        <RemoteSignUp
          isOpen={open}
          onClose={() => setOpen(false)}
          mode="single"
        />
      </React.Suspense>
    </div>
  );
};
