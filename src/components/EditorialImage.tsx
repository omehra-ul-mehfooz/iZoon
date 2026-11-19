import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  imgClassName?: string;
  className?: string;
  fallbackBg?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[4/3]',
  imgClassName = 'object-center',
  className = '',
  fallbackBg = 'bg-[#EFE7DC]',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={className}>
      <div className={`relative w-full overflow-hidden ${aspectClass} ${fallbackBg}`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover ${imgClassName}`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#5A4D52] gap-2">
            <ImageIcon className="w-6 h-6 opacity-60" aria-hidden="true" />
            <span className="text-xs max-w-xs">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs font-serif italic leading-relaxed opacity-80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
