import { useEffect, RefObject } from "react"

type EventType = MouseEvent | TouchEvent
type Handler = (event: EventType) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) {
  useEffect(() => {
    const listener = (event: EventType) => {
      const target = event.target as Node
      const el = ref?.current

      if (!el || el.contains(target)) return

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}
