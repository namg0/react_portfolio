import Layout from '../common/Layout';
import { NavLink } from 'react-router-dom';

function Join() {
	return (
		<Layout name={'Join'}>
			<div className='signUp'>
				<fieldset>
					<legend className='h'>회원가입 폼 양식</legend>
					<table>
						<caption className='h'>회원가입 정보입력</caption>
						<tbody>
							{/* USER ID */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										placeholder='Enter user id'
										name='userid'
										id='userid'
									/>
								</td>
							</tr>

							{/* PASSWORD */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='Enter your password'
									/>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='Re-enter your password'
									/>
								</td>
							</tr>

							{/* E-MAIL */}
							<tr>
								<th>
									<label htmlFor='email'>E-Mail</label>
								</th>
								<td>
									<input
										type='text'
										id='email'
										name='email'
										placeholder='Enter your e-mail address'
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</div>
			<div className='signIn'>
				<div>
					<h1>Welcome Back</h1>
					<NavLink to='/login'>Sign In</NavLink>
				</div>
			</div>
		</Layout>
	);
}

export default Join;
