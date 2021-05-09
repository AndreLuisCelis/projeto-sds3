import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function Dashboard() {
    return (
        <>
      <div className='container'>
        <h1 className='text-primary py-3'>Dashboard de Vendas</h1>

        <div className ='row px-3'>
          <div className='col-sm-6'>
            <h5 className ='text-center text-secondary'>Taxa de sucesso (%)</h5>
            <BarChart/>
          </div>
          <div className='col-sm-6'>
            <DonutChart/>
          </div>
        </div>

        <div>
          <h2 className='text-primary py-3'>Todas as vendas</h2>
        </div>
        <DataTable/>
      </div>
    </>
    );
}
export default Dashboard;