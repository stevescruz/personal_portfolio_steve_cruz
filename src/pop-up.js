class PopUp extends HTMLElement{
  constructor() {
    super();

    const template = document.createElement('template');

    template.innerHTML = `
    <div class="pop-up__outer-window">
      <div class="pop-up__inner-window">
        <button class="close-button"><img src="assets/x.svg"></button>
        <h1></h1>
        <p slot="project">eBarber</p>
        <p slot="image">Image</p>
        <p slot="description">Description</p>
      </div>
    </div>
    `;

    const templateContent = template.content;

    this.attachShadow({ mode:  'open' });
    this.shadowRoot.appendChild(templateContent.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');

    const style = document.createElement('style');
    
    style.textContent = `
    p {
      font-size: 20px;
      font-weight: bold;
      color: tomato;
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
    }

    .pop-up__inner-window {
      position: absolute;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: #fff;
      border-radius: 12px;
      padding: 15rem;

      pointer-events: none;
    }

    .close-button {
      position: absolute;
      top: 0;
      right: 0;

      background-color: var(--main-primary-color);
      border-radius: 12px;
    }
    `;

    this.shadowRoot.appendChild(style);
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
    
    const closeButton = this.shadowRoot.querySelector('.close-button');
    const outerWindow = this.shadowRoot.querySelector('.pop-up__outer-window');

    // closeButton.addEventListener('click', () => {
    //   this.close();
    // });
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

    // closeButton.removeEventListener('click', () => {
    //   this.close();
    // });
    outerWindow.removeEventListener('click', () => {
      this.close();
    });
  }

}

customElements.define('pop-up', PopUp);