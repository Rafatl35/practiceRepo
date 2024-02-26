const student = {
    name: 'Sakib',
    id: 121,
    address: '123 A',
    isSingle: true,
    friends: ['Apu', 'Razz', 'Salman', 'aamir'],
    movies: [{name: 'faltu', year: 2024}, {name: 'aro base faltu' , year:2022}],
    act:function(){
        console.log('Over acting')
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer:{
            name: 'tasla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
// console.log(student.car);
console.log(student.act);
student.act();