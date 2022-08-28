import { useState } from "react";
import ReactDOM from "react-dom/client";

function ThankYou() {
    const [Name, setName] = useState("");

    return <h1>Thankyou for form submission!</h1>
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ThankYou />);
export default ThankYou