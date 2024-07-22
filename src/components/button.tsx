import { ReactNode, ComponentProps } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants =  tv({
  base: "flex font-medium items-center justify-center gap-2 rounded-lg",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "text-zinc-200 bg-zinc-800 hover:bg-zinc-700",
      tertiary: "flex-1 text-left",
    },
    size: {
      default: "px-5 py-2",
      full: "w-full py-2"
    }
  },

  defaultVariants: {
    variant: "primary",
    size: "default"
  }
})

interface ButtonProps extends 
ComponentProps<'button'>,
VariantProps<typeof buttonVariants> {

  children: ReactNode

}

export function Button({children, variant, size, ...props }: ButtonProps) {
  return(
    <button
      {...props}
      className={buttonVariants({ variant, size }) }
    >
      {children}
    </button>
  )
}