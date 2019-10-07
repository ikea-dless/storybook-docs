import * as React from "react"

const Text: React.FC<{message: string}> = ({message}) => <>{ message }</>
Text.displayName = "Text"
export default Text
