
interface ProjectProps {
    name: string
    image: string
    onClick: () => void
}

export function ProjectComponent(props: ProjectProps) {

    return (
        <>
            <div onClick={props.onClick} className="flex flex-col w-full pt-2 bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow">

                <img
                    src={props.image}
                    alt={props.name}
                    className="w-full h-44 object-cover"
                />
                <div className="p-3 text-center">
                    <span className="text-lg font-semibold text-gray-800">{props.name}</span>
                </div>
            </div>

        </>
    );

}