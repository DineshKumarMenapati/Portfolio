
let c = document.querySelector('canvas');
let $ = c.getContext('2d');


let col = function(x, y, r, g, b)
{
    $.fillStyle = "rgba(" + r + ", "+ g +", "+ b +" )";
    $.fillRect(x,y,1,1);
}

let R = function(x,y,t){
    return (Math.floor(192+64*Math.cos((x*x - y*y) / 300 + t)));
}

let G = function(x,y,t)
{
    return ( Math.floor( 192 + 64*Math.sin( (x*x*Math.cos(t/4) + y*y*Math.sin(t/3)) / 300) ) )
}

let B = function(x, y, t){
    return (Math.floor(192+64*Math.sin( 5 *Math.sin(t/9) + ((x - 100) * (x-100) + (y-100) * (y-100)) / 1100)))
}

let t = 0

let run = function()
{
    for(x = 0; x <= 35; x++)
    {
        for(y = 0; y <= 35; y++)
        {
            col(x,y, R(x,y, t), G(x,y,t), B(x,y,t))
        }
    }

    t = t + 0.070;
    window.requestAnimationFrame(run)
}

run()


var typed = new Typed(".first-text", { strings: ["I'm Dinesh", "I'm a front-end Devloper", "I'm a Programmer!"], typeSpeed:150, backSpeed:150, loop:true, smartBackspace: true})


// intersection observer for projects section


// const observer_timeline = new IntersectionObserver(entries => 
//     {
//         entries.forEach(entry =>{
//             if(entry.isIntersecting)
//             {
//                 if(entry.target.classList.contains("projects-timeline"))
//                 {
//                     entry.target.className = "projects-timeline animation-downwards"
//                     console.log(entry)
//                 }
//                 else{
//                     entry.target.classList.add("time-line-container-animation")
//                 }

//             }
//             else
//             {
//                 if(entry.target.classList.contains("projects-timeline"))
//                 {
//                     entry.target.className = "projects-timeline"
//                     console.log(entry)
//                 }
//                 else{
//                     entry.target.classList.remove("time-line-container-animation")
//                 }

//             }
//         })
//     })

// const id = document.querySelector(".projects-timeline");
// observer_timeline.observe(id);


// const timeline_container_ids = document.querySelectorAll(".timeline-container");

// timeline_container_ids.forEach( (id) =>
//     {
//         observer_timeline.observe(id);
//     }
// )


const form = document.querySelector('form');
const fullName = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail()
{

    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br>
    Message: ${message.value}`;

    Email.send({
        SecureToken : "3301c64f-4505-4b0f-bd67-7322e76ca56f",
        To : 'dineshmenapati2002@gmail.com',
        From : "dineshmenapati2002@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => 
      {
        if(message == "OK")
        {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs()
{
    const items = document.querySelectorAll(".input-item");

    for(const item of items)
    {
        if(item.value == "")
        {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != "")
        {
            checkEmail();
        }

        items[1].addEventListener("keyup", () =>{
            checkEmail();
        })

        item.addEventListener("keyup", () =>
        {
            if(item.value != "")
            {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else
            {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail()
{
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 

    const errorTXTEmail = document.querySelector(".error-txt.email")

    if(!email.value.match(emailRegex))
    {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != "")
        {
            errorTXTEmail.innerText = "Enter a valid email address";
        }
        else
        {
            errorTXTEmail.innerText = "Email Address can't be blank"
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !message.classList.contains("error") && !subject.classList.contains("error"))
    {
        sendEmail();

        form.reset();
    }
});

