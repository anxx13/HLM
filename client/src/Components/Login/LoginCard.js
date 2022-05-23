import { Card, CardBody, CardImg, CardTitle, Col } from 'reactstrap';
import admin from '../../assets/admin.png';
import patient from '../../assets/patient.jpg';
import doctor from '../../assets/doctor_new.png'
export default function LoginCard({ role }) {
  var pic;
  // console.log(role);
  if(role =="admin")
   pic= admin; 
  else if(role == "patient") 
    pic= patient
  else
    pic= doctor
  return (
    <Col sm="12" md="4">
      <Card style={{ 'box-shadow': '4px 4px 4px 4px #CCCCCC' }}>
        <CardImg top width="10%" src={pic} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h1">Hello!! {role.toUpperCase()}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
}
