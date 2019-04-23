import React from 'react';
import {AreaChart} from 'react-easy-chart';

class UsageGraph extends React.Component {
    transformGraphData(samples){
        const data = [];
        for(var i = 0; i < samples.length; i++){
            const sample = samples[i];
            data.push({x: i, y: sample.measure});
        }
        return data;
    }
    render(){
        return(
        <div className="col-12" align="center">
            <h3>Usage Summary</h3>
            <AreaChart
                //xType={'time'}
    xDomainRange={[0, this.props.samples.length]}
    yDomainRange={[0, 250]}
    areaColors={['purple']}
    axes
    interpolate={'cardinal'}
    width={750}
    height={250}
    data={[this.transformGraphData(this.props.samples)]}
            />
        </div>
        );
    }
}

export default UsageGraph;
