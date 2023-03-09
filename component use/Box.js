import React from "react"
// import boxes from "boxes"
export default function Box(props) {
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    
    const [checkBox,setCheckbox] = React.useState(props.on)
    // console.log(checkBox)
    const styles = {
        backgroundColor: checkBox ? "#222222" : "transparent"
    }
    function toggle(){
        setCheckbox(prevCheck => !prevCheck)
    }
    
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}
