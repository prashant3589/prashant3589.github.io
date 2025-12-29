// Add a simple scroll fade effect
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        //section.style.opacity = 1;
        //section.style.transform = "translateY(0)";
        section.style.opacity = 1 ;
        section.style.transform = none;
      } else {
        //section.style.opacity = 0;
        //section.style.transform = "translateY(50px)";
        section.style.opacity = 1 ;
        section.style.transform = none;
      }
    });
  });
  
  // Initial animation
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // prevent page refresh

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const responseMsg = document.getElementById("responseMsg");

  try {
    const response = await fetch("https://unexhibitable-kimora-observingly.ngrok-free.dev/api/Enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Message: message
      })
    });

    if (response.status === 200) {
      alert("We'll get back to you soon 😊");
      window.location.reload(); // refresh the page
    } else {
     alert("We'll get back to you soon 😊");
      window.location.reload(); // refresh the page
    }

  } catch (error) {
   alert("We'll get back to you soon 😊");
    window.location.reload(); // refresh the page
    console.error(error);
  }
});
