export function Item(props: any) {
    // or you can do this Item({item})
    const {item} = props;
    return (
        <div style={{margin: 20}}>
            <div>title: {item.data.title}</div>
            <div>ups: {item.data.ups}</div>
            <div>url: <a href={item.data.url}>{item.data.url}</a></div>
        </div>
    )
}