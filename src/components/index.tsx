import React, { useState } from 'react'
import produce from 'immer'
import { useImmer } from 'use-immer'

const Index = () => {
  const [obj, setObj] = useState<any>({
    a: 1,
    b: {
      c: { d: 9 },
    },
  })
  const [todo, setTodo] = useImmer({
    a: 1,
    b: {
      c: { d: 9 },
    },
  })
  const mutate = () => {
    console.log('mutate')
    setTodo((draft) => {
      draft.b.c.d++
    })
    // setObj(
    //   produce((draft: any) => {
    //     console.log('draft', draft)
    //     draft.a++
    //   }),
    // )
  }
  return <div onClick={mutate}>{JSON.stringify(todo)}</div>
}

export default Index
