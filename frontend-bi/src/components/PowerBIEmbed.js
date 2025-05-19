import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function PowerBIEmbedSimple() {
  return (
    <div style={{ height: '600px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: 'a70a4a8f-20cf-4e2b-9b3d-ecafed7f8381', // ID del reporte público de ejemplo
          embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNTRjNjAxYjgtYjE4Ni00YTcxLTliZGEtMTBlMzYwYzUzNDgwIiwidCI6ImQwNDExNjFjLTA2MjctNDVkZS1hMTM2LTg0ZDliYmQ2ZDYyOSIsImMiOjR9',
          tokenType: models.TokenType.Embed,
          accessToken: '', // Para públicos puede dejarse vacío
          settings: {
            panes: {
              filters: { visible: false },
              pageNavigation: { visible: false }
            },
            navContentPaneEnabled: false
          }
        }}
        eventHandlers={
          new Map([
            ['loaded', () => console.log('Reporte cargado')],
            ['rendered', () => console.log('Reporte renderizado')],
            ['error', (event) => console.error('Error:', event.detail)]
          ])
        }
        cssClassName={"report-style-class"}
        getEmbeddedComponent={(report) => {
          console.log('Instancia del reporte:', report);
        }}
      />
    </div>
  );
}

export default PowerBIEmbedSimple;