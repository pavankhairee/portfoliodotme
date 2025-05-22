

interface ToolProps {
    name: string
    image: string
}

export function ToolComponents(props: ToolProps) {

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 w-32 h-32 hover:shadow-amber-200 transition-shadow">
                <img
                    src={props.image}
                    alt={props.name}
                    className="w-12 h-12 object-contain mb-2"
                />
                <span className="text-sm font-medium text-gray-800 text-center">{props.name}</span>
            </div>
        </>
    )
}