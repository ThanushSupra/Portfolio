import { type ReactNode, type ElementType } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeSectionProps {
  as?: ElementType;
  id?: string;
  'aria-label'?: string;
  className?: string;
  children: ReactNode;
}

const FadeSection = ({
  as: Tag = 'section',
  className = '',
  children,
  ...rest
}: FadeSectionProps) => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: false });

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-300 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default FadeSection;
