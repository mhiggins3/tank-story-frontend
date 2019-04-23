import React from 'react';
import {BarChart} from 'react-easy-chart';

class TankLevel extends React.Component {
    render(){
        const current_available = this.props.summary.current_available ? this.props.summary.current_available : 0;
        const tank_size = this.props.summary.tank_size ? this.props.summary.tank_size : 0;
        return (
        <table className="table">
            <tbody>
            <tr>
                <td className="align-middle"><h3>{current_available}<small>gal</small> Available</h3></td>
                <td>
                    <BarChart
                        axes
                        grid
                        colorBars
                        width={150}
                        height={400}
                        yDomainRange={[0, tank_size]}
                        data={[
                            {x: '', y: current_available}
                        ]}
                    />
                </td>
            </tr>
        </tbody>
        </table>
        );
    }
}

export default TankLevel;
