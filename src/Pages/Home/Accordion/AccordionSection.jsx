import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionSection = () => {
    return (
        <div className='my-5'>
<h1 className='text-center my-5'>Customer Reviews</h1>

            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>“I will definitely be back!”</Accordion.Header>
        <Accordion.Body>
        “I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!” – Julia L.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>“Always worth the stop.”</Accordion.Header>
        <Accordion.Body>
        “This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.” – Kristine R
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>“Im from the south, thats saying a lot…”</Accordion.Header>
        <Accordion.Body>
        “Breakfast was delicious. Like a good homestyle country savory breakfast (and Im from the south, thats saying a lot)… Enjoyed the whole experience and definitely recommend this place for a place to eat on the cape.” – Ronnie E.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>“The absolute best red sauce”</Accordion.Header>
        <Accordion.Body>
        “The absolute best red sauce. Weather on Pizza or Pasta, it’s honestly delicious. Portions are huge and the staff is extremely friendly and courteous.” – Rick H.
        </Accordion.Body>
      </Accordion.Item>

      
    </Accordion>
        </div>
    );
};

export default AccordionSection;