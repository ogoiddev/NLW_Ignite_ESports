
interface IButtonProps {
  title: string
}

export function Button(props: IButtonProps) {
  return (
    <button>
      { props.title }
    </button>
  )
}
