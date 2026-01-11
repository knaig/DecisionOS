import * as React from "react"
export const ScrollArea = ({ children, ...props }: any) => <div style={{ overflow: "auto" }} {...props}>{children}</div>
