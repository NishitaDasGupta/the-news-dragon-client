import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from './EditorsInsight/EditorsInsight';

const News = () => {
    const newsDetails = useLoaderData();
    const { _id, title, image_url, details,category_id } = newsDetails;
    return (
       <div>
         <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                   <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
        </div>
        <EditorsInsight></EditorsInsight>
       </div>
    );
};

export default News;