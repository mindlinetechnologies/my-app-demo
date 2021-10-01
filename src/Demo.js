import Time from './Time';
function Demo (props)
{
    return(
    <div>
        <Time />
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
    </div>
    );
}

export default Demo;