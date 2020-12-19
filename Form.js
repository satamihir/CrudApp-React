import React, { useState, useEffect } from 'react';
import Table from './Table';

const Form = (props) => {

	const [detail, setDetail] = useState({
		firstname: '',
		lastname: '',
		email: '',
		mobile: ''
	})
	const [submitted, setSubmitted] = useState(false);
	const [users, setUsers] = useState([]);

	const onChangeHandler = (key, val) => {
		setDetail({
			...detail,
			[key]: val
		})
	}

	useEffect(() => {
		let data = JSON.parse(localStorage.getItem('users'))
		setUsers(data)
	}, [])

	const handleSubmit = (e) => {

		e.preventDefault();
		setSubmitted(true);
		// console.log('data', detail);

		let users = JSON.parse(localStorage.getItem('users')) || [];

		users.push({
			...detail,
			id: users.length
		});
		localStorage.setItem('users', JSON.stringify(users));
		setDetail({
			...detail,
			firstname: '',
			lastname: '',
			email: '',
			mobile: ''
		})

	}
	return (
		<div className="form-container">
			<h1>User Form</h1>
			<form onSubmit={handleSubmit}>
				{submitted ? <p>Success</p> : null}
				<div>
					<label>FirstName</label>
					<input
						type="text"
						name="firstname"
						value={detail.firstname}
						onChange={(e) => onChangeHandler('firstname', e.target.value)} />
				</div>
				<div>
					<label>LastName</label>
					<input
						type="text"
						name="lastname"
						value={detail.lastname} onChange={(e) => onChangeHandler('lastname', e.target.value)} />
				</div>
				<div>
					<label>Email Address</label>
					<input
						type="text"
						name="email"
						value={detail.email}
						onChange={(e) => onChangeHandler('email', e.target.value)} />
				</div>
				<div>
					<label>Mobile</label>
					<input
						type="number"
						name="mobile"
						value={detail.mobile}
						onChange={(e) => onChangeHandler('mobile', e.target.value)} />
				</div>
				<button type="submit">Save</button>
			</form>
			<Table detail={detail} />
		</div>
	)
}

export default Form;