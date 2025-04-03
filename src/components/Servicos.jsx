import React from 'react';
import { Image } from 'react-bootstrap';


function Servicos() {
  return (
    <section className="text-center" id='servicos'>
      <Image src="/images/servico.svg" alt="Serviços" className='titulo' />

      <div className="cards">
        <div class="card">
          <div class="image_container">
            <Image src="/images/icons/icon-corte.svg" alt="corte" style={{ width: '100px', height: 'auto' }} />
          </div>
          <div class="title">
            <span>Corte Masculino</span>
            <p>Refine seu estilo com nosso corte masculino. Nosso profissional cuida de cada detalhe para um estilo único e marcante.</p>
          </div>

          <div class="action">
            <div class="price">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg>
                &nbsp;
                40,00
              </span>
              &nbsp;&nbsp;
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
                  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527" />
                </svg>
                &nbsp;
                30 min
              </span>
            </div>

          </div>
        </div>

        <div class="card">
          <div class="image_container">
            <Image src="/images/icons/icon-barba.svg" alt="barba" style={{ width: '100px', height: 'auto' }} />
          </div>
          <div class="title">
            <span>Barba</span>
            <p>Serviço feito com toalha quente e um creme próprio para amaciar e abrir os poros, tornando mais fácil a retirada dos pelos.</p>
          </div>

          <div class="action">
            <div class="price">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg>
                &nbsp;
                40,00
              </span>
              &nbsp;&nbsp;
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
                  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527" />
                </svg>
                &nbsp;
                30 min
              </span>
            </div>

          </div>
        </div>

        <div class="card">
          <div class="image_container">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 24.970703 1.9726562 A 2.0002 2.0002 0 0 0 23 4 L 23 7.5371094 L 21.333984 5.9433594 A 2.0002 2.0002 0 1 0 18.570312 8.8339844 L 23 13.072266 L 23 13.601562 L 19.962891 16.507812 L 15.728516 17.59375 L 15.126953 17.261719 L 13.507812 11.478516 A 2.0002 2.0002 0 0 0 11.597656 9.9902344 A 2.0002 2.0002 0 0 0 9.65625 12.556641 L 10.214844 14.548828 L 6.96875 12.755859 A 2.0002 2.0002 0 0 0 6.0136719 12.494141 A 2.0002 2.0002 0 0 0 5.0332031 16.257812 L 8.0488281 17.923828 L 6.0644531 18.431641 A 2.0002 2.0002 0 1 0 7.0566406 22.306641 L 13.15625 20.744141 L 13.755859 21.074219 L 14.855469 24.998047 L 13.753906 28.925781 L 13.15625 29.255859 L 7.0546875 27.691406 A 2.0002 2.0002 0 0 0 6.4589844 27.623047 A 2.0002 2.0002 0 0 0 6.0605469 31.566406 L 8.0488281 32.076172 L 5.0332031 33.742188 A 2.0006259 2.0006259 0 1 0 6.96875 37.244141 L 10.214844 35.451172 L 9.6542969 37.451172 A 2.0002 2.0002 0 1 0 13.505859 38.529297 L 15.126953 32.738281 L 15.730469 32.404297 L 19.960938 33.490234 L 23 36.398438 L 23 36.927734 L 18.546875 41.189453 A 2.0002 2.0002 0 1 0 21.3125 44.078125 L 23 42.464844 L 23 46 A 2.0002 2.0002 0 1 0 27 46 L 27 42.464844 L 28.689453 44.080078 A 2.0002 2.0002 0 1 0 31.453125 41.189453 L 27 36.927734 L 27 36.398438 L 30.039062 33.492188 L 34.273438 32.40625 L 34.873047 32.738281 L 36.507812 38.578125 A 2.0002 2.0002 0 1 0 40.359375 37.5 L 39.785156 35.451172 L 43.033203 37.244141 A 2.0002 2.0002 0 1 0 44.966797 33.742188 L 41.951172 32.076172 L 43.960938 31.560547 A 2.0002 2.0002 0 0 0 43.501953 27.617188 A 2.0002 2.0002 0 0 0 42.96875 27.6875 L 36.84375 29.255859 L 36.244141 28.923828 L 35.144531 25 L 36.244141 21.074219 L 36.84375 20.744141 L 43.001953 22.322266 A 2.0002463 2.0002463 0 1 0 43.996094 18.447266 L 41.951172 17.923828 L 44.966797 16.257812 A 2.0002 2.0002 0 0 0 43.927734 12.496094 A 2.0002 2.0002 0 0 0 43.033203 12.755859 L 39.785156 14.548828 L 40.349609 12.535156 A 2.0002 2.0002 0 0 0 38.347656 9.9707031 A 2.0002 2.0002 0 0 0 36.498047 11.457031 L 34.873047 17.261719 L 34.271484 17.59375 L 30.039062 16.507812 L 27 13.601562 L 27 13.072266 L 31.460938 8.8046875 A 2.0002 2.0002 0 0 0 30.083984 5.3398438 A 2.0002 2.0002 0 0 0 28.695312 5.9140625 L 27 7.5351562 L 27 4 A 2.0002 2.0002 0 0 0 24.970703 1.9726562 z M 23 19.136719 L 23 21.609375 L 20.833984 20.414062 L 21.462891 20.251953 A 2.0002 2.0002 0 0 0 22.347656 19.759766 L 23 19.136719 z M 27 19.138672 L 27.652344 19.761719 A 2.0002 2.0002 0 0 0 28.539062 20.253906 L 29.164062 20.414062 L 27 21.609375 L 27 19.138672 z M 18.669922 23.789062 L 20.863281 25 L 18.669922 26.210938 L 18.857422 25.539062 A 2.0002 2.0002 0 0 0 18.857422 24.458984 L 18.669922 23.789062 z M 31.330078 23.789062 L 31.142578 24.460938 A 2.0002 2.0002 0 0 0 31.142578 25.539062 L 31.330078 26.210938 L 29.138672 25 L 31.330078 23.789062 z M 23 28.390625 L 23 30.859375 L 22.349609 30.236328 A 2.0002 2.0002 0 0 0 21.462891 29.744141 L 20.837891 29.583984 L 23 28.390625 z M 27 28.390625 L 29.164062 29.585938 L 28.539062 29.746094 A 2.0002 2.0002 0 0 0 27.652344 30.238281 L 27 30.861328 L 27 28.390625 z"></path>
</svg>          </div>
          <div class="title">
            <span>Nevou</span>
            <p>Entre nessa moda e lance um nevou no cabelo!</p>
          </div>

          <div class="action">
            <div class="price">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg>
                &nbsp;
                100,00
              </span>
              &nbsp;&nbsp;
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm-fill" viewBox="0 0 16 16">
                  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527" />
                </svg>
                &nbsp;
                30 min
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image className='mb-5' src="/images/precos.jpg" alt="Tabela de Preços" style={{ width: '300px', height: 'auto' }} aria-describedby="precoTabela" />


      <div id="precoTabela" className="sr-only" style={{ display: none; }} >
		<table>
		<caption>Lista de serviços e preços</caption>
		<thead>
		<tr>
		<th>Serviço</th>
		<th>Preço</th>
		</tr>
		</thead>
		<tbody>
		<tr>
		<td>Corte</td>
		<td>R$ 40,00</td>
		</tr>
		<tr>
		<td>Barba</td>
		<td>R$ 40,00</td>
		</tr>
		<tr>
		<td>Corte + Barba</td>
		<td>R$ 70,00</td>
		</tr>
		<tr>
		<td>Pézinho</td>
		<td>R$ 10,00</td>
		</tr>
		<tr>
		<td>Pigmentação</td>
		<td>R$ 15,00</td>
		</tr>
		<tr>
		<td>Matização</td>
		<td>R$ 15,00</td>
		</tr>
		<tr>
		<td>Alisamento</td>
		<td>R$ 30,00</td>
		</tr>
		<tr>
		<td>Luzes</td>
		<td>R$ 70,00</td>
		</tr>
		<tr>
		<td>Nevou</td>
		<td>R$ 100,00</td>
		</tr>
		</tbody>
		</table>
		</div>
    </section>
  );
}

export default Servicos;
