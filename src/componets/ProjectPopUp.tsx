interface PopupProps {
    onClose: () => void;
    gitLink: string;
    description: string;
    tools: string;
    features: string[];
}


export function Popup({ onClose, gitLink, description, tools, features }: PopupProps) {
    return (
        <div className="fixed inset-0 bg-gray-500/70 flex items-center justify-center z-50">
            <div className="bg-black text-white rounded-lg shadow-lg p-6 relative w-225 h-max overflow-auto">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white hover:bg-red-500 cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-4">Project Info</h2>
                <p className="text-white mb-4">{description}</p>

                <div className="mb-4">
                    <span className="font-semibold">Tools:</span> {tools}
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">What I Built:</h3>
                    <ul className="list-disc list-inside text-white">
                        {features.map((point: string, index: number) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>

                <a
                    href={gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    View GitHub Repository
                </a>
            </div>
        </div>
    );
}
