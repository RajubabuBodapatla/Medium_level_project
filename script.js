
    const form = document.getElementById('jobApplicationForm');
    const nextButtons = document.querySelectorAll('.next-button');
    const prevButtons = document.querySelectorAll('.prev-button');
    const steps = document.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const cardsContainer = document.getElementById('cardsContainer');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');
    const modalDetails = document.getElementById('modalDetails');
    let currentStep = 0;
  
    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (validateStep(currentStep)) {
          steps[currentStep].classList.remove('form-step-active');
          stepIndicators[currentStep].classList.remove('step-indicator-active');
          currentStep++;
          steps[currentStep].classList.add('form-step-active');
          stepIndicators[currentStep].classList.add('step-indicator-active');
        }
      });
    });

    
  
    prevButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (currentStep > 0) {
          steps[currentStep].classList.remove('form-step-active');
          stepIndicators[currentStep].classList.remove('step-indicator-active');
          currentStep--;
          steps[currentStep].classList.add('form-step-active');
          stepIndicators[currentStep].classList.add('step-indicator-active');
        }
      });
    });
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = formData.get('firstname');
      const icon = document.createElement('span');
      icon.className = 'icon';
      icon.innerHTML = '<i class="fa-solid fa-user" style="color: #ffffff;"></i>'
      
      card.addEventListener('click', () => showDetails(formData));
      cardsContainer.appendChild(card);
      card.appendChild(icon)
      form.reset();
      steps[currentStep].classList.remove('form-step-active');
      stepIndicators[currentStep].classList.remove('step-indicator-active');
      currentStep = 0;
      steps[currentStep].classList.add('form-step-active');
      stepIndicators[currentStep].classList.add('step-indicator-active');
    });
  
    closeButton.addEventListener('click', () => {
     modal.classList.add("hidden")
      // console.log("event")
    
    });
  
    function validateStep(step) {
      const inputs = steps[step].querySelectorAll('input[required]');
      for (let input of inputs) {
        if (!input.value) {
          input.style.border="red solid 0.5px"
          input.placeholder="this field is required"
          input.classList.toggle("error-message")
          input.onfo
          return false;
        }
      }
      return true;
    }
  
    function showDetails(formData) {
      let detailsHTML = `
        <h2>Application Details&emsp;<i class="fa-solid fa-user" style="color: #214f73;"></i></h2>
        <p><strong>FirstName:</strong> ${formData.get('firstname')}</p>
        <p><strong>LastName:</strong> ${formData.get('lastname')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Phone Number:</strong> ${formData.get('phone')}</p>
        <p><strong>Address:</strong> ${formData.get('address')}</p>
        <p><strong>Date of Birth:</strong> ${formData.get('dob')}</p>
        <p><strong>Gender:</strong> ${formData.get('gender')}</p>
        <p><strong>Position:</strong> ${formData.get('position')}</p>
        <p><strong>Company:</strong> ${formData.get('company')}</p>
        <p><strong>JoiningDate:</strong> ${formData.get('jod')}</p>
        <p><strong>salary per month:</strong> ${formData.get('salary')}</p>
        <p><strong>Years of Experience:</strong> ${formData.get('experience')}</p>
        <p><strong>Citizen of India:</strong> ${formData.get('citizen') ? 'Yes' : 'No'}</p>
        <p><strong>Disabled:</strong> ${formData.get('disabled') ? 'Yes' : 'No'}</p>
        <p><strong>Highest Education Level:</strong> ${formData.get('education1')}</p>
        <p><strong>Institution Name:</strong> ${formData.get('education2')}</p>
        <p><strong>Year of Graduation:</strong> ${formData.get('education3')}</p>
      `;
      modalDetails.innerHTML = detailsHTML;
      modal.classList.remove('hidden');
    }

  
  