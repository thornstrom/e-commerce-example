import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  useEffect(() => {
    var jsonValue = localStorage.getItem(key)
    if (null === jsonValue) {
      jsonValue = "Default Value"
    }
    setValue(JSON.parse(jsonValue))
  }, [])

  return [value, setValue] as [typeof value, typeof setValue]
}
