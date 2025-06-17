
import React from 'react';
import { useRouteContext } from '@fastify/react/client'

export function getMeta () {
  return {
    title: 'Land Page'
  }
}

let textStyle = {
  color: 'red',
  fontSize: '3vh'
}

export async function getData() {
  const response = await fetch('http://localhost:8080/test');
  const data = await response.json();
  return data ;
}

export default function Land () {
  const { data } = useRouteContext();
  return (
  <>
    <p style={text}>Hello {data.hello}</p>
  </>
  )
}

export const path = '/'
export const layout = 'default'