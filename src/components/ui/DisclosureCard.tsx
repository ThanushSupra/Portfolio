import type { ReactNode } from 'react';

interface DisclosureCardProps {
  title: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}

const DisclosureCard = ({ title, defaultOpen, children }: DisclosureCardProps) => (
  <details className="group" open={defaultOpen || undefined}>
    <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer select-none flex items-baseline gap-3">
      <span className="text-sm text-gray-500 transition-transform duration-200 group-open:rotate-90 shrink-0 translate-y-px">
        &#9656;
      </span>
      {title}
    </summary>
    <div className="mt-2 ml-6 space-y-1">{children}</div>
  </details>
);

export default DisclosureCard;
