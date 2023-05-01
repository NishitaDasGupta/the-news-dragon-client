import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms And Cnditions!!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae deserunt, libero dignissimos magni accusamus nulla sed perspiciatis facere, ex quo quae, possimus ab ea amet pariatur consectetur placeat. Libero cumque molestias quasi est deserunt natus iure incidunt? Veniam omnis ipsa molestiae culpa qui repellat temporibus. Culpa dolores quas amet voluptatum quis officia, exercitationem modi quaerat adipisci. Suscipit obcaecati voluptatem repudiandae a earum nisi maiores distinctio dignissimos eius et.</p>
            <p><small>Go back to <Link to="/register">Register</Link></small></p>
        </Container>
    );
};

export default Terms;