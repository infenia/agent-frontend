"use client"

import { signOutAction } from "@/src/action/signoutaction"

export default function SignOut() {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Sign Out
      </button>
    </form>
  )
}
