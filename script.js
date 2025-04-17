
  const form = document.querySelector(".form-contato");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); 
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      form.reset(); 
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  });

