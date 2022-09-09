


const people = [
    {
      name: 'John Doe',
      img: 'https://via.placeholder.com/40',
    },
];


const groups = [
    {
        name: 'TeamName',
        img: 'https://via.placeholder.com/40',
        members: [1,2,3,4,5]
    },
    {
        name: 'RandomGroup',
        img: 'https://via.placeholder.com/40',
        members: [1,2,3]
    },
    {
        name: 'AnotherTeam',
        img: 'https://via.placeholder.com/40',
        members: [1,3]
    },
    {
        name: 'JustaGroup',
        img: 'https://via.placeholder.com/40',
        members: [1,2,3,4,5,6,7,8,9,10]
    }
];


export function Get(source) {
    switch(source){
        case 'people':
            return people
        case 'posts':
            return 'posts'
        case 'groups':
            return groups
    }
}