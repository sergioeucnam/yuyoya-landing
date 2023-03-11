import Image from 'next/image';
import { useState } from 'react';
import logo from './../public/logo.png';
import Alert from './components/Helpers/Alert';
import Loader from './components/Helpers/Loader';

export default function Home() {
	const [loading, setLoading] = useState(false);
	const [isUser, setIsUser] = useState(true);
	const [data, setData] = useState({
		username: '',
		email: '',
	});
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const submitForm = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await fetch('/api/users/preregister_user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const { status, message } = await response.json();
			if (status !== 200) {
				return Alert('Error', message, 'error');
			}
			Alert(
				'Pre-registro exitoso',
				'Pronto nos pondremos en contacto contigo para darte más información.',
				'success',
			);
			setData({
				username: '',
				email: '',
			}); // Clear form
		} catch (error) {
			console.log(error);
			Alert('Error', 'Error al pre-registrar usuario', 'error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading ? <Loader /> : null}
			<div className='p-4'>
				<header className='bg-white p-4 rounded shadow flex flex-col items-center'>
					<h1 className='text-4xl font-bold mb-4 pt-4'>YuyoYa</h1>
					<Image src={logo} alt='YuyoYa' width={200} height={200} />
					<p className='mb-4 mt-2'>
						Bienvenido a YuyoYa, nuestro comercio de plantas medicinales. Aquí
						encontrarás una amplia variedad de plantas con propiedades curativas
						para mejorar tu salud y bienestar.
					</p>
				</header>
				<div>
					<div className='bg-white flex flex-col items-center m-4'>
						<h2 className='text-2xl font-bold mb-4'>Pre-regístrate</h2>
					</div>
					<div className='flex justify-center mb-4'>
						<button
							className={`px-4 py-2 rounded ${
								isUser
									? 'bg-green-500 text-white'
									: 'bg-white text-green-500 border border-green-500'
							}`}
							onClick={() => setIsUser(true)}
						>
							Persona/Usuario
						</button>
						<button
							className={`px-4 py-2 rounded ${
								!isUser
									? 'bg-green-500 text-white'
									: 'bg-white text-green-500 border border-green-500'
							}`}
							onClick={() => setIsUser(false)}
						>
							Negocio
						</button>
					</div>
					<form
						/*onChange={handleChange}*/
						onSubmit={submitForm}
						className='bg-white p-4 rounded shadow'
					>
						{isUser ? (
							<>
								<label htmlFor='name' className='block mb-2'>
									Nombre:
								</label>
								<input
									type='text'
									id='name'
									name='username'
									className='border border-gray-300 rounded w-full p-2 mb-4'
									value={data.username}
									onChange={handleChange}
								/>
								<label htmlFor='email' className='block mb-2'>
									Correo electrónico:
								</label>
								<input
									type='email'
									id='email'
									name='email'
									className='border border-gray-300 rounded w-full p-2 mb-4'
									value={data.email}
									onChange={handleChange}
								/>
							</>
						) : (
							<>
								<label htmlFor='businessName' className='block mb-2'>
									Nombre del negocio:
								</label>
								<input
									type='text'
									id='businessName'
									className='border border-gray-300 rounded w-full p-2 mb-4'
									value={data.username}
									onChange={handleChange}
								/>
								<label htmlFor='businessEmail' className='block mb-2'>
									Correo electrónico del negocio:
								</label>
								<input
									type='email'
									id='businessEmail'
									className='border border-gray-300 rounded w-full p-2 mb-4'
									value={data.email}
									onChange={handleChange}
								/>
							</>
						)}
						<button
							type='submit'
							className='bg-orange-500 text-white px-4 py-2 rounded cursor-pointer w-full'
						>
							Pre-registrarse
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
