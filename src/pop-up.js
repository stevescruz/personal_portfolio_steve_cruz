class PopUp extends HTMLElement{
  template = null;
  style = null;

  constructor(title='Project title', image='Project image', description='Project description') {
    super();

    this.title = title;
    this.image = image;
    this.description = description;

    this.attachShadow({ mode:  'open' });
    
    // this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');

    this.style = document.createElement('style');
 
    this.shadowRoot.appendChild(this.style);
  }

  show() {
    const outerWindow = this.shadowRoot.querySelector('.pop-up__outer-window');
    outerWindow.style.display = 'flex';

    document.body.style.overflow = 'hidden';
  }

  close() {
    const outerWindow = this.shadowRoot.querySelector('.pop-up__outer-window');
    outerWindow.style.display = 'none';
    document.body.removeChild(this);

    document.body.style.overflow = 'auto';
  }

  connectedCallback() {
    console.log("modal mounted");

    this.template = document.createElement('template');

    const templateContent = this.template.content;

    this.defaultStyle();    
    this.render();

    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    
    const closeButton = this.shadowRoot.querySelector('.close-button');
    const outerWindow = this.shadowRoot.querySelector('.pop-up__outer-window');

    closeButton.addEventListener('click', () => {
      this.close();
    });
    outerWindow.addEventListener('click', (event) => {
      console.log(event.target.closest('.pop-up__outer-window'));
      if(event.target.closest('.pop-up__outer-window')) {
        this.close();
      }
    });
  }

  disconnectedCallback() {
    console.log("modal dismounted");

    const closeButton = this.shadowRoot.querySelector('.close-button');
    const outerWindow = this.shadowRoot.querySelector('.pop-up__outer-window');

    closeButton.removeEventListener('click', () => {
      this.close();
    });
    outerWindow.removeEventListener('click', () => {
      this.close();
    });
  }

  defaultStyle() {
    this.style.textContent = `
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    strong, p {
      font-family: 'Montserrat', sans-serif;
      color: var(--primary-font-color);
    }
    
    .pop-up__outer-window {
      width: 100%;
      height: 100%;

      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      z-index: 1500;

      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: rgba(0, 0, 0, 0.8);
      padding: 0 5rem;
    }

    .pop-up__inner-window {
      min-height: 600px;
      position: absolute;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: #fff;
      border-radius: 12px;
      padding: 1rem;

      pointer-events: none;
    }

    .close-button {
      position: absolute;
      top: 0;
      right: 0;

      background-color: var(--main-primary-color);
      border-radius: 12px;
    }

    strong {
      font-size: 3rem;
      font-weight: bold;

    }

    .pop-up__inner-window > * + *:not(:last-child) {
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
    }

    img {
      width: 100%;
      max-width: 1200px;
      object-fit: cover;
    }

    .text-content {
      max-width: 700px;
    }

    @media (max-width: 500px) {
      strong {
        font-size: 2.2rem;
        text-align: center;
      }

      p {
        font-size: 1.3rem;
      }
    }
    `;
  }

  render() {
    this.template.innerHTML = `
    <div class="pop-up__outer-window">
      <div class="pop-up__inner-window">
        <button class="close-button"><img src="assets/x.svg"></button>
        <strong>${this.getAttribute('name')}</strong>
        <p>${this.title}</p>
        <img src="${this.image}"/>
        <div class="text-content">
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('pop-up', PopUp);