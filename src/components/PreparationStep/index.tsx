export default function PreparationStep({index, description}: {index: number, description: string}) {
    return (
        <li className="flex gap-2">
            <span className="flex text-orange-500 justify-center items-center bg-orange-100 w-6 h-6 rounded-full shrink-0">{index}</span>
            <p>{description}</p>
        </li>
    )
}