import React, { memo } from "react";

type Props = {
  message?: string;
};

const LoadingFallback: React.FC<Props> = memo(({ message = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Place the provided logo image at public/dzs-logo.png */}
      <img
        src="/logo-dzs.png"
        alt="DZS logo"
        width={112}
        height={112}
        loading="eager"
        decoding="async"
        className="w-28 h-28 object-contain animate-pulse"
      />
      {message ? (
        <p className="mt-4 text-sm text-gray-600">{message}</p>
      ) : null}
    </div>
  );
});

LoadingFallback.displayName = 'LoadingFallback';

export default LoadingFallback;
