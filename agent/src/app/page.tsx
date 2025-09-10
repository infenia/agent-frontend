import { auth } from "@/auth"
import SignIn from "@/src/app/component/sign-in"
import SignOut from "@/src/app/component/sign-out"

export default async function HomePage() {
  const session = await auth()

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="p-6 border rounded-lg shadow-md">
        {!session ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Welcome</h1>
            <SignIn />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">
              Hello, {session.user?.name}
            </h1>
            <SignOut />
          </>
        )}
      </div>
    </main>
  )
}
