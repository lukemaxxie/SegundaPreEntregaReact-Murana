import React from 'react';

const QuienesSomos = () => {
  const styles = {
    container: {
      padding: '50px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      color: '#333',
      textAlign: 'center',
    },
    paragraph: {
      color: '#666',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quiénes Somos</h1>
      <p style={styles.paragraph}>Somos una empresa familiar dirigida por dos mujeres apasionadas por hacer que cada evento sea especial.</p>
      <p style={styles.paragraph}>Nuestra familia se enorgullece de ofrecer servicios de alta calidad, centrados en la satisfacción del cliente y la creación de experiencias inolvidables. Creemos en la importancia de la conexión humana y nos esforzamos por reflejar ese valor en cada detalle de nuestros servicios.</p>
      <p style={styles.paragraph}>En Pachamama Eventos, entendemos la importancia de ajustarse a diferentes presupuestos. Por eso, ofrecemos precios amigos que se adaptan a las necesidades de cada cliente. Creemos que todos merecen disfrutar de eventos excepcionales sin comprometer la calidad. Tu celebración es nuestra prioridad, y trabajamos arduamente para hacer que tus sueños se hagan realidad de una manera asequible y accesible.</p>
      <p style={styles.paragraph}>Confía en nosotros para hacer que tu evento sea único, personalizado y lleno de momentos memorables. ¡Gracias por considerarnos para ser parte de tus momentos especiales!</p>
    </div>
  );
};

export default QuienesSomos;