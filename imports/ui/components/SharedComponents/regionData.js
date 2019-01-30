const regionData = [
    {
        id: 1,
        heading: 'San Francisco Bay Area',
        cities: [
            {
                id: 100,
                fromCity: 'San Carlos',
                toCity: [
                    {
                        id: 1000,
                        destination: 'COACHELLA',
                        airport: 'Bermuda Dunes Airport',
                        price: '$299+',
                        time: '120m',
                        image: ''
                    },
                    {
                        id: 1001,
                        destination: 'SANTA BARBARA',
                        airport: 'Santa Barbara Airport',
                        price: '$129+',
                        time: '75m',
                        image: ''
                    },
                    {
                        id: 1002,
                        destination: 'HAWTHORNE',
                        airport: 'Hawthorne Airport',
                        price: '$159+',
                        time: '90m',
                        image: ''
                    },
                    {
                        id: 1003,
                        destination: 'TAHOE',
                        airport: 'Truckee Airport',
                        price: '$299+',
                        time: '60m',
                        image: ''
                    },
                    {
                        id: 1004,
                        destination: 'SACRAMENTO',
                        airport: 'Sacramento Executive Airport',
                        price: '$35+',
                        time: '30m',
                        image: ''
                    },
                ]
            },
            {
                id: 101,
                fromCity: 'Palo Alto',
                toCity: [
                    {
                        id: 1005,
                        destination: 'TAHOE',
                        airport: 'Truckee Airport',
                        price: '$299+',
                        time: '60m',
                        image: ''
                    }
                ]
            },
            {
                id: 102,
                fromCity: 'Oakland',
                toCity: [
                    {
                        id: 1006,
                        destination: 'BURBANK',
                        airport: 'Burbank Airport',
                        price: '$59+',
                        time: '80m',
                        image: ''
                    },
                    {
                        id: 1007,
                        destination: 'LAS VEGAS',
                        airport: 'Las Vegas Airport',
                        price: '$79+',
                        time: '80m',
                        image: ''
                    },
                    {
                        id: 1008,
                        destination: 'TAHOE',
                        airport: 'Truckee Airport',
                        price: '$299+',
                        time: '60m',
                        image: ''
                    },
                    {
                        id: 1009,
                        destination: 'HAWTHORNE',
                        airport: 'Hawthorne Airport',
                        price: '$102+',
                        time: '90m',
                        image: ''
                    },
                    {
                        id: 1010,
                        destination: 'ORANGE COUNTY',
                        airport: 'John Wayne Airport',
                        price: '$59+',
                        time: '120m',
                        image: ''
                    },
                ]
            },
            {
                id: 103,
                fromCity: 'Concord',
                toCity: [
                    {
                        id: 1011,
                        destination: 'BURBANK',
                        airport: 'Burbank Airport',
                        price: '$59+',
                        time: '75m',
                        image: ''
                    },
                    {
                        id: 1012,
                        destination: 'LAS VEGAS',
                        airport : 'Las Vegas Airport',
                        price: '$139+',
                        time: '75m',
                        image: ''
                    }
                ]
            },
            {
                id: 104,
                fromCity: 'Tahoe',
                toCity: [{
                        id: 1013,
                        destination: 'PALO ALTO',
                        airport: 'Burbank Airport',
                        price: '$59+',
                        time: '75m',
                        image: ''
                    },
                    {
                        id: 1014,
                        destination: 'SAN CARLOS',
                        airport: 'San Carlos Airport',
                        price: '$146+',
                        time: '60m',
                        image: ''
                    },
                    {
                        id: 1015,
                        destination: 'OAKLAND',
                        airport: 'Oakland Airport',
                        price: '$199+',
                        time: '60m',
                        image: ''
                    }
                ]
            }
        ]
    }
]

export default regionData;
