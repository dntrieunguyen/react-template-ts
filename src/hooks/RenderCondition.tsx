import React from "react"

interface ConditionalRenderProps {
  condition: boolean
  fallback?: React.ReactNode
  children: React.ReactNode
}

const ConditionalRender: React.FC<ConditionalRenderProps> = ({ condition, fallback = null, children }) => {
  return <>{condition ? children : fallback}</>
}

export default ConditionalRender
