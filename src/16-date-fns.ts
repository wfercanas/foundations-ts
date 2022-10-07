import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); //0 = enero, 1 = febrero
const answer = subDays(date, 30);
const string = format(answer, 'yyyy/MMMM/dd');

console.log(format(date, 'yyyy/MMMM/dd'));
console.log(string);
