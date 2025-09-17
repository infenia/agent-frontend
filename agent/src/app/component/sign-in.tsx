
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-175">Signin with GitHub</button>
    </form>
  )
} 