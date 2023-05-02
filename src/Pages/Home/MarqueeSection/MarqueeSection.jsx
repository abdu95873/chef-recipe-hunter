import React from 'react';
import { Card } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import photo1 from '../../../assets/1520901030-shot-2-197.jpg'
import photo2 from '../../../assets/download (1).jpg'
import photo3 from '../../../assets/photo-1546069901-ba9599a7e63c.jpg'

const MarqueeSection = () => {
    return (
        <div>
            <h1 className='text-center my-5'> Food Items</h1>
            <Marquee className='my-5'>
            <Card className='mx-5' style={{ width: '18rem' }}>
                <Card.Img className='h-50px' variant="top" src={photo3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='mx-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mx-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mx-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mx-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

        </Marquee>
        </div>
    );
};

export default MarqueeSection;