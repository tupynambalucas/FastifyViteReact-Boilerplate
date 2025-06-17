import { Suspense } from 'react'

export default function Land ({ children }) {
  console.log(children)
  return (
    <Suspense>
      {children}
    </Suspense>
  )
}
