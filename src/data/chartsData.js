import ovalBlue from "../assets/oval_blue.png"
import ovalCyan from "../assets/oval_cyan.png"

const RED="#F64E60"
const GREEN="#3CD856"
const GREEN1 = "#27AE60"
const PURPLE="#8950FC"
const BLUE="#0095FF"
const CYAN="#00E096"
const YELLOW= "#FFA412"

function get_rand_array(length, min, max) {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * (max - min) + min))
}
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months_half = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const products = ["Home Decor Range", "Disney Princess Pink Bag", "Bathroom Essentials", "Apple Smartwatches"]

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
const target_vs_reality= [
  {
    name: "Reality Sales",
    data: get_rand_array(7, 10,40)
  },
  {
    name: "Target Sales",
    data: get_rand_array(7, 40,80)
  }
]
const top_products =[
  {
  name: "top products",
  data: get_rand_array(4, 12, 50) 
  }
]
const volume_services_level = [
  {
    name: "Volume",
    data: get_rand_array(6, 420, 635)
  },
  {
    name: "Services",
    data: get_rand_array(6, 635, 1135)
  }
]
// ISO-2 country codes
const countries = ['US', 'BR', 'SA', 'ID', 'CN', 'CD']

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
        fontSize: "15px",
      	markers: {
          size: 10,
          customHTML: function(){
              return `<svg style="position:relative;" width="23" height="9" viewBox="0 0 23 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4.5H21" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              <circle cx="11.5" cy="4.5" r="4.5" fill="currentColor"/>
              </svg>
              `
          }
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
  {
    id: 4,
    title: "target vs reality",
    type: "bar",
    series: [
      target_vs_reality[0],
      target_vs_reality[1]
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
        categories:months_half,
        labels:{
          style:{
            fontSize: '10px'
          }
        }
      },
      yaxis: {
        show: false
      },
      colors: [GREEN1, YELLOW],
      legend: {
        fontFamily: "Poppins",
        fontWeight: 600,
       fontSize: '15px',
      },
    },
    height: "100%",
    width: 400
  },
  {
    id: 5,
    title: "top products",
    type: "bar",
    series: [
      top_products[0],
    ],
    options: {
      chart: { 
        zoom: { enabled: false }, 
        toolbar:{ show: false }, 
        fontFamily: "Poppins",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 5,
          barHeight:'15%',
          distributed: true,
          colors:{
            backgroundBarColors: [BLUE, CYAN, PURPLE, YELLOW],
            backgroundBarOpacity: 0.3,
          }
        }
      },
      grid:{
        show:false
      },
      dataLabels: {
          enabled: false,
        },  
       xaxis: {
        categories: products,
        labels:{
          show: false
        }
      },
      yaxis: {
        show: false
      },
      colors: [BLUE, CYAN, PURPLE, YELLOW],
      legend: {
        show: false
      },
    },
    height: "100%",
    width: 400
  },
  {
    id: 6,
    title: "sales mapping by country",
    type: 'map',
    series: countries,
    options: {
      colors:[YELLOW, RED, BLUE, GREEN, PURPLE] 
    }
  },
  {
    id: 7,
    title: "volume vs services level",
    type: "bar",
    series: [
      volume_services_level[0],
      volume_services_level[1]
    ],
    options: {
      chart: { 
        zoom: { enabled: false }, 
        toolbar:{ show: false }, 
        fontFamily: "Poppins",
        stacked: true
      },
      plotOptions: {
        bar: {
          columnWidth:'25%',
        }
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
      colors: [BLUE, CYAN],
      legend: {
          markers: {
            shape:"circle"
        }
      }
    },
    height: "100%",
    width: 420
  },
]
