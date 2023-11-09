import '../src/foother.css';
import edificio from '../public/edificio.jpg'
import captura from '../public/captura.jpg'
import aws from '../public/aws.jpg'
import oficina from '../public/oficina.jpg'
import icono1 from '../public/icono1.png'
import icono2 from '../public/icono2.png'
import icono3 from '../public/icono3.png'
import amazon from '../public/amazon.png'

const Presentation = () => {
  return (
    <div>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navListli}><a style={styles.navLista} href="#joinAmazon"><img style={{width:'50px'}}src={amazon} alt="" /></a></li>
          <button style={styles.navListliButton}><a style={styles.navLista} href="#externalCommunication">Comunicación externa</a></button>
          <button style={styles.navListliButton}><a style={styles.navLista} href="#internalCommunication">Comunicación interna</a></button>
          <button style={styles.navListliButton}><a style={styles.navLista} href="#diversification">Diversificación</a></button>
          <button style={styles.navListliButton}><a style={styles.navLista} href="#technologicalInnovation">Innovación tecnológica</a></button>
          <button style={styles.navListliButton}><a style={styles.navLista} href="#logistics">Logística</a></button>
          <button style={styles.navListliButton}><a style={styles.navLista} href="#socialImpact">Impacto en la sociedad</a></button>
          <button style={styles.navListliButton}><a style={styles.navLista} href="#excellenceCommitment">Nuestro compromiso con la excelencia</a></button>
        </ul>
      </nav>
      <div style={styles.container}>
      <section id="joinAmazon" style={styles.section2}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '50px' }}>
            <h2 style={styles.title}>Únete al equipo de Amazon</h2>
            <p style={styles.paragraph}>
              Amazon es una empresa líder en tecnología e innovación que ofrece un ambiente de trabajo dinámico y motivador. Si estás buscando unirte a un equipo apasionado en una empresa en constante crecimiento, ¡estás en el lugar correcto!
            </p>
          </div>
          <img style={styles.imagen} src={edificio} alt="edificio" />
        </div>
      </section>
      <section id="externalCommunication" style={styles.section2}>
        <div style={{ display: 'flex' }}>
          <img style={styles.imagen} src={captura} alt="captura" />
          <div style={{ marginLeft: '50px' }}>
            <h2 style={styles.title}>Nuestra comunicación externa</h2>
            <p style={styles.paragraph}>
              En Amazon nos comunicamos con nuestros clientes a través de múltiples canales como nuestro sitio web, aplicaciones móviles y redes sociales. Implementamos estrategias de marketing en línea para brindarte la mejor experiencia de compra y fidelizarnos contigo. Además, te mantenemos informado acerca de tus pedidos y promociones a través de correo electrónico.
            </p>
          </div>
        </div>
      </section>
      <section id="internalCommunication" style={styles.section}>
        <h2 style={styles.title}>Nuestra comunicación interna</h2>
        <p style={styles.paragraph}>
          En Amazon valoramos la comunicación y colaboración entre nuestros empleados. Fomentamos un ambiente de trabajo en el que se promueve la creatividad y la innovación. Utilizamos diversas herramientas y tecnologías como reuniones regulares, tablones de anuncios en línea, intranets y sistemas de retroalimentación para mantener a nuestros empleados informados y comprometidos.
        </p>
      </section>
      <section id="diversification" style={styles.section2}>
        <div style={{ display: 'flex' }}>
          <img style={styles.imagen} src={aws} alt="captura" />
          <div style={{ marginLeft: '50px' }}>
            <h2 style={styles.title}>Nuestra diversificación</h2>
            <p style={styles.paragraph}>
              Amazon ha ampliado su negocio más allá de la venta minorista en línea y se ha expandido en áreas como la computación en la nube, producción de contenido de transmisión en línea, dispositivos de hardware y servicios de entrega. Nuestra meta es continuar diversificándonos y expandiendo nuestra oferta de servicios.
            </p>
          </div>
        </div>
      </section>
      <section id="technologicalInnovation" style={styles.section}>
        <h2 style={styles.title}>Nuestra innovación tecnológica</h2>
        <p style={styles.paragraph}>
          En Amazon nos enfocamos en la innovación tecnológica. Hemos desarrollado tecnologías como Amazon Pay, el asistente virtual Alexa y la automatización de almacenes con robots. Estamos constantemente involucrados en iniciativas tecnológicas para mejorar nuestras operaciones y servicios y brindarte experiencias de compra más rápidas y eficientes.
        </p>
      </section>
      <section id="logistics" style={styles.section2}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '50px' }}>
            <h2 style={styles.title}>Énfasis en la logística y cadena de suministro</h2>
            <p style={styles.paragraph}>
              Amazon ha invertido significativamente en nuestra infraestructura logística y cadena de suministro con el objetivo de garantizar entregas rápidas y confiables a nuestros clientes. Hemos construido múltiples centros de cumplimiento, establecido una flota de vehículos de entrega y implementado tecnología avanzada de seguimiento.
            </p>
          </div>
          <img style={styles.imagen} src={oficina} alt="oficina" />
        </div>
      </section>
      <section id="socialImpact" style={styles.section}>
        <h2 style={styles.title}>Nuestro impacto en la sociedad</h2>
        <p style={styles.paragraph}>
          En Amazon somos conscientes del impacto que nuestras operaciones tienen en la sociedad y el medio ambiente. Nos hemos comprometido a ser neutros en carbono para el año 2040 y trabajamos de manera constante para reducir nuestra huella ambiental. Además, tomamos medidas para abordar las preocupaciones laborales y estamos comprometidos en mejorar estas prácticas.
        </p>
      </section>
      <section id="excellenceCommitment" style={styles.section3}>
        <h2 style={styles.title}>Nuestro compromiso con la excelencia</h2>
        <div style={{ display: "flex" }}>
          <section style={styles.sectionChiquita}>
            <img style={styles.imagen} src={icono1} alt="icono1" />
            <h2 style={styles.titleChiquita}>En la logística</h2>
            <p style={styles.paragraph}>
              Nos esforzamos por mejorar nuestros tiempos de entrega y garantizar que nuestros clientes reciban sus productos a tiempo.
            </p>
          </section>
          <section style={styles.sectionChiquita}>
            <h2 style={styles.titleChiquita}>En el servicio al cliente</h2>
            <p style={styles.paragraph}>
              Nos enfocamos en brindar a nuestros clientes una experiencia de compra excepcional en todo momento.
            </p>
            <img style={styles.imagen} src={icono2} alt="icono2" />
          </section>
          <section style={styles.sectionChiquita}>
            <img style={styles.imagen} src={icono3} alt="icono3" />
            <h2 style={styles.titleChiquita}>En la tecnología</h2>
            <p style={styles.paragraph}>
              Nos mantenemos a la vanguardia de la tecnología y las últimas innovaciones para brindarte la mejor experiencia de compra en línea.
            </p>
          </section>
        </div>
      </section>
    </div>
      <footer style={styles.footer}className="footer">
        <div style={{...styles.footercontent,  alignItems:'center', justifyContent:'space-between'}}className="footer-content">
          <div style={styles.footerSection}className="footer-section">
            <h4>Integrantes del Grupo:</h4>
            <ul>
              <li>Bellisonzi Agustin</li>
              <li>Perez Axel</li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h4>Profesor:</h4>
            <p>Figueroa Pedro</p>
          </div>
          <div style={styles.footerSection}>
            <h4>Materia:</h4>
            <p>Competencias Comunicacionales II</p>
          </div>
          <div style={{...styles.footerSection, color:'yellow'}}>
            <p>Escuela Superior de Comercio</p>
          </div>
        </div>
      </footer>
    </div>

  )
};

