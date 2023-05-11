interface Props {
greeting: string
}

function Header(props: Props) {
    return <h1>{props.greeting}</h1>
}

export default Header;