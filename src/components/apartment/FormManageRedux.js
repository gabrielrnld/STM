import { Fragment, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FormManageLaporan } from "./FormManageLaporan";


export function FormManangeRedux(props) {
    const [page, setPage] = useState("list");
    const [selectedReport, selectReport] = useState();

    const state = useSelector((storedState) => storedState.report);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResidents());
        
      }, [dispatch, state.action]);
    
      const listDelete = (report) => {
        dispatch(deleteReport(report));
        //setPage("list");
      };

      if (page === "form") {
        return <FormManageLaporan openPage={setPage} selectedReport={selectedReport} />;
      }
    
      if (state.isLoading) {
        return <p>Loading report...</p>;
      } else if (!state.isLoading && !Array.isArray(state.reports)) {
        return <p>report not found</p>;
      } else {
        return (
          <Fragment>
            <Table striped bordered hover responsive>
              <thead className="bg-secondary">
                <tr className="text-white">
                  <th>No.</th>
                  <th>Floor</th>
                  <th>Unit</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Rental Price</th>
                  <th>Rental Schema</th>
                  <th>Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.reports.map((report, index) => (
                  <tr key={report.id}>
                    <td>{index + 1}</td>
                    <td>{report.floor}</td>
                    <td>{report.unit}</td>
                    <td>{report.status}</td>
                    <td>{report.price}</td>
                    <td>{report.schema}</td>
                    <td>{report.details}</td>
                    <td>
                      <Button onClick={() => listDelete(report)} variant="danger">
                        Delete
                      </Button>{" "}
                      <Button onClick={() => {
                        handleUpdateReport(report)
                        setPage('form')}} variant="secondary">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <Button variant="dark"  className="text-item-right btn-sm" onClick={() => setPage("form")}>
              Add Report
            </Button>
            </Table>
            
          </Fragment>
          
        );
      }
}