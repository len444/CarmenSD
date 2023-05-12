function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <h1>dark mode is on</h1>
    const lightMode = <h1>light mode is on</h1>

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn == true) {
            console.log('dark mode is on') //want to edit this function to apply styles instead of logs 
        }
        else {
            console.log('light mode is on')
        }
    }

    return (
        <>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>Click</button>
        </>
    )
}

export default ModeToggler;