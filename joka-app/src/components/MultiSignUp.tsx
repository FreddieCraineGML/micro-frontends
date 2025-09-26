import React, { useState } from "react";

const RemoteSignUp = React.lazy(() => import("component_library/SignUpShell"));

export const MultiSignUp = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <React.Suspense fallback={<div>Loading signup...</div>}>
        <RemoteSignUp
          isOpen={open}
          onClose={() => setOpen(false)}
          mode="multi"
        />
      </React.Suspense>
    </div>
  );
};
