export default function TabButton({children, isSelected, ...props}){ //ou props e  props.children
    return ( 
    <li>
        <button className={isSelected ? "active" : undefined} {...props}>
            {children}
        </button>
    </li>
    );
}