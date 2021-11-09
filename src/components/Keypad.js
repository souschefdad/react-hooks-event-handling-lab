// Code Keypad Component Here
function Keypad() {
    return (
        <form>
            <label for={'code-box'}>Enter Password </label>
            <input type='password' id='code-box' onChange={() => console.log('Entering password...')}/>
        </form>
    )
}

export default Keypad
