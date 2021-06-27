import React from "react";

interface ContainerProps {
    children: any
}

const Container: React.FC<ContainerProps> = ({children}: ContainerProps) => {
    return (
        <div className={"App bg-white dark:bg-gray-800 mx-auto mt-10 p-8 max-w-4xl m-auto"}>
            {children}
        </div>
    )
}

export default Container;