import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {

        document.title = `${title} - Dragon News`;
    }, [title])
}

export default UseTitle;