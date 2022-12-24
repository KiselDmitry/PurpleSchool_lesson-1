

const role = 'medik';

if (role === 'maneg') { 
	console.log('yyyy');
} else if (role === 'seo') {
	console.log('seoseo');
} else if(role === 'medik') {
	console.log('medikmedik');
} else {
	console.log('nonono');
}

const role1 = 'maneg';
/*
switch (role1) { 
	case 'maneg1':
		console.log('1yyyy');
		break;
	case 'seo1':
		console.log('1seoseo');
		break;
	case 'medik1':
		console.log('1medikmedik');
		break;
	default:
		console.log('nonono');
}
*/

const role2 = 'medik';

switch (role2) { 
	case 'maneg1':
	case 'seo1':
		console.log('yyyyyyyyyyyyyy');
		break;
	case 'medik1':
		console.log('1medikmedik');
		break;
	default:
		console.log('nonono');
}
