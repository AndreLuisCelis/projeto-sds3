import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sales";
import { BASE_URL } from "utils/requests";

type ChartData = {
    series: number[];
    labels: string[];
}

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ series: [], labels: [] })
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(res => {
                const data = res.data as SaleSum[];
                const myLabels = data.map(data => data.sellerName);
                const mySeries = data.map(data => data.sum);
                setChartData({ labels: myLabels, series: mySeries });

            })
    }, [])

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type='donut'
            height='240' />
    );
}
export default DonutChart;