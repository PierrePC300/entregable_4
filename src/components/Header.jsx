const Header = ({setIsShowForm}) => {

  const handleClickShowModal = () =>{
    setIsShowForm((isShowForm) => !isShowForm)
  } 
  return (
    <header className="mx-auto">
        <h1 className="py-4 pl-4 font-bold text-3xl">Usuarios</h1>

        <button onClick={handleClickShowModal} 
        className='bg-blue-p text-cyan-100 p-2
         hover:bg-sky-400 text-sm absolute right-4 top-6'> 
        + Crear nuevo usuario
        </button>
    </header>
  )
}

export default Header