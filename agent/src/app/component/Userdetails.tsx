import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

type User = {
  user_id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
};

type UserDetailProps = {
  user: User[];
};

function Userdetails({ user }: UserDetailProps) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {user.map((u) => (
        <Card key={u.user_id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>
              {u.first_name} {u.middle_name} {u.last_name}
            </CardTitle>
            <CardDescription>{u.email}</CardDescription>
          </CardHeader>
          <CardContent>
            {/* You can add more details here if needed */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Userdetails;
