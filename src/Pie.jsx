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

  import {  Doughnut } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
const Pied = () => {
        const data = {
            labels: ["Completed Deliveries", "Pending Deliveries", "Pushed Items", "Closed Orders", ],
            datasets: [
              {
                label: [],
                data: [10, 20, 15, 25,],
                backgroundColor: ["rgb(241, 135, 1)","#44CF6C","#F24236","#470FF4"],
                barThickness: 30
              },
             
            ],
          };
          
          const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display:false,
                position: "right",
              },
              title: {
                display: true,
              },
            },
            scales: {
              x: {
                display: false,
                title: {
                  display: true,
                  text: "X-Axis Label",
                },
                 grid:{
                  display: false
                },
              },
              xAxes: [{ barPercentage: 0.5 }],
              y: {
                display: false,
                title: {
                  display: true,
                  text: "Y-Axis Label",
                },
                grid:{
                  display: false
                },
                min: 0,
                max: 50,
                ticks: {
                  stepSize: 5,  
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
               

                                    <div className="Pie bg-white">
                                      <h4 className="font-bold text-2xl">Analysis Chart</h4>
                                      <div className="flex  justify-between items-center">                                  
                                         <div>                                   
                                       <Doughnut  height="300px" width="300px" marginLeft= "200px" options={options} data={data} />
                                    </div>

                                    <div >
                                     <div className='flex items-center'>
                                          <div className='w-4 h-4 pieYellowChart m-2'></div>
                                          <p className='mx-2 text-xs flex'>{data.labels[0]}</p>
                                     </div>
                                     <div className='flex items-center'>
                                          <div className='w-4 h-4 pieRedChart m-2'></div>
                                          <p className='mx-2 text-xs'>{data.labels[1]}</p>
                                     </div>
                                     <div className='flex items-center'>
                                          <div className='w-4 h-4 pieGreenChart m-2'></div>
                                          <p className='mx-2 text-xs'>{data.labels[2]}</p>
                                     </div>
                                     <div className='flex items-center'>
                                          <div className='w-4 h-4 pieBlueChart m-2'></div>
                                          <p className='mx-2 text-xs '>{data.labels[3]}</p>
                                     </div>
                                    </div>
                                    </div>
                                    </div>
 
                </section>
        </>
     );
}
 
export default Pied;