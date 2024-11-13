"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { X } from 'lucide-react'

export default function LoginView() {
  const router = useRouter()
  const [cif, setCif] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (cif === "23020386" && password === "123") {
      router.push("./dashboard")
    } else {
      setError("CIF o contraseña incorrectos")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <Card className="w-[400px]">
        <CardHeader className="flex items-center justify-center pb-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-12%20at%2013.50.19-CqSAzBp0SakGcJwuuTWDqi69Z9FsKN.svg"
            alt="UAM Logo"
            className="h-24 w-24"
          />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription className="flex items-center justify-between">
                  {error}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0"
                    onClick={() => setError("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="cif">CIF:</Label>
              <Input
                id="cif"
                value={cif}
                onChange={(e) => setCif(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña:</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4A9B9B] hover:bg-[#4A9B9B]/90"
            >
              Ingresar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}