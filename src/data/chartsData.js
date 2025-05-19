const RED="#F64E60"
const GREEN="#3CD856"
const PURPLE="#8950FC"
const BLUE=""
const CYAN=""
const YELLOW= ""

export const chartsData = [
  {
    id: 1,
    title: "Visitor Insights",
    type: "line",
    series: [{
      name: "Loyal Customers",
      data: Array.from({length: 12}, () => Math.floor(Math.random() * (400 - 120) + 120))
    },
    {
      name: "New Customers",
      data: Array.from({length: 12}, () => Math.floor(Math.random() * (400 - 120) + 120))
    },
    {
      name: "Unique Customers",
      data: Array.from({length: 12}, () => Math.floor(Math.random() * (400 - 120) + 120))
    }],
    options: {
      chart: { 
      	zoom: { enabled: false }, 
      	toolbar:{ show: false }, 
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      stroke: { curve: "smooth" },
      colors: [PURPLE, RED, GREEN],
      legend: {
      	fontFamily: "Poppins"
      }
    },
    height: "100%",
  },
  // {
  //   id: 2,
  //   title: "Total Revenue",
  //   type: "bar",
  //   series: [{
  //     name: "Revenue",
  //     data: Array.from({length: 12}, () => Math.random() * 100000 + 50000)
  //   }],
  //   options: {
  //     xaxis: {
  //       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
  //                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  //     },
  //     dataLabels: { enabled: false },
  //     plotOptions: { bar: { borderRadius: 8 } }
  //   },
  //   height: 350
  // },
  // {
  //   id: 3,
  //   title: "Customer Satisfaction",
  //   type: "donut",
  //   series: [75, 25], // 75% satisfied
  //   options: {
  //     labels: ["Satisfied", "Needs Improvement"],
  //     plotOptions: {
  //       pie: {
  //         donut: { labels: { show: true, total: { show: true } } }
  //       }
  //     },
  //     colors: ['#00E396', '#FF4560']
  //   },
  //   height: 320
  // },
  // {
  //   id: 4,
  //   title: "Target vs Reality",
  //   type: "radar",
  //   series: [{ name: "Target", data: [80, 95, 70, 60, 85] },{ name: "Reality", data: [65, 80, 60, 55, 70] }
  //   ],
  //   options: {
  //     xaxis: {
  //       categories: ['Sales', 'Marketing', 'Support', 'Ops', 'Finance']
  //     },
  //     markers: { size: 4 },
  //     plotOptions: { radar: { size: 140 } }
  //   },
  //   height: 380
  // },
  // {
  //   id: 5,
  //   title: "Top Products",
  //   type: "bar",
  //   series: [{
  //     name: "Sales",
  //     data: Array.from({length: 8}, () => Math.random() * 500 + 200)
  //   }],
  //   options: {
  //     plotOptions: { bar: { horizontal: true } },
  //     xaxis: {
  //       categories: [
  //         'Smartphone X', 'Laptop Pro', 'Tablet Mini', 
  //         'Smart Watch', 'Wireless Buds', '4K TV', 
  //         'Gaming Console', 'Camera'
  //       ]
  //     },
  //     dataLabels: { enabled: false }
  //   },
  //   height: 400
  // },
  // {
  //   id: 6,
  //   title: "Sales Mapping by Country",
  //   type: "heatmap",
  //   series: [
  //     { name: "US", data: generateHeatmapData('US') },
  //     { name: "EU", data: generateHeatmapData('EU') },
  //     { name: "APAC", data: generateHeatmapData('APAC') }
  //   ],
  //   options: {
  //     dataLabels: { enabled: false },
  //     colors: ["#008FFB"],
  //     xaxis: {
  //       type: "category",
  //       categories: ['Tech', 'Home', 'Fashion', 'Sports', 'Beauty']
  //     },
  //     title: { text: "Sales by Product Category" }
  //   },
  //   height: 300
  // },
  // {
  //   id: 7,
  //   title: "Volume vs Service Level",
  //   type: "scatter",
  //   series: [{
  //     name: "Service Points",
  //     data: Array.from({length: 50}, () => ({
  //       x: Math.random() * 100,
  //       y: Math.random() * 100
  //     }))
  //   }],
  //   options: {
  //     xaxis: { title: { text: "Volume" } },
  //     yaxis: { title: { text: "Service Level (%)" } },
  //     markers: { size: 6 }
  //   },
  //   height: 350
  // }
]

// Helper for heatmap data
/*function generateHeatmapData(region) {
  return Array.from({length: 5}, (_, i) => ({
    x: ['Tech', 'Home', 'Fashion', 'Sports', 'Beauty'][i],
    y: Math.floor(Math.random() * 1000) + 500
  }))
}*/