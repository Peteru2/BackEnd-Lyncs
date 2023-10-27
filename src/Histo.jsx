import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  
const Histo = () => {
    const data = {
        responsive: true,
          labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "",
              data: [10, 20, 30, 25, 50, 67, 89],
              backgroundColor: "rgb(241, 135, 1)",
              barThickness: 30,
              pointBorderWidth: 4,
              pointBorderColor: "transparent"
            },
           
          ],
        };
        
        const options = {
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top",
            },
            title: {
              display: true,
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                
              },
              grid: {
                display: false
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                
              },
              min: 0,
              max: 50,
              ticks: {
                stepSize: 10,
                callback: (value) => value + 'k'
              },
              border:{dash: [4, 4]},
              grid: {
                // display: false,
                        borderDash: 3,
                        drawBorder: false
              },
            },
          },
          elements: {
            bar: {
              barPercentage: 0.1, // Adjust the width of each bar (0.6 means 60% of the available space)
              categoryPercentage: 0.2, // Adjust the space between bars (0.8 means 80% of the available space)
            },
          },
        };
    return ( 
        <>
                <section>
                <div className="Histo bg-white my-20">  
                                    <div className="flex w-full items-center pb-10">
                                        <p className="ml-4 font-bold text-2xl">Visitor Analysis</p>
                                        <p className="ml-auto py-2 px-1 border-2 rounded-md flex w-20 items-center justify-between font-bold"><span >Daily</span><i className="fa fa-chevron-down"></i></p>
                                      </div>                       
                                    <Bar  options={options} data={data} />          
                                    </div>
                </section>
        </>
     );
}
 
export default Histo;