import React from 'react'; 

// CODE 1
// defining a type for the props
interface GreetingProps{
    name: string;
}
// adding the prop type to the function
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello,{name}!</div>
}
export default Greeting;

