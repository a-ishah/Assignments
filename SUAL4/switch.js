// The switch Statement
// const day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }


const Marks = '-5';

switch (true) {
    case Marks>=80 && Marks<=100:
        console.log('You have a A' );
      break;
    case Marks>=70 && Marks <=89:
        console.log('You have a B ' );
        break;
    case Marks>=60 && Marks <=69 :
        console.log('You have a C ');
        break;   
    case Marks>=50 && Marks <=59:
        console.log('You have a D ');
        break;   
    case Marks>=40 && Marks <=49:
        console.log('You have an E '); 
        break;   
    case  Marks>=0 && Marks <=39:
        console.log('You have an F  ');
        break;    

    default:
        console.log('You have entered an invalid score  ');    
}