const styles = {
  container: {
    fontFamily: 'RobotoDld',
    marginTop: '90px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#F0F8FF',
  },
  sectionChiquita: {
    maxWidth: '300px',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    maxWidth: '900px',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section2: {
    maxWidth: '800px',
    margin: '20px',
    padding: '20px',
    background: '#F0F8FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section3: {
    maxWidth: '900px',
    margin: '20px',
    padding: '20px',
    background: '#F0F8FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#232f3e',
    fontSize: '50px',
    marginBottom: '10px',
  },
  titleChiquita: {
    color: '#232f3e',
    fontSize: '30px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '20px',
    color: '#232f3e',
  },
  imagen: {
    width: '43%', // Tamaño de la imagen como una tercera parte del ancho del contenedor
    height: 'auto', // Mantenemos la relación de aspecto original
  },
  navbar: {
    position: 'fixed',
    top: '0',
    width: '100%',
    backgroundColor: '#232f3e',
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },
  navListli:{
    margin: '0 20px',
  },
  navListliButton:{
    margin: '0 20px',
    backgroundColor:'#232f3e',
    border: 'none',
    
  },
  navLista: {
    color: 'white',
    textDecoration: 'none',
  },

  footer :{
    backgroundColor:'#1a232d',
    color: 'white',
    padding: '20px',
    textAlgin: 'center'
  },
  
  footercontent:{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  
  footerSection :{
    flex: 1,
    margin: '10px'
  }
};

export default Presentation;
