let users;


let xhr = new XMLHttpRequest();
xhr.open('GET', 'users.json');
xhr.send();
xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === 4){
		if(xhr.status <= 400){
			console.log( JSON.parse(xhr.responseText).users );
			// renderUser( JSON.parse(xhr.responseText).users);
			renderUser (JSON.parse(xhr.responseText).users);
		}
	}
});

// console.log(users);

function renderUser(obj){
	obj.forEach( element => {
		let card = document.createElement('div'),
		card_info = document.createElement('div'),
		card_info_data = document.createElement('div'),
		user__info = document.createElement('div'),
		card_info_role = document.createElement('div'),
		card__courses = document.createElement('div');

		card.className = 'card';
		card_info.className = 'card__info';
		card_info_data.className = 'card__info--data';
		user__info.className = 'user__info';
		card_info_role.className = 'card__info--role';
		card__courses.className = 'card__courses';	

		document.body.appendChild(card);
		card.appendChild(card_info);
		card_info.appendChild(card_info_data);
		
		card_info.appendChild(card_info_role);
		card.appendChild(card__courses);
		
		
		card_info_data.innerHTML = `<img src=${element.icon} class="data__img" alt="Jack" height="50">`;

		card_info_data.appendChild(user__info);

		user__info.innerHTML = `<p>Name: <b>${element.name}</b></p><p>Age: <b>${element.age}</b></p>`;
		
		if(element.position === 'student'){
			card_info_role.innerHTML = `<img src="https://raw.githubusercontent.com/brightestsirius/users/5b470e0fca968b4891881f812ce6e9f04f580859/images/roles/student.svg" alt="student">
				<span>Student</span>`
		} else if(element.position === 'admin'){
			card_info_role.innerHTML = `<img src="https://raw.githubusercontent.com/brightestsirius/users/5b470e0fca968b4891881f812ce6e9f04f580859/images/roles/admin.svg" alt="admin">
					<span>Admin</span>`
		} else{
			card_info_role.innerHTML = `<img src="https://raw.githubusercontent.com/brightestsirius/users/5b470e0fca968b4891881f812ce6e9f04f580859/images/roles/moderator.svg" alt="moderator">
					<span>Moderator</span>`
		}
		let x = '';
		if(element.courses){
			element.courses.forEach( el => {
			if(el.rating<=29){
				x += `<p class="card__courses--course satisfactory">${el.name}: <span>Satisfactory</span></p>`;
			} else if(el.rating<=79){
				x += `<p class="card__courses--course good">${el.name}: <span>Good</span></p>`;
			} else if(el.raiting<=99){
				x += `<p class="card__courses--course verygood">${el.name}: <span>Very good</span></p>`;
			}else{
				x += `<p class="card__courses--course excellent">${el.name}: <span>Excellent</span></p>`;
			}
			
		} );
		}
		
		card__courses.innerHTML = x;
	} );
}
	// let card = document.createElement('div'),
	// 	card_info = document.createElement('div'),
	// 	card_info_data = document.createElement('div'),
	// 	user__info = document.createElement('div'),
	// 	card_info_role = document.createElement('div'),
	// 	card__courses = document.createElement('div');

	// card.className = 'card';
	// card_info.className = 'card__info';
	// card_info_data.className = 'card__info--data';
	// user__info.className = 'user__info';
	// card_info_role.className = 'card__info--role';
	// card__courses.className = 'card__courses';	

	// document.body.appendChild(card);
	// card.appendChild(card_info);
	// card_info.appendChild(card_info_data);
	
	// card_info.appendChild(card_info_role);
	// card.appendChild(card__courses);
	
	
	// card_info_data.innerHTML = `<img src=${obj.icon} class="data__img" alt="Jack" height="50">`;

	// card_info_data.appendChild(user__info);

	// user__info.innerHTML = `<p>Name: <b>${obj.name}</b></p><p>Age: <b>${obj.age}</b></p>`;
	
	// if(obj.position === 'student'){
	// 	card_info_role.innerHTML = `<img src="https://raw.githubusercontent.com/brightestsirius/users/5b470e0fca968b4891881f812ce6e9f04f580859/images/roles/student.svg" alt="student">
	// 		<span>Student</span>`
	// } else if(obj.position === 'admin'){
	// 	card_info_role.innerHTML = `<img src="https://raw.githubusercontent.com/brightestsirius/users/5b470e0fca968b4891881f812ce6e9f04f580859/images/roles/admin.svg" alt="admin">
	// 			<span>Admin</span>`
	// } else{
	// 	card_info_role.innerHTML = `<img src="https://raw.githubusercontent.com/brightestsirius/users/5b470e0fca968b4891881f812ce6e9f04f580859/images/roles/moderator.svg" alt="moderator">
	// 			<span>Moderator</span>`
	// }
	// let x = '';
	// if(obj.courses){
	// 	obj.courses.forEach( el => {
	// 	if(el.rating<=29){
	// 		x += `<p class="card__courses--course satisfactory">${el.name}: <span>Satisfactory</span></p>`;
	// 	} else if(el.rating<=79){
	// 		x += `<p class="card__courses--course good">${el.name}: <span>Good</span></p>`;
	// 	} else if(el.raiting<=99){
	// 		x += `<p class="card__courses--course verygood">${el.name}: <span>Very good</span></p>`;
	// 	}else{
	// 		x += `<p class="card__courses--course excellent">${el.name}: <span>Excellent</span></p>`;
	// 	}
		
	// } );
	// }
	
	// card__courses.innerHTML = x;
	
// }

