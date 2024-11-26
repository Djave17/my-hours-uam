'use client'

import React from 'react';
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import type { UserData } from './user';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ProfileReport from './ProfileReport';
import dynamic from 'next/dynamic';


interface PDFDownloadButtonProps {
  userData: UserData;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ userData }) => {
  return (
    <PDFDownloadLink
      document={<ProfileReport userData={userData} />}
      fileName="reporte_perfil.pdf"
    >
      {(loadingProps) => {
        const { loading, error } = loadingProps;
        console.log('PDFDownloadLink - Loading:', loading); 
        console.log('PDFDownloadLink - Error:', error);
        return (
          <Button
            className="w-fit bg-[#4A9B9B] text-white hover:bg-[#4A9B9B]/90 mt-4"
            disabled={loading}
          >
            <Download className="mr-2 h-4 w-4" />
            {loading ? 'Generando reporte...' : 'Descargar Reporte'}
          </Button>
        );
      }}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
