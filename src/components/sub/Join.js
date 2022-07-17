import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Join() {
	const history = useHistory();
	const path = process.env.PUBLIC_URL;
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		comments: '',
		age: '',
		gender: null,
		interests: null,
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (value.userid.length < 6) {
			errs.userid = 'Please enter at least 6 characters.';
		}
		if (value.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = 'Please enter at least 8 characters long including @.';
		}

		if (
			value.pwd1 < 10 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 =
				'Please enter at least 10 characters including English, numbers, and special characters for the password.';
		}
		if (value.pwd1 !== value.pwd2 || value.pwd2 < 10) {
			errs.pwd2 = 'Passwords do not match.';
		}

		if (!Val.gender) {
			errs.gender = 'Please choose your gender.';
		}

		if (!Val.interests) {
			errs.interests = 'Please select at least one interest.';
		}

		if (Val.comments.length < 30) {
			errs.comments = 'Please enter at least 30 characters left.';
		}

		if (Val.age === '') {
			errs.age = 'Please select an age.';
		}

		return errs;
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};
	const handleReset = (e) => {
		setSubmit(false);
		setErr({});
		setVal(initVal);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		console.log(isSelected);
		setVal({ ...Val, [name]: isSelected });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};
	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');
			history.push('/');
		}
	}, [Err]);
	return (
		<Layout name={'Join'}>
			<div className='signUpbg'>
				<img src={`${path}/img/bg1.jpg`} alt='' />
			</div>
			<div className='joinTab'>
				<div className='signUpL'>
					<span>HOBBY BOX</span>
					<h1 className='signUpLH'>
						Lorem ipsum dolor sit, amet consectetur adipisicing.
					</h1>
					<p className='signUpLP'>Lorem ipsum dolor sit amet.</p>
					<div className='signUpicons'>
						<FontAwesomeIcon icon={faFacebookF} />
						<FontAwesomeIcon icon={faInstagram} />
						<FontAwesomeIcon icon={faYoutube} />
					</div>
				</div>
				<div className='signUpR'>
					<h1 className='signUpRH'>Sign Up to Start a Hobby</h1>
					<p className='signUpRP'>Enter your details below.</p>
					<form onSubmit={handleSubmit}>
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
												value={Val.userid}
												onChange={handleChange}
											/>
											<span className='err'>{Err.userid}</span>
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
												onChange={handleChange}
											/>
											<span className='err'>{Err.pwd1}</span>
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
												onChange={handleChange}
											/>
											<span className='err'>{Err.pwd2}</span>
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
												value={Val.email}
												onChange={handleChange}
											/>
											<span className='err'>{Err.email}</span>
										</td>
									</tr>

									{/* AGE */}
									<tr>
										<th scope='row'>
											<label htmlFor='age'>AGE</label>
										</th>
										<td>
											<select name='age' id='age' onChange={handleSelect}>
												<option value=''>Select an age group</option>
												<option value='teenage'>10대</option>
												<option value='twenty'>20대</option>
												<option value='thirty'>30대</option>
												<option value='forty'>40대</option>
												<option value='fifties'>50대</option>
												<option value='other'>기타</option>
											</select>
											<span className='err'>{Err.age}</span>
										</td>
									</tr>

									{/* GENDER */}
									<tr>
										<th scope='row'>GENDER</th>
										<td>
											<label htmlFor='male'>MALE</label>
											<input
												type='radio'
												id='male'
												name='gender'
												onChange={handleRadio}
											/>
											<label htmlFor='female'>FEMALE</label>
											<input
												type='radio'
												id='female'
												name='gender'
												onChange={handleRadio}
											/>
											<span className='err'>{Err.gender}</span>
										</td>
									</tr>

									{/* INTERESTS */}
									<tr>
										<th scope='row'>INTERESTS</th>
										<td>
											<label htmlFor='design'>Design</label>
											<input
												type='checkbox'
												id='design'
												name='interests'
												onChange={handleCheck}
											/>

											<label htmlFor='craft'>Craft</label>
											<input
												type='checkbox'
												id='craft'
												name='interests'
												onChange={handleCheck}
											/>

											<label htmlFor='language'>Language</label>
											<input
												type='checkbox'
												id='language'
												name='interests'
												onChange={handleCheck}
											/>

											<label htmlFor='baking'>Baking</label>
											<input
												type='checkbox'
												id='baking'
												name='interests'
												onChange={handleCheck}
											/>

											<label htmlFor='cooking'>Cooking</label>
											<input
												type='checkbox'
												id='cooking'
												name='interests'
												onChange={handleCheck}
											/>

											<label htmlFor='programming'>Programming</label>
											<input
												type='checkbox'
												id='programming'
												name='interests'
												onChange={handleCheck}
											/>
											<span className='err'>{Err.interests}</span>
										</td>
									</tr>

									{/* COMMENTS */}
									<tr>
										<th scope='row'>
											<label htmlFor='comments'>COMMENTS</label>
										</th>
										<td>
											<textarea
												name='comments'
												id='comments'
												cols='30'
												rows='5'
												value={Val.comments}
												onChange={handleChange}></textarea>
											<span className='err'>{Err.comments}</span>
										</td>
									</tr>

									<tr>
										<th colSpan='2'>
											<input
												type='reset'
												value='CANCEL'
												onClick={handleReset}
											/>
											<input
												type='submit'
												value='SIGN UP'
												onClick={() => setSubmit(true)}
											/>
										</th>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Join;
