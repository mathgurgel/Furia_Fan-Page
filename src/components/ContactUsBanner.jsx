import './ContactUsBanner.css';

function ContactUsBanner() {
  return (
        <section id="contact-us-banner">
   
            <img id="contact-us-img" src="https://www.instagram.com/p/C9qRvYhJFvk/media/?size=l"></img>
            <div id="contact-us-forms">
                <div id="contact-us-forms-header">
                    <h1>CONTATE-NOS</h1>
                </div>
                <form id="forms">
                    <div className="forms-item">
                        <label for="fname">NOME:</label>
                        <input type="text" id="fname" name="firstname" placeholder="Seu nome.." />
                    </div>
                    <div className="forms-item">
                        <label for="topic">TÓPICO:</label>
                        <select id="topic" name="topic">
                            <option value="partners">PARCERIA</option>
                            <option value="complaints">RECLAMAÇÃO</option>
                            <option value="informations">INFORMAÇÃO</option>
                        </select>
                    </div>
                    <div className="forms-item">
                        <input id="submit-forms" type="submit" value="Enviar" />
                    </div>
                    <div className="forms-item">
                        <label for="fmail">E-MAIL:</label>
                        <input type="email" id="fmail" name="firstname" placeholder="Seu melhor e-mail.." />
                    </div>
                    <div className="forms-item">
                        <label for="subject">ASSUNTO:</label>
                        <textarea id="subject" name="subject" placeholder="Digite sua mensagem.."></textarea>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default ContactUsBanner;
