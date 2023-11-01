import { type Icon } from '@phosphor-icons/react';
import { InputHTMLAttributes } from 'react';

type TInputWithIconProps = {
  icon: Icon;
  iconClassNames?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithIcon({
  icon: Icon,
  iconClassNames,
  ...props
}: TInputWithIconProps) {
  return (
    <div className="relative">
      <Icon
        className={`absolute bottom-0 left-2 top-0 h-full w-5 transition-none ${iconClassNames}`}
      />
      <input className="pl-8" {...props} />
    </div>
  );
}
