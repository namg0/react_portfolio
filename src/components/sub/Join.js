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

							{/* AGE */}
							<tr>
								<th scope='row'>
									<label htmlFor='edu'>AGE</label>
								</th>
								<td>
									<select name='age' id='age'>
										<option value=''>Select an age group</option>
										<option value='teenage'>10대</option>
										<option value='twenty'>20대</option>
										<option value='thirty'>30대</option>
										<option value='forty'>40대</option>
										<option value='fifties'>50대</option>
										<option value='other'>기타</option>
									</select>
								</td>
							</tr>

							{/* GENDER */}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>MALE</label>
									<input type='radio' id='male' name='gender' />
									<label htmlFor='female'>FEMALE</label>
									<input type='radio' id='female' name='gender' />
								</td>
							</tr>

							{/* INTERESTS */}
							<tr>
								<th scope='row'>INTERESTS</th>
								<td>
									<label htmlFor='design'>Design</label>
									<input type='checkbox' id='design' name='interests' />

									<label htmlFor='craft'>Craft</label>
									<input type='checkbox' id='craft' name='interests' />

									<label htmlFor='language'>Language</label>
									<input type='checkbox' id='language' name='interests' />

									<label htmlFor='baking'>Baking</label>
									<input type='checkbox' id='baking' name='interests' />

									<label htmlFor='cooking'>Cooking</label>
									<input type='checkbox' id='cooking' name='interests' />

									<label htmlFor='programming'>Programming</label>
									<input type='checkbox' id='programming' name='interests' />
								</td>
							</tr>

							{/* comments */}
							<tr>
								<th scope='row'>
									<label htmlFor='comments'>COMMENTS</label>
								</th>
								<td>
									<textarea
										name='comments'
										id='comments'
										cols='30'
										rows='5'></textarea>
								</td>
							</tr>

							<tr>
								<th colSpan='2'>
									<input type='reset' value='CANCEL' />
									<input type='submit' value='SEND' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</div>
		</Layout>
	);
}

export default Join;
