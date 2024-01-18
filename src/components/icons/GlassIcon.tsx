import { SVGProps } from "react"

const GlassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 21"
    width={20}
    height={21}
    fill="#4b5563"
    {...props}
  >
    <path d="M17.75 17.219c.313.312.313.781 0 1.062a.622.622 0 0 1-.5.219.753.753 0 0 1-.563-.219L12.5 14.094A6.389 6.389 0 0 1 8.469 15.5C4.906 15.5 2 12.594 2 9c0-3.563 2.875-6.5 6.469-6.5 3.562 0 6.5 2.938 6.5 6.5 0 1.531-.5 2.938-1.406 4.031l4.187 4.188ZM3.5 9c0 2.781 2.219 5 5 5 2.75 0 5-2.219 5-5 0-2.75-2.25-5-5-5-2.781 0-5 2.25-5 5Z" />
  </svg>
)

export default GlassIcon
