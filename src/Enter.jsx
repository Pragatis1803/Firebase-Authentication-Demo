import React from 'react';

function Enter(props){
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </section>
    );
}
export default Enter;