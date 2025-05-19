const RED="#F64E60"
const GREEN="#3CD856"
const PURPLE="#8950FC"
const BLUE="#0095FF"
const CYAN="#00E096"
const YELLOW= ""

function get_rand_array(length, min, max) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min) + min))
}
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const vistor_insights = [
	{
      name: "Loyal Customers",
      data: get_rand_array(12,120,400)
    },
    {
      name: "New Customers",
      data: get_rand_array(12,120,400)
    },
    {
      name: "Unique Customers",
      data: get_rand_array(12,120,400)
    }
]
const total_revenue = [
	{
		name: "Online Sales",
		data: get_rand_array(7, 5000, 25000)
	},
	{
		name: "Offline Sales",
		data: get_rand_array(7, 5000, 25000)
	}
]
const customer_satisfaction = [
	{
		name: "Last Month",
		data: get_rand_array(7, 100, 300)
	},
	{
		name: "This Month",
		data: get_rand_array(7, 400, 800)
	}
]

export const chartsData = [
  {
    id: 1,
    title: "Visitor Insights",
    type: "line",
    series: [
    	vistor_insights[0], 
    	vistor_insights[1], 
    	vistor_insights[2]
    ],
    options: {
      chart: { 
      	zoom: { enabled: false }, 
      	toolbar:{ show: false }, 
      	fontFamily: "Poppins",

      },
      grid:{
      	show:false
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories:months,
        labels:{
      		style:{
      			fontSize: '10px'
      		}
      	}
      }, 
      yaxis: {
        labels:{
      		style:{
      			fontSize: '10px'
      		}
      	}
      },
      stroke: { curve: "smooth" },
      colors: [PURPLE, RED, GREEN],
      legend: {
      	markers: {
      		shape:"square"
	    }
      },
      annotations:{
      	points: [
			  {
			    x: months[vistor_insights[1].data.indexOf(Math.max(...vistor_insights[1].data))],
			    y: Math.max(...vistor_insights[1].data),
			    borderColor: RED,
			    marker: {
			      size: 7,
			      fillColor: RED,
			      strokeColor: RED
			    }
			  }
			]
		},
    },
    height: "100%",
    width: 510
  },
  {
    id: 2,
    title: "total revenue",
    type: "bar",
    series: [
    	total_revenue[0],
    	total_revenue[1]
    ],
    options: {
      chart: { 
      	zoom: { enabled: false }, 
      	toolbar:{ show: false }, 
      	fontFamily: "Poppins",
      },
	  grid:{
	  	show:false
	  },
      dataLabels: { enabled: false },
      xaxis: {
        categories:week,
        labels:{
      		style:{
      			fontSize: '10px'
      		}
      	}
      },
      yaxis:{
      	labels:{
      		style:{
      			fontSize: '10px'
      		},
      		formatter: (val) => {
      			if(val>=1000)
	      			return '$'+(val/1000).toFixed(0) + 'k'
	      		else if(val > 0)
	      			return '$'+val
	      		else
	      			return val
      		}
      	}
      },
      colors: [BLUE, CYAN],
      legend: {
      	markers: {
      		shape:"circle"
	    }
      },
      
    },
    height: "100%",
    width: 600
  },
   {
    id: 3,
    title: "customer satisfaction",
    type: "area",
    series: [
    	customer_satisfaction[0],
    	customer_satisfaction[1]
    ],
    options: {
      chart: { 
      	zoom: { enabled: false }, 
      	toolbar:{ show: false }, 
      	fontFamily: "Poppins",

      },
      grid:{
      	show:false
      },
      dataLabels: { enabled: false },
      xaxis: {
      	labels:{
  	      	show:false
  	    }
      }, 
      yaxis: {
      	show: false
      },
      stroke: { curve: "smooth" },
      markers: {
      	size: 6,
      	strokeWidth:0
      },
      colors: [BLUE, CYAN],
      legend: {
      	markers: {
      		shape:"square"
	    }
      },
      fill: {
          type: 'gradient',
          gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.55,
              opacityTo: 0.1,
              stops: [30, 100, 100, 100]
            },
        },
    },
    height: "100%",
    width: 400
  },
]
