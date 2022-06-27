import { Form, Formik } from "formik";
import { Col, Container, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export default function FormComponent() {
  return (
    <Container className="mt-4">
      <Row>
        <h2>Form:</h2>
        <Col>
          <Formik>
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <FormLabel>Name:</FormLabel>
                  <FormControl name="name" type="text" id="name"/>
                </FormGroup>
                <FormGroup className="mb-3">
                  <FormLabel>Email:</FormLabel>
                  <FormControl name="email" type="email" id="email"/>
                </FormGroup>
                <FormGroup className="mb-3">
                  <FormLabel>Phone number:</FormLabel>
                  <FormControl name="phone" type="number" id="phone"/>
                </FormGroup>
                <FormGroup className="mb-3">
                  <FormLabel>Gender:</FormLabel>
                  <select className="form-control" name="gender" id="gender">
                    <option value="">Select Gender...</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Others">Others</option>
                  </select>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}
