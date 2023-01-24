var contenido = document.querySelector('#contenido')

    fetch('https://randomuser.me/api/?nat=es')
    .then(res => res.json())
    .then(data => {
    console.log(data.results['0'])
        
    var nameperfil = data.results['0'].name.first
    document.getElementById('nameperfil').innerHTML = nameperfil

    var fotoperfil = data.results['0'].picture.large
    document.getElementById('fotoperfil').setAttribute('src', fotoperfil) 
        
    var nombre = data.results['0'].name.first
    document.getElementById('nombre').innerHTML = nombre

    var apellido = data.results['0'].name.last
    document.getElementById('apellido').innerHTML = apellido

    var calle = data.results['0'].location.street.name
    document.getElementById('calle').innerHTML = calle

    var numero = data.results['0'].location.street.number
    document.getElementById('numero').innerHTML = numero

    var edad = data.results['0'].dob.age
    document.getElementById('edad').innerHTML = edad

    var correo = data.results['0'].email
    document.getElementById('correo').innerHTML = correo

    var phone = data.results['0'].phone
    document.getElementById('phone').innerHTML = phone

    var cell = data.results['0'].cell
    document.getElementById('cell').innerHTML = cell

    var gender = data.results['0'].gender
    document.getElementById('gender').innerHTML = gender

    var city = data.results['0'].location.city
    document.getElementById('city').innerHTML = city
    
    var state = data.results['0'].location.state
    document.getElementById('state').innerHTML = state
    
    var country = data.results['0'].location.country
    document.getElementById('country').innerHTML = country

    var postcode = data.results['0'].location.postcode
    document.getElementById('postcode').innerHTML = postcode


    })    
    
    