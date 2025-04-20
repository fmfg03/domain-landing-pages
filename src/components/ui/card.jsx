import React from "react";

const Card = ({ className, children, ...props }) => {
  return (
    <div 
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div 
      className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  )
}

const CardContent = ({ className, children, ...props }) => {
  return (
    <div 
      className={`p-6 pt-0 ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  )
}

export { Card, CardHeader, CardContent };
