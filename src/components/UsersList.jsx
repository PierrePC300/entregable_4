import UserCard from "./UserCard"

const UsersList = ({users, deletUser, handleClickEdit}) => {
  return (
    <section className="grid gap-10 auto-row-auto grid-cols-[repeat(auto-fill,_250px)] justify-center">
        {users.map((user) => (
        <UserCard key={user.id} user={user} deletUser={deletUser} handleClickEdit={handleClickEdit} />
        ))}
    </section>
  )
}

export default UsersList;