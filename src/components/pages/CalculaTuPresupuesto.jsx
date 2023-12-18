import React, { useState } from 'react';

const CalculaTuPresupuesto = () => {
  const [personas, setPersonas] = useState(50);
  const [correo, setCorreo] = useState('');
  const [lugar, setLugar] = useState('');
  const [comentario, setComentario] = useState('');
  const [presupuesto, setPresupuesto] = useState(0);
  const [error, setError] = useState('');

  const handlePersonasChange = (event) => {
    setPersonas(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleLugarChange = (event) => {
    setLugar(event.target.value);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!personas || !correo || !lugar || !comentario) {
      setError('Por favor, llena todos los campos');
      return;
    }
    const costoPorPersona = 150;
    const costoLugar = lugar === 'lugar1' ? 500 : 1000; 
    const total = personas * costoPorPersona + costoLugar;
    setPresupuesto(total);
    setError('');
    console.log('Datos del formulario:', personas, correo, lugar, comentario);
  };
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      padding: '10px',
      width: '200px',
    },
    button: {
      padding: '5px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  return (
    <div style={styles.container}>
      <h1>Calcula tu presupuesto</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Personas:
          <input type="number" value={personas} onChange={handlePersonasChange} style={styles.input} />
        </label>
        <label>
          Correo:
          <input type="email" value={correo} onChange={handleCorreoChange} style={styles.input} />
        </label>
        <label>
          Lugar:
          <input type="text" value={lugar} onChange={handleLugarChange} style={styles.input} />
        </label>
        <label>
          Comentario:
          <textarea value={comentario} onChange={handleComentarioChange} style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      <h2>Presupuesto estimado: ${presupuesto}</h2>
    </div>
  );
};

export default CalculaTuPresupuesto;