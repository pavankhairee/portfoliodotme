import type { ReactElement } from "react"


interface LinkProps {
    startIcon: ReactElement
    linkName: string
    link: string
    download?: boolean;
}

export function LinkComponent(props: LinkProps) {

    return (
        <div className="w-58 h-10 pr-4 flex items-center text-center hover:bg-gray-100 rounded gap-1 cursor-pointer">
            <span>{props.startIcon}</span>
            <a
                href={props.link}
                className="text-black"
                target="_blank"
                download={true}
                rel="noopener noreferrer"
            >
                {props.linkName}
            </a>
        </div>
    )
}