"use client"
import Image from 'next/image';
import UamLogo from "../assets/UAM-LOGO.png"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Bell, BookmarkPlus, Check, Edit, Facebook, Instagram, Linkedin, MessageSquare, Search, X } from 'lucide-react'

export function VidaEstudiantilDashboard() {
  const [newEvent, setNewEvent] = useState({
    type: "",
    benefit: "",
    name: "",
    schedule: "",
    location: "",
    spots: "",
  })

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="bg-[#4A9B9B] text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
                <Image
                    src={UamLogo}
                    alt="UAM Logo"
                    width={40} 
                    height={40} 
                />
              <h1 className="text-lg font-semibold">MyHoursUAM - Vida Estudiantil</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <nav className="border-b bg-white">
        <div className="container mx-auto flex h-12 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-[#4A9B9B]">
              <BookmarkPlus className="mr-2 h-4 w-4" />
              Favoritos
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-[#4A9B9B]">
              Administrador
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-6 px-4">
        <Tabs defaultValue="anadir-eventos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="anadir-eventos" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Añadir Eventos
            </TabsTrigger>
            <TabsTrigger value="eventos" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Eventos
            </TabsTrigger>
            <TabsTrigger value="asistencia" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Asistencia
            </TabsTrigger>
            <TabsTrigger value="ajustes" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Ajustes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="anadir-eventos">
            <Card>
              <CardHeader>
                <CardTitle>Nuevo Evento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">Todos los campos son requeridos</p>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>Tipo de Evento:</Label>
                    <RadioGroup className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="club" id="club" />
                        <Label htmlFor="club">Club</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="extracurricular" id="extracurricular" />
                        <Label htmlFor="extracurricular">Extracurricular</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="academico" id="academico" />
                        <Label htmlFor="academico">Academico</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Tipo de Beneficio:</Label>
                    <RadioGroup className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="horas" id="horas" />
                        <Label htmlFor="horas">Horas Laborales</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partidos" id="partidos" />
                        <Label htmlFor="partidos">Partidos</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-name">Nombre del Evento:</Label>
                    <Input id="event-name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schedule">Horario:</Label>
                    <Input id="schedule" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Lugar:</Label>
                    <Input id="location" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="spots">Cupos:</Label>
                    <Input id="spots" type="number" />
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button className="bg-[#4A9B9B] hover:bg-[#4A9B9B]/90">
                      <Check className="mr-2 h-4 w-4" />
                      Confirmar
                    </Button>
                    <Button variant="outline">
                      <X className="mr-2 h-4 w-4" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eventos">
            <Card>
              <CardHeader>
                <CardTitle>Filtros de Busqueda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Horario" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Mañana</SelectItem>
                      <SelectItem value="afternoon">Tarde</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de Evento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="club">Club</SelectItem>
                      <SelectItem value="extracurricular">Extracurricular</SelectItem>
                      <SelectItem value="academico">Académico</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Beneficio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="horas">Horas Laborales</SelectItem>
                      <SelectItem value="partidos">Partidos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">CONANCA</h3>
                      <div className="mt-2 space-y-2">
                        <p>Descripción: Se organizara una colecta de dinero para la Organización CONANCA</p>
                        <p>Tipo de Evento: Extracurricular</p>
                        <p>Beneficio: Horas Laborales</p>
                        <p>Horario: 7AM - 12 PM</p>
                        <p>Lugar: Auditorio Central</p>
                        <p>Cupos: 35</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                        <Check className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="asistencia">
            <Card>
              <CardHeader>
                <CardTitle>Asistencias por Confirmar</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>CIF</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Acción</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>12345678</TableCell>
                      <TableCell>Pendiente</TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>12345678</TableCell>
                      <TableCell>Pendiente</TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>12345678</TableCell>
                      <TableCell>Pendiente</TableCell>
                      <TableCell>
                        <Button variant="outline" size="icon" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ajustes">
            <Card>
              <CardHeader>
                <CardTitle>Cambiar Contraseña</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">Todos los campos son requeridos</p>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="current">Contraseña Actual:</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="new">Nueva Contraseña:</Label>
                    <Input id="new" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirm">Confirmar Contraseña:</Label>
                    <Input id="confirm" type="password" />
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button className="bg-[#4A9B9B] hover:bg-[#4A9B9B]/90">
                      <Check className="mr-2 h-4 w-4" />
                      Confirmar
                    </Button>
                    <Button variant="outline">
                      <X className="mr-2 h-4 w-4" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}