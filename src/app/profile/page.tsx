// "use client"
// import { useSession } from "next-auth/react"
// import Image from "next/image";

// const profilePage = () => {
//     const {data:session} = useSession();
// const userImg = session?.user?.image
//   return (
//     <div className="flex sm:flex-col justify-center items-center">
//         <div>
//             <Image src={userImg!} alt="user image" width={500} height={300} className="rounded-full"/>
//         </div>
//         <div>
//             <h3 className="text-xl font-bold">Name : {session?.user?.name}</h3>
//             <p className="text-md font-bold">Email : {session?.user?.email}</p>
//         </div>
//     </div>
//   )
// }

// export default profilePage