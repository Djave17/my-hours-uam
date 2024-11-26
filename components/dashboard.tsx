"use client"
import Image from 'next/image';
import UamLogo from "../assets/UAM-LOGO.png"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Bell, BookmarkPlus, Check, Download, Facebook, GraduationCap, Instagram, Linkedin, MessageSquare, Search, Trash2, X } from "lucide-react"
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,

} from 'recharts';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ProfileReport from './ProfileReport';


export function Dashboard() {

  const userData = {
    name: 'David Joel Sánchez Acevedo',
    cif: '230203',
    career: 'Ingeniería en Sistemas de la Información',
    email: 'dsancheza@uamv.edu.ni',
    phone: '+505 7515 1790',
  };

  const attendedEvents = [
    { id: 'VOLL101', name: 'Jaguares vs Leones', hours: 0, matches: 2, date: '1/11/2024', type: 'Deportivo' },
    { id: 'BASK102', name: 'Jaguares vs Real Estelí', hours: 0, matches: 2, date: '5/11/2024', type: 'Deportivo' },
    { id: 'CNCA202', name: 'Visita a Hospital', hours: 4, matches: 0, date: '2/11/2024', type: 'Voluntariado' },
    { id: 'UNCF103', name: 'Donación de Libros', hours: 2, matches: 0, date: '10/11/2024', type: 'Voluntariado' },
    { id: 'CR104', name: 'Donación de Sangre', hours: 5, matches: 0, date: '15/11/2024', type: 'Voluntariado' },
    { id: 'SOC107', name: 'Apoyo Comunitario', hours: 6, matches: 0, date: '25/11/2024', type: 'Social' }
  ];

  const totalHours = attendedEvents.reduce((sum, event) => sum + event.hours, 0);
  const totalMatches = attendedEvents.reduce((sum, event) => sum + event.matches, 0);

  const chartData = attendedEvents.map(event => ({
    name: event.name,
    hours: event.hours,
    matches: event.matches
  }));
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
              <h1 className="text-lg font-semibold">MyHoursUAM</h1>
            </div>
            <div className="flex items-center gap-4">
              
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
              David Joel Sanchez Acevedo 
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        <Tabs defaultValue="eventos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white">
            <TabsTrigger value="eventos" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Eventos
            </TabsTrigger>
            <TabsTrigger value="asistencia" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Asistencia
            </TabsTrigger>
            <TabsTrigger value="gestiones" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Gestiones
            </TabsTrigger>
            <TabsTrigger value="perfil" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Mi Perfil
            </TabsTrigger>
            <TabsTrigger value="ajustes" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Ajustes
            </TabsTrigger>
            <TabsTrigger value="reporte" className="data-[state=active]:bg-[#4A9B9B] data-[state=active]:text-white">
              Reporte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="eventos">
            <Card>
              <CardHeader>
                <CardTitle>Filtros de Busqueda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
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
                      <SelectItem value="extracurricular">Extracurricular</SelectItem>
                      <SelectItem value="volunteer">Voluntariado</SelectItem>
                      
                      
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de Beneficio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hours">Horas Laborales</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-[#4A9B9B] text-white hover:bg-[#4A9B9B]/90">
                    <Search className="mr-2 h-4 w-4" />
                    Buscar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Eventos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">CONANCA</h3>
                  <div className="mt-2 space-y-2">
                    <p>Descripcion: Se organizara una colecta de dinero para la Organizacion CONANCA</p>
                    <p>Tipo de Evento: Extracurricular</p>
                    <p>Beneficio: 6 Horas Laborales</p>
                    <p>Horario: 7 AM - 1 PM</p>
                    <p>Lugar: Auditorio Central</p>
                    <p>Cupos: 31</p>
                  </div>
                  <Button className="mt-4 bg-[#4A9B9B] text-white hover:bg-[#4A9B9B]/90">
                    <Check className="mr-2 h-4 w-4" />
                    Inscribirse
                  </Button>
                </div>
              </CardContent>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">CRUZ ROJA</h3>
                  <div className="mt-2 space-y-2">
                    <p>Descripcion: Se organizará una donación de sangre para el banco de sangre nacional</p>
                    <p>Tipo de Evento: Voluntariado</p>
                    <p>Beneficio: 10 Horas Laborales</p>
                    <p>Horario: 7 AM - 5 PM</p>
                    <p>Lugar: Auditorio Central</p>
                    <p>Cupos: --</p>
                  </div>
                  <Button className="mt-4 bg-[#4A9B9B] text-white hover:bg-[#4A9B9B]/90">
                    <Check className="mr-2 h-4 w-4" />
                    Inscribirse
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="asistencia" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Eventos Inscritos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Nombre del Evento</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Organizador</TableHead>
                      <TableHead>Beneficio</TableHead>
                      <TableHead>Tipo de evento</TableHead>
                      <TableHead>Hora de envío</TableHead>
                      <TableHead>Enviar Asistencia</TableHead>
                      
                  
                      
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1/11/2024</TableCell>
                      <TableCell>Donacion de libros </TableCell>
                      <TableCell>UNCF101</TableCell> 
                      <TableCell>Inscrito</TableCell>
                      <TableCell>UNICEF</TableCell>
                      <TableCell>4 Horas Laborales</TableCell>
                      <TableCell>Donacion</TableCell>
                      <TableCell>Lunes 1:00 p.m - Lunes 1:20 p.m</TableCell>
                      
                      <TableCell>
                        <Button variant="outline" size="sm">Disponible</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5/11/2024</TableCell>
                      <TableCell>Donación de Sangre</TableCell>
                      <TableCell>CR102</TableCell> 
                      <TableCell>Inscrito</TableCell>
                      <TableCell>Cruz Roja</TableCell>
                      <TableCell>6 Horas Laborales</TableCell>
                      <TableCell>Donacion</TableCell>
                      <TableCell>Jueves 10:00 a.m - Jueves 10:20 p.m</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" disabled>Disponible</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2/11/2024</TableCell>
                      <TableCell>Visita a Hospital </TableCell>
                      <TableCell>CNCA202</TableCell> 
                      <TableCell>Inscrito</TableCell>
                      <TableCell>CONANCA</TableCell>
                      <TableCell>4 Horas laborales</TableCell>
                      <TableCell>Voluntariado</TableCell>
                      <TableCell>Viernes 10:00 a.m - Viernes 10:20 p.m</TableCell>

                      <TableCell>
                        <Button variant="outline" size="sm" disabled>Disponible</Button>
                      </TableCell>
                    </TableRow>
                    
                  </TableBody>
                  
                </Table>
              </CardContent>
              

            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eventos Asistidos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Nombre del Evento</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>Organizador</TableHead>
                      <TableHead>Beneficio</TableHead>
                      <TableHead>Tipo de evento</TableHead>
                      <TableHead>Estado de asistencia</TableHead>
                      
                      
                      
                  
                      
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1/11/2024</TableCell>
                      <TableCell>Jaguares vs Leones </TableCell>
                      <TableCell>VOLL101</TableCell> 
                      
                      <TableCell>LNVF</TableCell>
                      <TableCell>2 Partidos</TableCell>
                      <TableCell>Partido</TableCell>
                      <TableCell>Confirmada</TableCell>
                      
                      
                      
                    </TableRow>
                    <TableRow>
                      <TableCell>5/11/2024</TableCell>
                      <TableCell>Jaguares vs Real Estelí</TableCell>
                      <TableCell>BASK102</TableCell> 
                     
                      <TableCell>LBM</TableCell>
                      <TableCell>6 Horas Laborales</TableCell>
                      <TableCell>Donacion</TableCell>
                      <TableCell>Enviada</TableCell>
                      
                      
                    </TableRow>
                    <TableRow>
                      <TableCell>2/11/2024</TableCell>
                      <TableCell>Visita a Hospital </TableCell>
                      <TableCell>CNCA202</TableCell> 
                      
                      <TableCell>CONANCA</TableCell>
                      <TableCell>4 Horas laborales</TableCell>
                      <TableCell>Voluntariado</TableCell>
                      <TableCell>Confirmada</TableCell>
                      

                      
                    </TableRow>
                    
                   
                    
                  </TableBody>
                  
                  
                </Table>
                
              </CardContent>

              <CardFooter className="text-sm text-muted-foreground space-y-10">Si tiene alguna duda o inconveniente con su asistencia,
                       por favor comunicarse con vida estudiantil</CardFooter>


            </Card>
            
          </TabsContent>

          <TabsContent value="gestiones">
            <Card className="border-[#4A9B9B]/20">
              <CardHeader>
                <CardTitle className="text-[#4A9B9B]">Eventos Inscritos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-[#4A9B9B]/20 p-4">
                    <div>
                      <h3 className="font-medium">CONANCA</h3>
                      <p className="text-sm text-gray-600">Estado: Inscrito</p>
                    </div>
                    <Button variant="outline" size="icon" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar evento</span>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-[#4A9B9B]/20 p-4">
                    <div>
                      <h3 className="font-medium">Donacion de Sangre</h3>
                      <p className="text-sm text-gray-600">Estado: Inscrito</p>
                    </div>
                    <Button variant="outline" size="icon" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar evento</span>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-4">
                  <Button className="bg-[#4A9B9B] hover:bg-[#4A9B9B]/90">
                    <Check className="mr-2 h-4 w-4" />
                    Confirmar
                  </Button>
                  <Button variant="outline" className="border-[#4A9B9B] text-[#4A9B9B] hover:bg-[#4A9B9B] hover:text-white">
                    <X className="mr-2 h-4 w-4" />
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="perfil">
            <Card>
              <CardHeader>
                <CardTitle>Mis Datos Personales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-32 w-32 text-[#4A9B9B]" />
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Nombre Completo:</Label>
                        <p>David Joel Sánchez Acevedo</p>
                      </div>
                      <div>
                        <Label>CIF:</Label>
                        <p>23023212</p>
                      </div>
                      <div>
                        <Label>Carrera:</Label>
                        <p>Ingeniería en sistemas de la información</p>
                      </div>
                      <div>
                        <Label>Correo Electronico:</Label>
                        <p>dsancheza@uamv.edu.ni</p>
                      </div>
                      <div>
                        <Label>Numero Celular:</Label>
                        <p>+505 7515 1790</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Estimado Usuario si desea actualizar sus datos dirigirse a Registro Academico
                    </p>
                    <Button className="w-fit bg-[#4A9B9B] text-white hover:bg-[#4A9B9B]/90">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar Reporte
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ajustes">
            <Card>
              <CardHeader>
                <CardTitle>Cambio de Contraseña</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">Todos los campos son requeridos</p>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="current">Actual Contraseña:</Label>
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
                </div>
                <div className="space-y-4">
                  <Label>Notificaciones</Label>
                  <RadioGroup defaultValue="activar">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="activar" id="activar" />
                      <Label htmlFor="activar">Activar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="desactivar" id="desactivar" />
                      <Label htmlFor="desactivar">Desactivar</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-[#4A9B9B] text-white hover:bg-[#4A9B9B]/90">
                    <Check className="mr-2 h-4 w-4" />
                    Confirmar
                  </Button>
                  <Button variant="outline">
                    <X className="mr-2 h-4 w-4" />
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reporte">
            <Card>
              <CardHeader>
                <CardTitle>Reporte de Horas y Eventos Asistidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Resumen de Horas</h3>
                      <p className="text-3xl font-bold text-[#4A9B9B]">{totalHours} Horas Totales</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Resumen de Partidos</h3>
                      <p className="text-3xl font-bold text-[#4A9B9B]">{totalMatches} Partidos Totales</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Gráfico de Horas y Partidos por Evento</h3>
                  
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="hours" fill="#4A9B9B" name="Horas" />
                        <Bar dataKey="matches" fill="#4B9B" name="Partidos" />
                      </BarChart>
                    </ResponsiveContainer>
                    
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Eventos Asistidos</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Fecha</TableHead>
                          <TableHead>ID del Evento</TableHead>
                          <TableHead>Nombre del Evento</TableHead>
                          <TableHead>Tipo</TableHead>
                          <TableHead>Horas Acreditadas</TableHead>
                          <TableHead>Partidos Acreditados</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {attendedEvents.map((event) => (
                          <TableRow key={event.id}>
                            <TableCell>{event.date}</TableCell>
                            <TableCell>{event.id}</TableCell>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.type}</TableCell>
                            <TableCell>{event.hours > 0 ? event.hours : '-'}</TableCell>
                            <TableCell>{event.matches > 0 ? event.matches : '-'}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <Button className="bg-[#4A9B9B] text-white hover:bg-[#4A9B9B]/90">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Reporte Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
