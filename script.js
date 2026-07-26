/*======================================
        EMAILJS INITIALIZE
======================================*/

(function(){

    emailjs.init("WZR_5_WuqrscbBkWJ");

})();





/*======================================
        MOBILE MENU
======================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");


if(menuToggle && navbar){

    menuToggle.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}





/*======================================
        STICKY HEADER
======================================*/

const header = document.querySelector(".header");


if(header){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 100){

            header.classList.add("sticky");

        }
        else{

            header.classList.remove("sticky");

        }

    });

}






/*======================================
        SMOOTH SCROLL
======================================*/


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});






/*======================================
        CLOSE MOBILE MENU
======================================*/


document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navbar){

            navbar.classList.remove("active");

        }

    });

});






/*======================================
        BACK TO TOP
======================================*/


const backToTop = document.getElementById("backToTop");


if(backToTop){


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 400){

            backToTop.classList.add("show");

        }
        else{

            backToTop.classList.remove("show");

        }


    });



    backToTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}






/*======================================
        COUNTER ANIMATION
======================================*/


const counters = document.querySelectorAll(".counter");


counters.forEach(counter=>{


    counter.innerText="0";


    const updateCounter=()=>{


        const target = +counter.getAttribute(
            "data-target"
        );


        const current = +counter.innerText;


        const increment = target / 100;



        if(current < target){


            counter.innerText = Math.ceil(
                current + increment
            );


            setTimeout(updateCounter,20);


        }

        else{


            counter.innerText = target;


        }


    };


    updateCounter();


});






/*======================================
        CONTACT FORM
        EMAIL + WHATSAPP
======================================*/


const contactForm = document.getElementById(
    "contact-form"
);



if(contactForm){


    contactForm.addEventListener(
        "submit",
        function(e){


            e.preventDefault();



            const name =
            document.querySelector(
                'input[name="name"]'
            ).value;



            const email =
            document.querySelector(
                'input[name="email"]'
            ).value;



            const phone =
            document.querySelector(
                'input[name="phone"]'
            ).value;



            const message =
            document.querySelector(
                'textarea[name="message"]'
            ).value;





            /* EMAILJS */


            const templateParams = {

                name:name,

                email:email,

                phone:phone,

                message:message

            };



            emailjs.send(

                "service_9dfndos",

                "template_k0dbqnq",

                templateParams

            )

            .then(function(response){

                console.log(
                    "Email Sent",
                    response
                );


            })

            .catch(function(error){

                console.log(
                    "Email Error",
                    error
                );


            });







            /* WHATSAPP */


            const whatsappMessage =

            "New Website Inquiry\n\n" +

            "Name: " + name + "\n" +

            "Email: " + email + "\n" +

            "Phone: " + phone + "\n" +

            "Message: " + message;




            const whatsappNumber =
            "923274777737";



            const whatsappURL =

            "https://wa.me/" +

            whatsappNumber +

            "?text=" +

            encodeURIComponent(
                whatsappMessage
            );



            window.open(

                whatsappURL,

                "_blank"

            );



            contactForm.reset();



        }

    );


}
