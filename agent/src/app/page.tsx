import { auth } from "@/auth"
import SignIn from "@/src/app/component/sign-in"
import SignOut from "@/src/app/component/sign-out"
import Userdetails from "./component/Userdetails"
import users from "@/src/app/users/user.json"
export default async function HomePage() {
  const session = await auth()

  return (
    <main >
      <div >
        {!session ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center py-50">Welcome</h1>
            <SignIn />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-7">
              <h1 className="text-2xl font-bold">
                Hello, {session.user?.name}
              </h1>
              <SignOut/>
            </div>
            <Userdetails user={users} />
          </>
        )}
      </div>
    </main>
  )
}
