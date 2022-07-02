// reading args with game and image files

const argv = process.argv.slice(2);

let tic_file = argv[0];
let img = argv[1];

switch(argv.length) {
    case 0:
        console.log('sorry');
        break;

    case 1:
        console.log('sorry');
        break;

    case 2:
        console.log('tic_file, img: ' + tic_file + ', ' + img);
        break;

    default:
        console.log('sorry');
        break;
}
