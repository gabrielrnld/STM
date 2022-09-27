import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { FormManageLaporan } from './components/apartment/FormManageLaporan';
import { appStore } from './reducer/store';
// import { FormManangeRedux } from './components/apartment/FormManageRedux';


function App() {
  return (
   <Container fluid>
    <Provider store = {appStore}>
    <FormManageLaporan />
    </Provider>
   </Container>
  );
}

export default App;
