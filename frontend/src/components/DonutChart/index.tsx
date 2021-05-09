import axios from "axios";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sales";
import { BASE_URL } from "utils/request";

type ChartData = {
    series:number[];
    labels:string[];
}

const DonutChart =() => {

    // forma errada
    let chartData: ChartData = { series:[],labels:[]};

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(res =>{
        const data = res.data as SaleSum[];
        const myLabels = data.map(data => data.sellerName);
        const mySeries = data.map(data => data.sum);
        console.log(res);
        chartData.labels= myLabels;
        chartData.series=mySeries;
        console.log(chartData);
    })

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
        options={{...options, labels:chartData.labels }}
        series= {chartData.series}
        type='donut'
        height='240' />
    );
}
export default DonutChart;