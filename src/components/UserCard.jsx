const UserCard = ({user, deletUser, handleClickEdit}) => {
  return (
    <article className=" pt-4 pb-2">
      <div>
          <img className="w-[245px] aspect-[5/4] object-cover 
          mx-auto rounded-md " src={user.image_url ? user.image_url : "/images/noProfile.jpg"} alt="User image" />
      </div>

      <div className=" border-2 border-gray-200 rounded-md">
      <h3 className="capitalize pt-2 font-semibold text-lg">{user.first_name} {user.last_name}</h3>
      <ul className="py-2">
        <li>
        <h4 className="capitalize text-gray-400">Correo</h4>
        <span>{user.email}</span>
        </li>
        <li>
          <h4 className="capitalize text-gray-400">Cumpleaños</h4>
          <span>
            <i className="bx bx-gift pr-2"></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      
      <div>
        
        <button className=" bg-red-500 rounded-md border-2 border-gray-900" onClick={() => deletUser(user.id)}>
          <i className="bx bxs-trash"></i>
        </button>
        
        
        <button className="bg-gray-200 rounded-md border-2 border-gray-900" onClick={() => handleClickEdit(user)}>
          <i className="bx bxs-pencil"></i>
        </button>
      
      </div>
      </div>
    </article>
  )
}

export default UserCard 