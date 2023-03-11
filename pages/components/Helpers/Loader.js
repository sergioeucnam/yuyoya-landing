import React from 'react';

const Loader = () => {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-md'>
			<div className='flex flex-col items-center'>
				<div className='animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500'>
					<div className='animate-spin-reverse rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500 '></div>
				</div>
				<p className='text-lg font-medium mt-4 text-green-500'>Cargando</p>
			</div>
		</div>
	);
};

export default Loader;
