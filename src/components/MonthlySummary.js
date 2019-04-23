import React from 'react';

class MonthlySummary extends React.Component {
    render(){
        return(
            <div className="col-md-4">
                <h3>Monthly Summary</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Field</th>
                        <th scope="col">Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Daily Avg</b></td><td>3</td>
                    </tr>
                    <tr>
                        <td> - Max Day</td><td>7</td>
                    </tr>
                    <tr>
                        <td> - Min day</td><td>1</td>
                    </tr>
                    <tr>
                        <td><b>Weekly Avg</b></td><td>21</td>
                    </tr>
                    <tr>
                        <td> - Weekly Max</td><td>30</td>
                    </tr>
                    <tr>
                        <td> - Weekly Min</td><td>7</td>
                    </tr>
                    <tr>
                        <td><b>Total</b></td><td>175</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

export default MonthlySummary;
