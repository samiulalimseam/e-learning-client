import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <div>
        <div className="blogs bg-primary text-light fw-light">
                <h1 className='fw-light text-center p-5'>Frequently Asked Questions</h1>
            </div>
    <Accordion className='container' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How this courses will deliver?</Accordion.Header>
        <Accordion.Body>
          After successful subscription of <b>Premium Access</b> your course Videos will be available in your panel. 
        </Accordion.Body>
        <Accordion.Item>
            
        <Accordion.Header>Will this course available forever?</Accordion.Header>
        <Accordion.Body>
          Courses will be available forever in your panel after purchase.
        </Accordion.Body>
        </Accordion.Item>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I get refund if the course seems not sufficicent after purchase?</Accordion.Header>
        <Accordion.Body>
          Yes, we have a 15 days refund policy after the purchase has been made. You cane claim any time within 15 days of purchase.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Faq;