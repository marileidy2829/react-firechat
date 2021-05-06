import { Children } from "react";

const Button = ({
    onclick = null,
    Children = null
}) =>
(
    <Button onClick={onclick} >{Children} </Button> 
);

export default Button;