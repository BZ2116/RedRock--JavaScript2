const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}





const {name}=stu;
console.log(name)  // MING

const [h1,h2,h3]=stu.hobby;
console.log(h1,h2,h3)  // play run sing

const {address:{home:HOME}}=stu;
console.log(HOME)  // HENAN，这里的HOME就是大写哈

const [,{year}]=stu.title;
console.log(year)  // 2022