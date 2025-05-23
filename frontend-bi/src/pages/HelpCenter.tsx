import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const HelpCenter = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    const auth = localStorage.getItem('authenticated');
    if (auth !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (subject && message) {
      toast.success('El mensaje fue enviado correctamente');
      setSubject('');
      setMessage('');
    } else {
      toast.error('Por favor completá todos los campos');
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <TopBar title="Help Center" icon="help" showSearch={false} showHelpButton={false} />
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow w-full max-w-xl"
        >
          <label className="block mb-4">
            <span className="text-neutral">Asunto</span>
            <input
              type="text"
              className="w-full border border-neutral rounded p-2 mt-1 focus:outline-none"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <label className="block mb-6">
            <span className="text-neutral">Descripción del problema</span>
            <textarea
              className="w-full border border-neutral rounded p-2 mt-1 focus:outline-none"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default HelpCenter;
