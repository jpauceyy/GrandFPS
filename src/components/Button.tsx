import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-brand-accent text-white hover:bg-brand-light hover:box-glow': variant === 'primary',
        'bg-white/10 text-white hover:bg-brand-accent': variant === 'secondary',
        'border border-brand-accent text-brand-accent hover:bg-brand-accent/10': variant === 'outline',
        'hover:bg-white/10 text-gray-300 hover:text-white': variant === 'ghost',
        'h-9 px-4 text-sm': size === 'sm',
        'h-11 px-6 text-base': size === 'md',
        'h-14 px-8 text-lg': size === 'lg',
      },
      className
    );

    if (href) {
      return (
        <a
          ref={ref as any}
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as any}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
