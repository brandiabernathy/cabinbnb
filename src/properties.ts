import { Property } from '../types';

const properties : Property[] = [
    {
        image: 'images/glenwood.jpg',
        price: 45,
        location: {
            city: 'Glenwood',
            state: 'Iowa',
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/heron-lake.jpg',
        price: 30,
        location: {
            city: 'Heron Lake',
            state: 'New Mexico',
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/harbor-springs.jpg',
        price: 25,
        location: {
            city: 'Harbor Springs',
            state: 'Michigan',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/lake-tahoe.jpeg',
        price: 35,
        location: {
            city: 'Lake Tahoe',
            state: 'California',
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    },
    {
        image: 'images/cedar-city.jpeg',
        price: 35,
        location: {
            city: 'Cedar City',
            state: 'Utah',
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    },
    {
        image: 'images/banff.jpeg',
        price: 35,
        location: {
            city: 'Banff',
            state: 'Alberta, Canada',
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    },
    {
        image: 'images/fairfax.jpeg',
        price: 35,
        location: {
            city: 'Fairfax',
            state: 'Minnesota',
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    },
]

export default properties;