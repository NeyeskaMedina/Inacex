import TableRolled from '../components/Generals/Table/TableRolled.jsx';

const ListProspectBk = () => {
 
  return (
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', position: 'relative' }}>
        <h3 className='roboto-condensed' style={{ color: 'var(--verde-inacex)', paddingLeft: '10px' }}>Lista de Prospectos</h3>
        <TableRolled />
    </div>
    
  )
}

export default ListProspectBk;