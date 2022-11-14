import { useState } from "react";

export default function TodoApp() {

        const [title, setTitle] = useState("Hola");
    return (
     <div className="todoContainer">
        <form className="todoCreateForm">
            <input  className="todoInput" />
            <input type="submit" value="Create todo" className="buttonCreate" />

            {title}
        </form>
    </div>
    );
}