import React from 'react';

class Summary extends React.Component {
    render(){
        return(
 <table className="table">
    <thead>
        <tr>
            <th scope="col">Field</th>
            <th scope="col">Data</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Last Fill:</td>
            <td>{this.props.summary.last_fill_date}</td>
        </tr>
        <tr>
            <td>Last Sample:</td>
            <td>{this.props.summary.last_sample_date}</td>
        </tr>
        <tr>
            <td>Current Sample:</td>
            <td>{this.props.summary.current_sample_date}</td>
        </tr>
        <tr>
            <td>Total Fills:</td>
            <td>{this.props.summary.total_fills}</td>
        </tr>
        <tr>
            <td>Total Gallons Used:</td>
            <td>{this.props.summary.total_gallons_used}</td>
        </tr>
        <tr>
            <td>Tank Temp:</td>
            <td>55</td>
        </tr>
        <tr>
            <td>House Temp:</td>
            <td>67</td>
        </tr>
        <tr>
            <td>Outside Temp:</td>
            <td>66</td>
        </tr>
   </tbody>
</table>
        );
    }
}

export default Summary;

