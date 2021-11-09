import {ChangeEvent, ChangeEventHandler, useCallback, useState} from "react";

type ElementSupport = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

const useInputChange = (initial: string|number): [string|number, ChangeEventHandler] => {
  const [value, setValue] = useState(initial)

  const handleChange = useCallback((e: ChangeEvent<ElementSupport>) => {
    setValue(e.target.value)
  }, [])

  return [
    value,
    handleChange
  ]
}

export default useInputChange
