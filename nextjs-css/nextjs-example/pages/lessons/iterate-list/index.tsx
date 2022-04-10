export default function Index() {
    const items = [
        {name: "Matthew Wen"},
        {name: "Matthew Campbell"},
        {name: "James Donnelly"}
    ]
    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.name}>{item.name}</div>
                )
            })}
        </div>
    )
}
