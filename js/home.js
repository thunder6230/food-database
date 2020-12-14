const homeToDom = () => {
    
    console.log("generated Home ...")
    $(".site_main").html(`
        <div class="greeting" style='display: none;'>
            <h1>Welcome to my Food and Health database</h1>
            <p>If you want to read about diets, health or just don't know what to cook this is Your Site.</p>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=thunder6230@gmail.com&tf=1" target="_blank">Contact Me</a>
        </div>
    `)
    $(".greeting").fadeIn(500)
}

homeToDom()