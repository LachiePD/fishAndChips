const form = document.getElementById('contact-form');


form.addEventListener('submit', async(event)=>{
	event.preventDefault();
	const formData = new FormData(form);
	const	name	=	formData.get('name');
	const	email	=	formData.get('email');
	const	message	=	formData.get('message');


	try{

		const response	=	await fetch(RENDER_SERVICE_URL,{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify({name, email, message})
		});
		if(response.ok){
			console.log('server connected');
		}else{
			console.log('error when fetching server response')
		}
	}catch(err){
		console.log('Error sending mail. Error: ' + err);

	}
});
