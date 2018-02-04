fetch('http://localhost/Document.pdf')
	.then(res => res.blob())
	.then(res => {
		var reader = new FileReader();
		reader.readAsDataURL(res);
		reader.onload = function () {
			var data = {
				first_name: 'Waqar ul Aziz',
				last_name: 'Shaikh',
				email: 'vickyali2@hotmail.com',
				position_id: 'Senior Javascript Engineer',
				explanation: 'I used javascript code to post the application by calling api end point. See the code on this url. https://github.com/wamtengineers/pixwel',
				projects: [
					'https://www.linkedin.com/in/waqar-ul-aziz-03aa5787/', //Linked In Profile
					'https://github.com/wamtengineers/', //GitHub
					'https://www.food4fitness.com.au/', //Project built on AngularJS 
					'https://www.handsgroup.org.au/', //Project built on AngularJS and WordPress and deal with Ontraport API
					'http://wamtengineers.com/', //My personal Website
					'https://stackexchange.com/users/9078771/waqar-ul-aziz?tab=accounts', //Stackexchange
				],
				source: 'Stockoverflow Jobs Portal',
				resume: reader.result
			}
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'https://jobs.pixwel.com/resumes', true);
			xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		
			// send the collected data as JSON
			xhr.send(JSON.stringify(data));
		
			xhr.onloadend = function () {
				console.log( response );
			};
		};
	}
)
