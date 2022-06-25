let createRegCard = () => {
    let card = document.createElement('div')
    document.body.appendChild(card)

    card.innerHTML = `
        <div class="reg-background">
            <div class="card" style="margin: 0 5px">
                <div class="card-header">
                    Please Register for futher access.
                </div>
                <div class="card-body">
                    <h5 class="card-title">Please authorize to</h5>
                    <p class="card-text">Access: Play with quizes, unlock much more content, create and publish your own quizes, invite friends and have fun! <br><br>Login Via:</p>
                    <a href="facebook-plugin.html" class="btn btn-primary"><i class="fa fa-brands fa-facebook"></i> Facebook</a>
                    <a href="google-plugin.html" class="btn btn-light btn-outline-dark"><i class="fa fa-brands fa-google"></i> Google</a>
                </div>
                    <button class="close-guy btn btn-outline-primary" style="width: 70px; position: absolute; right: 5px; top: 5px;">Close</button>
                </div>
            </div>
        </div>
    `

    document.querySelector('.close-guy').addEventListener ('click', () => {card.remove()})
}

let buttonArr = document.querySelectorAll('a')

buttonArr.forEach(e => {
    e.addEventListener('click', createRegCard)
})