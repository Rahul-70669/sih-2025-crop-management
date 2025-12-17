/**
 * Button Component
 *
 * This is a functional React component that renders a button element.
 * The button has the following properties:
 * - `name`: A name attribute set to "button".
 * - `className`: A combination of classes for styling the button:
 *   - `btn`: Base button class.
 *   - `btn-primary`: Applies primary button styling.
 *   - `btn-outline`: Adds an outline style to the button.
 *   - `btn-lg`: Makes the button large.
 * - The button displays the text "click me".
 *
 * @returns {JSX.Element} A styled button element.
 */

const Button = () =>{
    return(
            <button name="button" className="btn btn-primary btn-outline btn-lg">miny</button>
    )
}

export default Button;