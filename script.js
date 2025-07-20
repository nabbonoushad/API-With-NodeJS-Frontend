$.get("data-api.nabbonoushad.xyz/api/about-me", function (data) {
    $('#image').attr('src', data.ME.data.image)
    $('#name').append(data.ME.data.name)
    $('#role').append(data.ME.role)
    $('#about').append(data.ME.data.about)
    $('#email').append("Email: " + data.ME.data.email)
    $('#phone').append("Phone: " + data.ME.data.phone)
    $('#website').append("Website: " + data.ME.data.website)
    $('#location').append("Location: " + data.ME.data.address)
    for (let [key, value] of Object.entries(data.ME.data.skills)) {
        let skillDiv = document.createElement('div')
        let desc = document.createElement('div')
        let title = document.createElement('h3')
        title.innerText = key
        skillDiv.appendChild(title)
        for (let [key1, value1] of Object.entries(value)) {
            let p = document.createElement('p')
            p.innerText = key1 + ": " + value1
            desc.appendChild(p)
        }
        skillDiv.appendChild(desc)
        $('#skills').append(skillDiv)
    }
    $('#expectedSalary').append("Expected Salary: " + data.ME.data.expectedSalary)
    $('#github').attr('href', data.ME.data.github)
    $('#linkedIn').attr('href', data.ME.data.LinkedIn)
    $('#coffeelvl').append('Coffee Level: ', data.ME.caffineLevel)
});
