'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { GraduationCap } from 'lucide-react'
import dynamic from 'next/dynamic'
import type { UserData } from './user'

const PDFDownloadButton = dynamic(() => import('./PDFDownloadButton'), {
  ssr: false,
  loading: () => (
    <div className="w-fit bg-[#4A9B9B]/50 text-white px-4 py-2 rounded-md mt-4">
      Cargando...
    </div>
  ),
});

interface ProfileSectionProps {
  userData: UserData;
}

export function ProfileSection({ userData }: ProfileSectionProps) {
  return (
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
                <p>{userData.name}</p>
              </div>
              <div>
                <Label>CIF:</Label>
                <p>{userData.cif}</p>
              </div>
              <div>
                <Label>Carrera:</Label>
                <p>{userData.career}</p>
              </div>
              <div>
                <Label>Correo Electrónico:</Label>
                <p>{userData.email}</p>
              </div>
              <div>
                <Label>Número Celular:</Label>
                <p>{userData.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Estimado Usuario si desea actualizar sus datos dirigirse a Registro Academico
        </p>
        <PDFDownloadButton userData={userData} />
      </CardContent>
    </Card>
  );
}

