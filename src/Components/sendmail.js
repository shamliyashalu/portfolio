const sendMail = (e) => {
    e.preventDefault();
  
    const serviceID = 'service_7qwbtbt'
    const templateID = 'template_i8xym7z'; 
    const userID = 'gTT-ar-2G-y53Lbty'
  
    emailjs.send(serviceID, templateID, formData, userID)
      .then((res) => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setStatus('Your message was sent successfully!');
        console.log('Email sent successfully:', res);
      })
      .catch((err) => {
        setStatus('Failed to send message. Please check the console for details.');
        console.error('Email sending failed:', err);
      });
  };
  