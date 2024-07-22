import { ReactNode, ComponentProps } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  base: "flex items-center gap-2",
  variants: {
    variant: {
      primary: "flex-1",
      secondary: "p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg",
      tertiary: "w-40"
    }
  },
  defaultVariants: {
    variant: "primary",
  }
})

interface InputProps extends
ComponentProps<'input'>,
VariantProps<typeof inputVariants> {
  icon?: ReactNode
}

export function Input({ icon, variant, disabled, ...props}: InputProps) {
  return(
    <div className={inputVariants({ variant })}>
      {icon && (
        <span className={`size-5 flex items-center text-zinc-400 ${variant === 'secondary' ? 'ml-2' : ''}`}>
          {icon}
        </span>
      )}
      <input
        {...props}
        disabled={disabled}
        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
      />
    </div>
  )
}