import React from 'react'

export default function DevTools() {
  const version = process.env.APP_VERSION
  const text = `Production Build v${version}`
  return <span style={{ display: 'none' }}>{text}</span>
}
