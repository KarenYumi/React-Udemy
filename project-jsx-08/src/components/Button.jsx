export default function Button({children, ...props}){
  return (
    <button
    className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 hover:bg-stone-700 hover: text-stone-100"
    {...props}
    >
      {children}
    </button>
  )
}