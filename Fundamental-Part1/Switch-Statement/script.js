const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Learn JavaScript');
        console.log('Do JavaScript Challenge');
        break;
    case 'sunday':
        console.log('Go for a walk');
        break;
    case 'tuesday':
    case 'wednesday':
        console.log('Learn ReactJS');
        break;
    case 'friday':
        console.log('Write some code');
        break;
    case 'saturday':
    case 'Thursday':
        console.log('Just Relax');
        break;
    default:
        console.log('Not a valid day!');
}


if (day === 'monday') {
    console.log('Learn JavaScript');
    console.log('Do JavaScript Challenge');
} else if (day === 'sunday') {
    console.log('Go for a walk');
} else if (day === 'tuesday' || day === 'wednesday') {
    console.log('Learn ReactJS');
} else if (day === 'friday') {
    console.log('Write some code');
} else if (day === 'saturday' || day === 'Thursday') {
    console.log('Just Relax');
} else {
    console.log('Not a valid day!');
}