import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import { random } from "lodash";
import { Button } from "react-bootstrap";

const DataTable = (props) => {
  console.log(props.tableData);
  return (
    <div className="mt-5">
      <Table striped bordered hover variant="dark" className="mb-5">
        <tbody>
          {Object.keys(props.tableData).map((item) => {
            return (
              <tr key={random(0, 1000)}>
                <td>{item}</td>
                <td>{props.tableData[item]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={props.onClickBack}>Go Back</Button>
    </div>
  );
};
DataTable.propTypes = {
  tableData: PropTypes.object.isRequired,
  onClickBack: PropTypes.func.isRequired,
};
export default DataTable;
