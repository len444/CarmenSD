interface Props {
greeting: string
}

function Header(props: Props) {

    const greetStyle = {
        fontSize: '50px'
    }

    return <h1 style={greetStyle}>{props.greeting}</h1>
}

export default Header;