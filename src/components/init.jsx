export const initFile = {
    widgets: [
        {
            id: 1,
            name: 'graph',
            type: 'pie',
            title: 'Sales by Region',
            order: 2,
            series: [44, 55, 13, 20],
            options: {
                labels: ['Apples', 'Oranges', 'Bananas', 'Mangoes'],
                colors: ['#66BB6A', '#22CA28', '#46C6DA', '#0F0067'],
                legend: {
                    position: 'bottom',
                },
                title: {
                    text: 'Fruit Costs',
                    align: 'center'
                },
            },
            position: {
                x: 4,
                y: 0,
            },
            size: {
                cols: 4,
                height: 400,
            },
            priority: 1,
        },
        // {
        //     id: 2,
        //     name: 'graph',
        //     type: 'line',
        //     title: 'Revenue Trend',
        //     order: 1,
        //     series: [
        //         {
        //             name: 'Desktops',
        //             data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        //         },
        //     ],

        //     options: {
        //         chart: {
        //             height: 350,
        //             type: 'line',
        //             zoom: {
        //                 enabled: false,
        //             },
        //         },
        //         dataLabels: {
        //             enabled: false,
        //         },
        //         stroke: {
        //             curve: 'straight',
        //         },
        //         title: {
        //             text: 'Product Trends by Month',
        //             align: 'center',
        //         },
        //         grid: {
        //             row: {
        //                 colors: ['#f3f3f3', 'transparent'],
        //                 opacity: 0.5,
        //             },
        //         },
        //         xaxis: {
        //             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        //         },
        //     },
        //     position: {
        //         x: 8,
        //         y: 0,
        //     },
        //     size: {
        //         cols: 8,
        //         height: 400,
        //     },
        //     priority: 2,
        // },
        // {
        //     id: 3,
        //     name: 'graph',
        //     type: 'pie',
        //     title: 'Sales by Region',
        //     order: 4,
        //     series: [44, 55, 13, 20],
        //     options: {
        //         labels: ['Apples', 'Oranges', 'Bananas', 'Mangoes'],
        //         colors: ['#66BB6A', '#22CA28', '#46C6DA', '#0F0067'],
        //         legend: {
        //             position: 'bottom',
        //         },
        //         title: {
        //             text: 'Fruit Costs',
        //             align: 'center'
        //         },
        //     },
        //     position: {
        //         x: 3,
        //         y: 0,
        //     },
        //     size: {
        //         cols: 4,
        //         height: 400,
        //     },
        //     priority: 2,
        // },
        // {
        //     id: 4,
        //     name: 'graph',
        //     type: 'line',
        //     series: [
        //         {
        //             name: 'High - 2013',
        //             data: [28, 29, 33, 36, 32, 32, 33],
        //         },
        //         {
        //             name: 'Low - 2013',
        //             data: [12, 11, 14, 18, 17, 13, 13],
        //         },
        //     ],
        //     options: {
        //         chart: {
        //             height: 350,
        //             type: 'line',
        //             dropShadow: {
        //                 enabled: true,
        //                 color: '#000',
        //                 top: 18,
        //                 left: 7,
        //                 blur: 10,
        //                 opacity: 0.2,
        //             },
        //             toolbar: {
        //                 show: false,
        //             },
        //         },
        //         colors: ['#77B6EA', '#545454'],
        //         dataLabels: {
        //             enabled: true,
        //         },
        //         stroke: {
        //             curve: 'smooth',
        //         },
        //         title: {
        //             text: 'Average High & Low Temperature',
        //             align: 'left',
        //         },
        //         grid: {
        //             borderColor: '#e7e7e7',
        //             row: {
        //                 colors: ['#f3f3f3', 'transparent'],
        //                 opacity: 0.5,
        //             },
        //         },
        //         markers: {
        //             size: 1,
        //         },
        //         xaxis: {
        //             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        //             title: {
        //                 text: 'Month',
        //             },
        //         },
        //         yaxis: {
        //             title: {
        //                 text: 'Temperature',
        //             },
        //             min: 5,
        //             max: 40,
        //         },
        //         legend: {
        //             position: 'top',
        //             horizontalAlign: 'right',
        //             floating: true,
        //             offsetY: -25,
        //             offsetX: -5,
        //         },
        //     },
        //     order: 4,
        //     position: {
        //         x: 8,
        //         y: 4,
        //     },
        //     size: {
        //         cols: 8,
        //         height: 600,
        //     },
        //     dataSource: 'https://api.example.com/total-sales',
        //     priority: 1,
        // },
        // {
        //     id: 5,
        //     name: 'info',
        //     order: 4,
        //     position: {
        //         x: 8,
        //         y: 4,
        //     },
        //     size: {
        //         cols: 8,
        //         height: 200,
        //     },
        //     priority: 5,
        //     data: {
        //         title: 'Total Sales',
        //         value: 100000,
        //         amount: 100000,
        //         currency: 'USD',
        //         percentage: 0.5,
        //     }
        // },
        // {
        //     id: 6,
        //     name: 'info',
        //     order: 2,
        //     position: {
        //         x: 8,
        //         y: 4,
        //     },
        //     size: {
        //         cols: 6,
        //         height: 200,
        //     },
        //     priority: 5,
        //     data: {
        //         title: 'Network Unlocks',
        //         value: 100000,
        //         amount: 4000,
        //         currency: 'USD',
        //         percentage: 0.8,
        //     }
        // },
    ],
};

