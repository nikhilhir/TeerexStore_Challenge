import { Form, FormControl } from "react-bootstrap";
import { CartState } from "../../ContextApi/Context";


const SearchBar = (props) => {
  const { productDispatch } = CartState();

  const onSearchHanlder = (event) => {
    productDispatch({
      type: "FILTER_BY_SEARCH",
      payload: event.target.value,
    });
  };

  return (
    <Form>
      <FormControl
        className="searchInput m-auto"
        type="text"
        placeholder="Search for products..."
        onChange={onSearchHanlder}
      />
    </Form>
  );
};

export default SearchBar;
