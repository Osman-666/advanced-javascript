const students = [
    {id:01, name:"osman ali"},
    {id:02, name:"mahrab ali"},
    {id:03, name:"sumon ali"},
    {id:04, name:"srijon meah"},
    {id:55, name:"sazidul islam"}
];
const names = students.map(s =>s.name);
const ids = students.map(i=>i.id);
const last = students.find(s=> s.id>5);
console.log(last);
// console.log(ids,names);