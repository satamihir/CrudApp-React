import React from 'react'
import './Table.css';
export default function Table(props) {
	return (
		<div>
			<h1>User Info</h1>
			<table>
				<thead>
					<tr>
						<th>FirstName</th>
						<th>Lastname</th>
						<th>Email</th>
						<th>Mobile</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						props.detail.length > 0 ? (
							props.detail.map(userDetails => {
								return (
									<tr>
										<td>{userDetails.firstname}</td>
										<td>{userDetails.lastname}</td>
										<td>{userDetails.email}</td>
										<td>{userDetails.mobile}</td>
										<td>
											<button>Delete</button>
											<button>Edit</button>
										</td>
									</tr>
								)
							})
						) : (
								<tr>
									<td colSpan={4}>No users found</td>
								</tr>
							)

					}
				</tbody>
			</table>
		</div>
	)
}

