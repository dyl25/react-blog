import { useState } from "react";

function RBNotification(msg, type) {
    const [display, setDisplay] = useState(true);

    return (
         display && (
            <article className={"message is-" + type}>
                <div className="message-header">
                    <p>{type === "danger" ? "Error" : "Message"}</p>
                    <button onClick={setDisplay(false)} className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {msg}
                </div>
            </article>)
    );
}

export default RBNotification;