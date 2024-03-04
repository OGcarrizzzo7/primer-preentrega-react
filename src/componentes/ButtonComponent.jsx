export default function ButtonComponent({texto, color , callback}) {
    const misEstilos = {
        backgroundColor: color,
    };
    return (
        <>
        <button onClick = {callback} style={misEstilos}>{texto}</button>
        </>
    );
}
