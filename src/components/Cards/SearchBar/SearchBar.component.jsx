import React , {Fragment} from 'react' 
import Form from "react-bootstrap/Form";


const SearchBar = ({validateQCard}) => {
  

  return ( 

<Fragment>

<Form.Label
    className="font01 my-1 mr-2 text-white"
    htmlFor="inlineFormCustomSelectPref"
  > 
    Search: 
  </Form.Label>

  <Form.Control
    size="sm"
    type="text"
    id="q_game"
    placeholder="Search for a card .... Ex : Dark Magician or Zoa"
    className="mr-2"
    onKeyPress={ e => validateQCard(e) } 
    style={{width:"400px"}}
  />

</Fragment>


  );
}
 
export default SearchBar;
