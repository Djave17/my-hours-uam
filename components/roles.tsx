"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users } from 'lucide-react'

export default function RolesView() {
  const router = useRouter()

  const handleRoleSelect = (role: string) => {
    if (role === "vida-estudiantil") {
      router.push("/login-vida-estudiantil-view")
    } else {
      router.push("/login-estudiantes-view?role=estudiante")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <Card className="w-[500px]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-12%20at%2013.50.19-CqSAzBp0SakGcJwuuTWDqi69Z9FsKN.svg"
              alt="UAM Logo"
              className="h-20 w-15"
            />
          </div>
          <CardTitle className="text-2xl font-semibold">Bienvenid@s a MyHoursUAM</CardTitle>
          <p className="text-lg text-muted-foreground mt-2">Selecciona tu Rol</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <Button
              variant="outline"
              className="h-auto flex flex-col items-center p-6 hover:border-[#4A9B9B] hover:text-[#4A9B9B]"
              onClick={() => handleRoleSelect("estudiante")}
            >
              <GraduationCap className="h-16 w-16 mb-4 text-[#4A9B9B]" />
              <span className="text-lg">Estudiante</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto flex flex-col items-center p-6 hover:border-[#4A9B9B] hover:text-[#4A9B9B]"
              onClick={() => handleRoleSelect("vida-estudiantil")}
            >
              <Users className="h-16 w-16 mb-4 text-[#4A9B9B]" />
              <span className="text-lg">Vida Estudiantil</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}