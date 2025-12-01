import './bottomgrid.css'
export default function BottomGrid() {
  return (
    <div className="bottom-grid mt-4">
      <div className="box box-1" style={{ gridArea: 'box-1' }}></div>
      <div className="box box-2" style={{ gridArea: 'box-2' }}></div>
      <div className="box box-3" style={{ gridArea: 'box-3' }}></div>
      <div className="box box-4" style={{ gridArea: 'box-4' }}></div>
      <div className="box box-5" style={{ gridArea: 'box-5' }}></div>
    </div>
  )
}
