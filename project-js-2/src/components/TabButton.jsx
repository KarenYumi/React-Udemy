export default function TabButton({children, onSelect}){ //ou props e  props.children
    return ( 
    <li>
        <button onClick={onSelect}>{children}</button>
    </li>
    );
}