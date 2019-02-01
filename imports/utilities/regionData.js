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
                        time: '150m',
                        image: '/images/coachella.png'
                    },
                    {
                        id: 1001,
                        destination: 'SANTA BARBARA',
                        airport: 'Santa Barbara Airport',
                        price: '$129+',
                        time: '75m',
                        image: '/images/santa_barbara.jpeg'
                    },
                    {
                        id: 1002,
                        destination: 'HAWTHORNE',
                        airport: 'Hawthorne Airport',
                        price: '$159+',
                        time: '90m',
                        image: '/images/hawthorne.jpeg'
                    },
                    {
                        id: 1003,
                        destination: 'TAHOE',
                        airport: 'Truckee Airport',
                        price: '$299+',
                        time: '60m',
                        image: '/images/tahoe.jpeg'
                    },
                    {
                        id: 1004,
                        destination: 'SACRAMENTO',
                        airport: 'Sacramento Executive Airport',
                        price: '$35+',
                        time: '30m',
                        image: '/images/sacramento.jpeg'
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
                        image: '/images/tahoe.jpeg'
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
                        image: '/images/burbank.jpeg'
                    },
                    {
                        id: 1007,
                        destination: 'LAS VEGAS',
                        airport: 'Las Vegas Airport',
                        price: '$79+',
                        time: '80m',
                        image: '/images/las_vegas.jpeg'
                    },
                    {
                        id: 1008,
                        destination: 'TAHOE',
                        airport: 'Truckee Airport',
                        price: '$299+',
                        time: '60m',
                        image: '/images/tahoe.jpeg'
                    },
                    {
                        id: 1009,
                        destination: 'HAWTHORNE',
                        airport: 'Hawthorne Airport',
                        price: '$102+',
                        time: '90m',
                        image: '/images/hawthorne.jpeg'
                    },
                    {
                        id: 1010,
                        destination: 'ORANGE COUNTY',
                        airport: 'John Wayne Airport',
                        price: '$59+',
                        time: '120m',
                        image: '/images/orange_county.jpeg'
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
                        image: '/images/burbank.jpeg'
                    },
                    {
                        id: 1012,
                        destination: 'LAS VEGAS',
                        airport : 'Las Vegas Airport',
                        price: '$139+',
                        time: '75m',
                        image: '/images/las_vegas.jpeg'
                    }
                ]
            },
            {
                id: 104,
                fromCity: 'Tahoe',
                toCity: [{
                        id: 1013,
                        destination: 'PALO ALTO',
                        airport: 'Palo Alto Airport',
                        price: '$299+',
                        time: '55m',
                        image: '/images/palo_alto.jpeg'
                    },
                    {
                        id: 1014,
                        destination: 'SAN CARLOS',
                        airport: 'San Carlos Airport',
                        price: '$146+',
                        time: '60m',
                        image: '/images/san_carlos.jpeg'
                    },
                    {
                        id: 1015,
                        destination: 'OAKLAND',
                        airport: 'Oakland Airport',
                        price: '$199+',
                        time: '60m',
                        image: '/images/oakland.jpeg'
                    }
                ]
            }
        ]
    }
]

export default regionData;
