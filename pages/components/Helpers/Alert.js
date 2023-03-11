import swal from 'sweetalert';

import React from 'react';

const Alert = (title, body, type) => {
	return swal({
		title: title,
		text: body,
		icon: type,
		button: 'Aceptar',
	});
};

export default Alert;
